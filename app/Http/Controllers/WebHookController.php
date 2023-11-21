<?php
namespace App\Http\Controllers;
use App\Helpers\Helper;
use App\Models\Transaction;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class WebHookController extends Controller
{
    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function webhookHandlerOkeConnect(Request $request){
        Log::debug($request);

//        $transaction = Transaction::where('order_id', $request['merchantOrderId'])->first();
//        $user = User::where('id', $transaction['user_id'])->first();
//
//        if ($transaction->status_id != Transaction::SUCCESS) {
//            switch($request['status']) {
//                case ('SUCCESS'):
//                    $user->deposit($request['amount']);
//                    $status_id = Transaction::SUCCESS;
//                    break;
//
//                case ('CANCEL'):
//                    $status_id = Transaction::CANCEL;
//                    break;
//
//                case ('FAILED'):
//                    $status_id = Transaction::ERROR;
//                    break;
//
//                default:
//                    $status_id = Transaction::UNDEFINED;
//            }
//
//            $transaction->update([
//                'status_id' => $status_id,
//                'desc' => $request['payment_reff']
//            ]);
//        }

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
//        $secret = 'waykapay';
//
//        $post_data = file_get_contents('php://input');
//        $signature = hash_hmac('sha1', $post_data, $secret);
//        Log::info($signature);
//
//        if ($request->header('X-Hub-Signature') == 'sha1='.$signature) {
//            Log::info(json_decode($request->getContent(), true));
//        }

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
            }
        }

        Helper::update_digiflazz_saldo($anj->data->buyer_last_saldo);

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
