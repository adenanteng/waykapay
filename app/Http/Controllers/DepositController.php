<?php

namespace App\Http\Controllers;

use App\Helpers\Helper;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use Psy\Util\Str;
use Spatie\Activitylog\Models\Activity;
use Stephenjude\Wallet\Exceptions\InsufficientFundException;

class DepositController extends Controller
{
    public function index() {

        return Inertia::render('Deposit/CreateEdit', [
            'users' => auth()->user(),
            'response'  => null,
        ]);
    }

    public function create(Request $request, User $user) {

        $response = Http::withHeaders([
            'Accept' => 'application/json',
            'Content-Type' => 'application/json',
            'Authorization' => 'Basic '.base64_encode(Helper::api()->midtrans_server_key.':')
        ])->post('https://app.sandbox.midtrans.com/snap/v1/transactions',

        [
            "transaction_details" => [
                "order_id" => "deposit-".$user->name.\Illuminate\Support\Str::random(8),
                "gross_amount" => $request['amount']
            ],
            "item_details" => [
                [
                    "id" => "DEPOSIT",
                    "price" => $request['amount'],
                    "quantity" => 1,
                    "name" => "deposit",
                    "brand" => "Mudah Saja",
                    "category" => "payment",
                    "merchant_name" => "Mudah Saja",
                    "url" => "http://company.test"
                ]
            ],
            "customer_details" => [
                    "first_name" => auth()->user()->name,
                    "last_name" => "",
                    "email" => auth()->user()->email,
                    "phone" => auth()->user()->phone,

                ],
        ],


    );

//        dd($response->object());
        if ($response->successful()) {
            return Inertia::render('Deposit/Show', [
                'users' => auth()->user(),
                'response'  => $response->object(),
                'amount'    => $request['amount']
            ]);

        } else {
            dd($response->status());
        }
    }

    public function show(Request $request) {
//        dd($request->toArray());
        $user = User::where('id', $request['id'])->first();
        $user->deposit($request['amount']);

        activity()
            ->withProperties([
                'amount' => $request['amount'],
                'user_id'  => $user->id,
                'status_id'    => User::SUKSES,
                'created'   => Carbon::now(),
            ])
            ->event('deposit')
            ->log('Deposit');

        session()->flash('flash.banner', 'Deposit berhasil!');
        session()->flash('flash.bannerStyle', 'success');

        return Redirect::route('dashboard');

    }

    public function withdraw(User $user) {

        $amount = 34000;

        try {
            $user->withdraw($amount);

            activity()
                ->withProperties([
                    'amount' => $amount
                ])
                ->event('withdraw')
                ->log('withdraw');

        } catch (InsufficientFundException $e) {
            report($e);
            session()->flash('flash.banner', 'Saldo tidak mencukupi!');
            session()->flash('flash.bannerStyle', 'danger');
            return false;
        }
    }
}
