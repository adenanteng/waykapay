<?php
namespace App\Http\Controllers;
use App\Helpers\Helper;
use App\Models\Device;
use App\Models\Transaction;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Request as Req;

class WebHookController extends Controller
{
    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function webhookHandlerOkeConnect(Request $request){
//        dd(Req::input('order'));
//        dd($request->all());
        Log::info($request->getContent());

        $transaction = Transaction::where('order_id', Req::input('order'))->first();
        $user = User::where('id', $transaction['user_id'])->first();

//        dd($transaction);
        if ($transaction->status_id != Transaction::SUCCESS) {
            switch($request['status']) {
                case ('SUCCESS'):
//                    $user->deposit($transaction->amount);
                    $user->update([
                        'wallet_balance' => $user->wallet_balance + $transaction->amount,
                    ]);
                    $status_id = Transaction::SUCCESS;

                    if ($user->device_token) {
                        $msg = [
                            'title' => 'Deposit Rp '.$transaction->amount.' berhasil!',
                            'body' => 'Lorem ipsum dolor sit amet',
                            'badge' => 1,
                            'sound' => 'ping.aiff'
                        ];
                        Helper::sendNotification($user->device_token, $msg);
                    }
                    break;

                case ('CANCEL'):
                    $status_id = Transaction::CANCEL;
                    break;

                case ('FAILED'):
                    $status_id = Transaction::ERROR;
                    break;

                default:
                    $status_id = Transaction::UNDEFINED;
            }

            $transaction->update([
                'status_id' => $status_id,
                'desc'  =>  $request['payment_reff'] ?? null,
//                'desc'  =>  $request['merchantOrderId'].' '.$request['payment_reff']
            ]);
        }

        Helper::pusher()->trigger('transaction-channel', 'transaction-event', array('action' => 'reload', 'user' => $user->slug));
        return response()->json('ok');
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function webhookHandlerDigiflazz(Request $request){
        Log::info($request->getContent());
//        Log::debug(json_decode($request->getContent()));
        $anj = $request->all();

        $transaction = Transaction::where('order_id', $anj['data']['ref_id'])->first();
        $user = User::where('id', $transaction['user_id'])->first();

        if ($transaction->status_id != Transaction::SUCCESS) {
            switch($anj['data']['status']) {
                case ('Sukses'):
                    $transaction->update([
                        'status_id' => Transaction::SUCCESS,
                        'desc' => $anj['data']['sn'],
                    ]);

                    $user->update(
                        [ 'coin'=> DB::raw('coin+6') ]
                    );

                    if ($user->device_token) {
                        $msg = [
                            'title' => 'Transaksi '.$transaction->product_name.' berhasil!',
                            'body' => 'Lorem ipsum dolor sit amet',
                            'badge' => 1,
                            'sound' => 'ping.aiff'
                        ];
                        Helper::sendNotification($user->device_token, $msg);
                    }
                    break;

                case ('Pending'):
                    $transaction->update([
                        'status_id' => Transaction::PENDING,
                        'desc' => $anj['data']['rc'].' '.$anj['data']['message'],
                    ]);
                    break;

                default:
//                    $user->deposit($transaction->gross_amount);
                    $user->update([
                        'wallet_balance' => $user->wallet_balance + $transaction->gross_amount,
                        'coin' => DB::raw('coin+6')
                    ]);
                    $transaction->update([
                        'status_id' => Transaction::ERROR,
                        'desc' => $anj['data']['rc'].' '.$anj['data']['message'],
                    ]);

                    if ($user->device_token) {
                        $msg = [
                            'title' => 'Transaksi '.$transaction->product_name.' gagal!',
                            'body' => 'Lorem ipsum dolor sit amet',
                            'badge' => 1,
                            'sound' => 'ping.aiff'
                        ];
                        Helper::sendNotification($user->device_token, $msg);
                    }
            }
        }

        Helper::pusher()->trigger('transaction-channel', 'transaction-event', array('action' => 'reload', 'user' => $user->slug));
        Helper::update_digiflazz_saldo($anj['data']['buyer_last_saldo']);

        return response()->json('ok');
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function webhookHandlerPushyRegister(){

//        Log::info(Req::input('token'), Req::input('user'));

//        $device = Device::latest()->first();
//        if ($device) {
//            $user = User::where('id', $device->user_id)->first();
//            $user->update([
//                'device_token' => Req::input('token'),
//            ]);
//
//            $device->delete();
//        }

        $user = User::where('slug', Req::input('user'))->first();
        if ($user) {
            $user->update([
                'device_token' => Req::input('token'),
            ]);
        }

//        if ($user->device_token) {
        $msg = [
            'title' => 'Halo '.$user->name.', perangkatmu berhasil ditautkan!',
            'body' => 'Lorem ipsum dolor sit amet',
            'badge' => 1,
            'sound' => 'ping.aiff'
        ];
        Helper::sendNotification($user->device_token, $msg);
//        }

        $response = Http::post('https://api.pushy.me/topics/subscribe?api_key=c6c48c9d9c6de34d676a6ba63ca60d8fd6437b970e2f82facb9c6540918b6dd0', [
            'token' => Req::input('token'),
            'topics' => [
                'user'
            ],
        ]);

        return response()->json('ok');
    }

    public function webhookAyoBeneficiary(Request $request) {
//        $request->headers->set('Content-Type', 'application/json');
        Log::info($request->getContent());

        sleep(5);

        if ($request['code'] == 201) {
            Helper::pusher()
                ->trigger('ayo-beneficiary-channel', 'ayo-beneficiary-event',
                    array(
                        'action' => 'success',
                        'beneficiaryAccountNumber' => $request['details']['beneficiaryAccountNumber'],
                        'beneficiaryName' => $request['details']['beneficiaryName'],
                    ));
        } else {
            Helper::pusher()
                ->trigger('ayo-beneficiary-channel', 'ayo-beneficiary-event',
                    array(
                        'action' => 'error',
                        'beneficiaryAccountNumber' => $request['details']['beneficiaryAccountNumber'],
                        'message' => $request['message'],
                    ));
        }

        return 'ok';
    }

    public function webhookAyoDisbursement(Request $request) {
//        $request->headers->set('Content-Type', 'application/json');
        Log::info($request->getContent());

        $transaction = Transaction::where('order_id', $request['details']['A-Correlation-ID'])->first();

//        dd($request['transactionId'], $request['details']['status'], $transaction);
        $user = User::where('id', $transaction['user_id'])->first();

        if ($transaction->status_id != Transaction::SUCCESS) {
            switch($request['details']['status']) {
                case (0):
                    $transaction->update([
                        'status_id' => Transaction::PENDING,
                    ]);
                    break;

                case (1):
                    $transaction->update([
                        'status_id' => Transaction::SUCCESS,
                    ]);

                    if ($user->device_token) {
                        $msg = [
                            'title' => 'Kirim uang ke '.$transaction->money_transfer->to_name.' berhasil!',
                            'body' => 'Lorem ipsum dolor sit amet',
                            'badge' => 1,
                            'sound' => 'ping.aiff'
                        ];
                        Helper::sendNotification($user->device_token, $msg);
                    }
                    break;

                case (4):
                    $user->update([
                        'wallet_balance' => $user->wallet_balance + $transaction->gross_amount,
                    ]);
                    $transaction->update([
                        'status_id' => Transaction::ERROR,
                        'desc' => $request['details']['errors'][0]['details'],
                    ]);

                    if ($user->device_token) {
                        $msg = [
                            'title' => 'Kirim uang ke '.$transaction->money_transfer->to_name.' gagal!',
                            'body' => 'Lorem ipsum dolor sit amet',
                            'badge' => 1,
                            'sound' => 'ping.aiff'
                        ];
                        Helper::sendNotification($user->device_token, $msg);
                    }
                    break;

                default:
                    $transaction->update([
                        'status_id' => Transaction::PENDING,
                    ]);
            }
        }

        sleep(5);

        Helper::pusher()
            ->trigger(
                'ayo-disbursement-channel',
                'ayo-disbursement-event',
                array(
                    'action' => 'reload',
                    'orderId' => $request['details']['A-Correlation-ID']
                ));

        return 'ok';
    }

    public function webhookAyoInquiry(Request $request) {
//        $request->headers->set('Content-Type', 'application/json');
        Log::info($request->getContent());
//        Log::debug('ini inquiry');
        return 'ok';
    }

    public function webhookTest() {
        Helper::pusher()->trigger('transaction-channel', 'transaction-event', array('action' => 'reload', 'user' => auth()->user()->slug));

        return 'ok';
    }

}
