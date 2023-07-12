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

//        dd($request->all());
        $order_id = "dp-".$request->id."-".\Illuminate\Support\Str::random(8);

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
//            $transaction = Transaction::create([
//                'token' => $response->object()->token,
//                'redirect_url' => $response->object()->redirect_url,
//                'user_id' => $request['user_id'],
//                'status_id' => Transaction::PENDING,
//                'category_id' => Transaction::DEPOSIT,
//                'order_id' => $order_id,
//                'amount' => $request['amount'],
//            ]);

            return Inertia::render('Deposit/Confirm', [
                'users'     => User::where('id', $request['user_id'])->first(),
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

        switch($request['status']) {
            case ('success'):
                $user->deposit($request['amount']);
                $status_id = Transaction::SUCCESS;

                session()->flash('flash.banner', 'Deposit sejumlah Rp '.$request['amount'].' berhasil!');
                session()->flash('flash.bannerStyle', 'success');
                break;

            case ('pending'):
                $status_id = Transaction::PENDING;

                session()->flash('flash.banner', 'Deposit pending!');
                session()->flash('flash.bannerStyle', 'danger');
                break;

            case ('error'):
                $status_id = Transaction::ERROR;

                session()->flash('flash.banner', 'Deposit error!');
                session()->flash('flash.bannerStyle', 'danger');
                break;

            case ('close'):
                $status_id = Transaction::CLOSE;

                session()->flash('flash.banner', 'Deposit close!');
                session()->flash('flash.bannerStyle', 'danger');
                break;

            default:
                $status_id = Transaction::UNDEFINED;

                session()->flash('flash.banner', 'Gatau lagi kami!');
                session()->flash('flash.bannerStyle', 'danger');
        }

        $transaction = Transaction::create([
            'token' => $request['token'],
            'redirect_url' => $request['redirect_url'],
            'user_id' => $request['user_id'],
            'status_id' => $status_id,
            'category_id' => Transaction::DEPOSIT,
            'order_id' => $request['order_id'],
            'amount' => $request['amount'],
        ]);

        return to_route('dashboard');

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
