<?php

namespace App\Http\Controllers;

use App\Helpers\Helper;
use App\Models\AppSetting;
use App\Models\Transaction;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function topup(Request $request)
    {
        $admin_fee = (Helper::api()->fees / 100) * $request['amount'];
        $gross_amount = $request['amount'] + $admin_fee;

//        dd($request->all());
        $order_id = "pre-".$request['user_id']."-".\Illuminate\Support\Str::random(8);

        $response = Http::post('https://api.digiflazz.com/v1/transaction', [
            'username' => Helper::api()->digiflazz_username,
            'buyer_sku_code' => $request['sku'],
            'customer_no' => $request['customer_no'],
            'ref_id' => $order_id,
            'sign' => md5(Helper::api()->digiflazz_username.Helper::api()->digiflazz_key.$order_id),
//            'testing' => true
        ]);

//        dd($response->object()->data);

        if ($response->successful()) {
            $user = User::where('id', $request['user_id'])->first();

            $transaction = Transaction::create([
                'sku' => $request['sku'],
                'order_id' => $order_id,
                'product_name' => $request['product_name'],
                'customer_no' => $request['customer_no'],
                'user_id' => $request['user_id'],
                'status_id' => Transaction::PENDING,
                'category_id' => $request['category_id'],
                'amount' => $request['amount'],
                'gross_amount' => $gross_amount,
                'last_amount' => $user->wallet_balance,
                'admin_fee' => $admin_fee,
                'desc' => $response->object()->data->sn ?? $response->object()->data->rc.' '.$response->object()->data->message,
            ]);

//            $user->withdraw($transaction->gross_amount);

            switch($response->object()->data->status) {
                case ('Pending'):
                case ('Sukses'):
                    $user->withdraw($transaction->gross_amount);
                    break;
                default:
            }

        return Inertia::render('Payment/Pending', [
            'transaction' => $transaction
        ]);

        } else {
//            dd($response->status());
            return Inertia::render('Payment/Info', [
                'transaction' => $response->object()->data,
            ]);
        }
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function status(Request $request)
    {
//        dd($request->all());
        $request = $request['transaction'];

        $user = User::where('id', $request['user_id'])->first();
        $transaction = Transaction::where('id', $request['id'])->first();

        $status = Http::post('https://api.digiflazz.com/v1/transaction', [
//            'commands' => 'status-pasca',
            'username' => Helper::api()->digiflazz_username,
            'buyer_sku_code' => $request['sku'],
            'customer_no' => $request['customer_no'],
            'ref_id' => $request['order_id'],
            'sign' => md5(Helper::api()->digiflazz_username.Helper::api()->digiflazz_key.$request['order_id']),
        ]);

//            dd($status->object()->data);

        switch($status->object()->data->status) {
            case ('Sukses'):
//                    $user->withdraw($request['amount']);
                $transaction->update([
                    'status_id' => Transaction::SUCCESS,
                    'desc' => $status->object()->data->sn
                ]);

                return Inertia::render('Payment/Success', [
                    'transaction'   => $transaction
                ]);
                break;

            case ('Pending'):
                $transaction->update([
                    'status_id' => Transaction::PENDING,
                    'desc' => $status->object()->data->rc.' '.$status->object()->data->message
                ]);

                return Inertia::render('Payment/Pending', [
                    'transaction'   => $transaction
                ]);
                break;

            default:
                $transaction->update([
                    'status_id' => Transaction::ERROR,
                    'desc' => $status->object()->data->rc.' '.$status->object()->data->message
                ]);

                $user->deposit($transaction->gross_amount);

                return Inertia::render('Payment/Error', [
                    'transaction'   => $transaction
                ]);
        }



    }

}
