<?php

namespace App\Http\Controllers;

use App\Helpers\Helper;
use App\Models\Transaction;
use App\Models\TransactionCustomer;
use App\Models\TransactionMoneyTransfer;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Inertia\Inertia;

class MoneyTransferController extends Controller
{
    public function index()
    {
        return Inertia::render('MoneyTransfer/Bank', [
            'response' => null,
            'customer_list' => Inertia::lazy(fn () => Helper::transactionCustomer(['WAYKAPAY'])),
        ]);
    }

    public function amount(Request $request)
    {
//        dd($request->toArray());
        Validator::make($request->toArray(), [
            'bank' => ['required'],
            'account_no' => ['required'],
        ])->validateWithBag('storeInformation');

        $to = User::where('phone', $request['account_no'])->first();

        if ($to && $to->id != auth()->user()->id) {
            $users = $to;
        } else {
//            dd('Nomor rekening tidak valid');
            session()->flash('flash.banner', 'Nomor rekening tidak valid!');
            session()->flash('flash.bannerStyle', 'danger');
            return \redirect()->back();
        }

//        dd($users);
        return Inertia::render('MoneyTransfer/CreateEdit', [
            'users' => $users,
            'bank' => $request['bank'],
            'account_no' => $request['account_no']
        ]);
    }

    public function confirm(Request $request)
    {
        Log::info($request);

//        if (auth()->user()->pin != null) {
//            Validator::make($request->toArray(), [
//                'pin' => ['required'],
//            ])->validateWithBag('storeInformation');
//
//            if (!Hash::check($request['pin'], auth()->user()->pin)) {
//                return to_route('pin.wrong');
//            }
//        }

        $to = User::where('phone', $request['account_no'])->first();
        $user = auth()->user();

        $transaction = Transaction::create([
            'sku' => '-',
            'order_id' => strtolower(Str::random(8)),
            'brand' => 'WAYKAPAY',
            'product_name' => 'Kirim uang',
            'customer_no' => $to->phone,
            'user_id' => $user->id,
            'status_id' => Transaction::PENDING,
            'category_id' => Transaction::TRANSFER,
            'amount' => $request['amount'],
            'gross_amount' => $request['amount'] + $request['bank']['admin'],
            'last_amount' => $user->wallet_balance,
            'admin_fee' => $request['bank']['admin'],
            'desc' => $request['desc'],
        ]);

        $money_transfer = TransactionMoneyTransfer::create([
            'transaction_id' => $transaction->id,
            'bank_id' => $request['bank']['id'],
            'to_name' => $to->name,
            'to_number' => $to->phone,
            'to_id' => $to->id,
        ]);

//        $user->withdraw($transaction->gross_amount);
        //        $to->deposit($transaction->amount);
        $user->update([
            'wallet_balance' => $user->wallet_balance - $transaction->gross_amount,
        ]);
        $to->update([
            'wallet_balance' => $to->wallet_balance + $transaction->gross_amount,
        ]);

        $transaction->update([
            'status_id' => Transaction::SUCCESS
        ]);

        $transaction = Transaction::where('order_id', $transaction->order_id)->first();

//        dd($transaction->toArray());

        if (auth()->user()->device_token) {
            $msg = [
                'title' => 'Kirim uang ke '.$to->name.' berhasil!',
                'body' => 'Lorem ipsum dolor sit amet',
                'badge' => 1,
                'sound' => 'ping.aiff'
            ];
            Helper::sendNotification($user->device_token, $msg);
        }

        if ($to->device_token) {
            $msg = [
                'title' => $user->name.' mengirim uang sejumlah Rp '.$request['amount'],
                'body' => 'Lorem ipsum dolor sit amet',
                'badge' => 1,
                'sound' => 'ping.aiff'
            ];
            Helper::sendNotification($to->device_token, $msg);
        }

//        return $response->object()->data->deposit;

        $save = !TransactionCustomer::where('user_id', auth()->user()->id)
            ->where('customer_no', $request['customer_no'])
            ->where('brand', $transaction->brand)
            ->first();

        return Inertia::render('History/Show', [
            'history' => $transaction,
            'goBack' => false,
            'goSuccess' => true,
            'saveCustomer' => $save,
        ]);

//        $transaction->goBack = false;
//        $transaction->goSuccess = true;
//
//        return to_route('history.show', [
//            $transaction->order_id
//        ]);
    }

    public function test()
    {
        $response = Http::withHeaders([
            'Accept' => 'application/json',
            'Content-Type' => 'application/json',
            'X-SIGNATURE' => '',
            'X-CLIENT-KEY' => 'ASnwtsfNMsJZRF4M8K3vW3Xk77xlLiTh',
            'X-TIMESTAMP' => Carbon::now(),
        ])->post('https://sandbox.partner.api.bri.co.id/snap/v1.0/access-token/b2b',
            [
//                "transaction_details" => [
//                    "order_id" => $order_id,
//                    "gross_amount" => $gross_amount,
//                ],
//                "item_details" => [
//                    [
//                        "id" => "DEPOSIT",
//                        "price" => $gross_amount,
//                        "quantity" => 1,
//                        "name" => "Deposit",
//                        "brand" => "Waykapay",
//                        "category" => "deposit",
//                        "merchant_name" => "Waykapay",
//                        "url" => "https://waykapay.com"
//                    ]
//                ],
//                "customer_details" => [
//                    "first_name" => $request['name'],
//                    "last_name" => "",
//                    "email" => $request['email'],
//                    "phone" => $request['phone'],
//                ],
//                "payment_type" => $payment_type,
//                $payment_type => [
//                    "bank" => $request['method']['name'],
//                ],
            ],
        );

        dd($response->object());
    }
}
