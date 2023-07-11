<?php

namespace App\Http\Controllers;

use App\Helpers\Helper;
use App\Models\Transaction;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use Psy\Util\Str;
use Stephenjude\Wallet\Exceptions\InsufficientFundException;

class DepositController extends Controller
{
    public function index() {

        return Inertia::render('Deposit/CreateEdit', [
            'users' => auth()->user(),
            'response'  => null,
        ]);
    }

    public function create(Request $request) {

//        dd($user->all(), $request->all());
        $order_id = "deposit-".$request->id."-".\Illuminate\Support\Str::random(8);

        $response = Http::withHeaders([
            'Accept' => 'application/json',
            'Content-Type' => 'application/json',
            'Authorization' => 'Basic '.base64_encode(Helper::api()->midtrans_server_key.':')
        ])->post('https://app.sandbox.midtrans.com/snap/v1/transactions',
            [
            "transaction_details" => [
                "order_id" => $order_id,
                "gross_amount" => $request['amount']
            ],
            "item_details" => [
                [
                    "id" => "DEPOSIT",
                    "price" => $request['amount'],
                    "quantity" => 1,
                    "name" => "deposit",
                    "brand" => "Waykapay",
                    "category" => "payment",
                    "merchant_name" => "Waykapay",
                    "url" => "https://waykapay.com"
                ]
            ],
            "customer_details" => [
                    "first_name" => $request->name,
                    "last_name" => "",
                    "email" => $request->email,
                    "phone" => $request->phone,
                ],
            ],
        );

//        dd($response->object());

        if ($response->successful()) {
            return Inertia::render('Deposit/Confirm', [
                'users'     => auth()->user(),
                'response'  => $response->object(),
                'amount'    => $request['amount'],
                'order_id'  => $order_id
            ]);

        } else {
            dd($response->status());
        }


    }

    public function confirm(Request $request) {
//        dd($request->toArray());

        $user = User::where('id', $request['user_id'])->first();

        if ($request['status'] == 'success') {
            $user->deposit($request['amount']);
            $status = Transaction::SUCCESS;

            session()->flash('flash.banner', 'Deposit sejumlah Rp '.$request['amount'].' berhasil!');
            session()->flash('flash.bannerStyle', 'success');

        } elseif ($request['status'] == 'pending') {
            $status = Transaction::PENDING;

            session()->flash('flash.banner', 'Deposit pending!');
            session()->flash('flash.bannerStyle', 'danger');

        } elseif ($request['status'] == 'error') {
            $status = Transaction::ERROR;

            session()->flash('flash.banner', 'Deposit error!');
            session()->flash('flash.bannerStyle', 'danger');

        } elseif ($request['status'] == 'close') {
            $status = Transaction::CLOSE;

            session()->flash('flash.banner', 'Deposit close!');
            session()->flash('flash.bannerStyle', 'danger');

        } else {
            $status = Transaction::UNDEFINED;

            session()->flash('flash.banner', 'Gatau lagi kami!');
            session()->flash('flash.bannerStyle', 'danger');
        }

        $transaction = Transaction::create([
            'token' => $request['token'],
            'redirect_url' => $request['redirect_url'],
            'user_id' => $request['user_id'],
            'status_id' => $status,
            'category_id' => Transaction::DEPOSIT,
            'order_id' => $request['order_id'],
            'amount' => $request['amount'],
        ]);

        return Redirect::route('dashboard');

    }

    public function withdraw(User $user) {

        $amount = 34000;

        try {
            $user->withdraw($amount);

//            activity()
//                ->withProperties([
//                    'amount' => $amount
//                ])
//                ->event('withdraw')
//                ->log('withdraw');

        } catch (InsufficientFundException $e) {
            report($e);
            session()->flash('flash.banner', 'Saldo tidak mencukupi!');
            session()->flash('flash.bannerStyle', 'danger');
            return false;
        }
    }
}
