<?php
namespace App\Http\Controllers;
use App\Helpers\Helper;
use App\Models\Device;
use App\Models\Transaction;
use App\Models\User;
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
        Log::debug($request);

        $transaction = Transaction::where('desc', $request['merchantOrderId'])->first();
        $user = User::where('id', $transaction['user_id'])->first();

//        dd($transaction);
        if ($transaction->status_id != Transaction::SUCCESS) {
            switch($request['status']) {
                case ('SUCCESS'):
                    $user->deposit($request['amount']);
                    $status_id = Transaction::SUCCESS;

                    if ($user->device_token) {
                        $msg = [
                            'title' => 'Deposit Rp '.$request['amount'].' berhasil!',
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
                'desc'  =>  $request['merchantOrderId'].' '.$request['payment_reff']
            ]);
        }

        return response()->json('ok');
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function webhookHandlerDokuAcceptPayment(Request $request){

        $transaction = Transaction::where('order_id', $request['order']['invoice_number'])->first();
        $user = User::where('id', $transaction['user_id'])->first();

        if ($transaction->status_id != Transaction::SUCCESS) {
            switch($request['transaction']['status']) {
                case ('SUCCESS'):
                    $user->deposit($transaction->amount);
                    $status_id = Transaction::SUCCESS;
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
            ]);
        }

        return response()->json('ok');
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function webhookHandlerFlipAcceptPayment(Request $request){

        $transaction = Transaction::where('order_id', $request['bill_link_id'])->first();
        $user = User::where('id', $transaction['user_id'])->first();

        if ($transaction->status_id != Transaction::SUCCESS) {
            switch($request['status']) {
                case ('SUCCESSFUL'):
                    $user->deposit($transaction->amount);
                    $status_id = Transaction::SUCCESS;
                    break;

                case ('CANCELLED'):
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
            ]);
        }

        return response()->json('ok');
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function webhookHandlerDigiflazz(Request $request){
//        Log::info(json_decode($request->getContent(), true));

        $anj = json_decode($request->getContent());

        $transaction = Transaction::where('order_id', $anj->data->ref_id)->first();
        $user = User::where('id', $transaction['user_id'])->first();

        if ($transaction->status_id != Transaction::SUCCESS) {
            switch($anj->data->status) {
                case ('Sukses'):
                    $transaction->update([
                        'status_id' => Transaction::SUCCESS,
                        'desc' => $anj->data->sn,
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
                        'desc' => $anj->data->rc.' '.$anj->data->message,
                    ]);
                    break;

                default:
                    $user->deposit($transaction->gross_amount);
                    $transaction->update([
                        'status_id' => Transaction::ERROR,
                        'desc' => $anj->data->rc.' '.$anj->data->message,
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

        Helper::update_digiflazz_saldo($anj->data->buyer_last_saldo);

        return response()->json('ok');
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function webhookHandlerPushyRegister(){

        Log::debug(Req::input('token'));
        Log::debug(Req::input('user'));

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

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function webhookHandlerMidtrans(Request $request){
        // In my own case, I will add the delay function
//        sleep(10); //this will delay the script for 50 seconds

        $transaction = Transaction::where('order_id', $request['order_id'])->first();
        $user = User::where('id', $transaction['user_id'])->first();

        if ($transaction->status_id != Transaction::SUCCESS) {
            switch($request['status_code']) {
                case ('200'):
                    $user->deposit($transaction->amount);
                    $status_id = Transaction::SUCCESS;
                    break;

                case ('201'):
                    $status_id = Transaction::PENDING;
                    break;

                case ('202'):
                    $status_id = Transaction::ERROR;
                    break;

                default:
                    $status_id = Transaction::UNDEFINED;
            }

            $transaction->update([
                'status_id' => $status_id,
            ]);
        }

        return response()->json('ok');
    }

}
