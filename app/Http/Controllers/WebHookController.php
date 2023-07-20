<?php
namespace App\Http\Controllers;
use App\Models\Transaction;
use App\Models\User;
use Illuminate\Http\Request;
class WebHookController extends Controller
{
    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function webhookHandlerMidtrans(Request $request){
        // We have access to the request body here
        // So, you can perform any logic with the data

        $transaction = Transaction::where('order_id', $request['order_id'])->first();
        $user = User::where('id', $transaction->user_id)->first();

//        dd($transaction->toArray(), $user->toArray());

        switch($request['status_code']) {
            case ('200'):
                $user->deposit($request['amount']);
                $status_id = Transaction::SUCCESS;

                session()->flash('flash.banner', 'Deposit sejumlah Rp '.$request['amount'].' berhasil!');
                session()->flash('flash.bannerStyle', 'success');
                break;

            case ('201'):
                $status_id = Transaction::PENDING;

                session()->flash('flash.banner', 'Deposit pending!');
                session()->flash('flash.bannerStyle', 'danger');
                break;

            case ('202'):
                $status_id = Transaction::ERROR;

                session()->flash('flash.banner', 'Deposit error!');
                session()->flash('flash.bannerStyle', 'danger');
                break;

            default:
                $status_id = Transaction::UNDEFINED;

                session()->flash('flash.banner', 'Gatau lagi kami!');
                session()->flash('flash.bannerStyle', 'danger');
        }

        $transaction->update([
            'status_id' => $status_id,
        ]);

        // In my own case, I will add the delay function
        sleep(5); //this will delay the script for 50 seconds
        return response()->json('ok');
    }
}
