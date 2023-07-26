<?php

namespace App\Http\Controllers;

use App\Helpers\Helper;
use App\Models\Transaction;
use App\Models\TransactionBankTransfer;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use Psy\Util\Str;
use Stephenjude\Wallet\Exceptions\InsufficientFundException;
use function Termwind\render;

class DepositController extends Controller
{
    public function index()
    {

        return Inertia::render('Deposit/CreateEdit', [
            'users' => auth()->user(),
            'response' => null,
        ]);
    }

    public function method(Request $request)
    {
        return Inertia::render('Deposit/Bank', [
            'users' => auth()->user(),
            'amount' => $request['amount'],
        ]);
    }

    public function create(Request $request)
    {
//        dd($request->all());

        $order_id = "dp-" . $request['user_id'] . "-" . \Illuminate\Support\Str::random(8);

        $payment_type = match ($request['method']['id']) {
            1, 2, 3 => 'bank_transfer',
        };

//        dd($data, $order_id, $payment_type);

        $response = Http::withHeaders([
            'Accept' => 'application/json',
            'Content-Type' => 'application/json',
            'Authorization' => 'Basic ' . base64_encode(Helper::api()->midtrans_server_key . ':')
        ])->post('https://api.sandbox.midtrans.com/v2/charge',
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
                        "name" => "Deposit",
                        "brand" => "Waykapay",
                        "category" => "deposit",
                        "merchant_name" => "Waykapay",
                        "url" => "https://waykapay.com"
                    ]
                ],
                "customer_details" => [
                    "first_name" => $request['name'],
                    "last_name" => "",
                    "email" => $request['email'],
                    "phone" => $request['phone'],
                ],
                "payment_type" => $payment_type,
                "bank_transfer" => [
                    "bank" => $request['method']['name'],
                ],
            ],
        );

//        dd($response->object());

        if ($response->successful()) {
            $transaction = Transaction::create([
                'sku' => '-',
                'order_id' => $order_id,
                'product_name' => 'Deposit',
                'customer_no' => '-',
                'user_id' => $request['user_id'],
                'status_id' => Transaction::PENDING,
                'category_id' => Transaction::DEPOSIT,
                'amount' => $request['amount'],
            ]);

            if ($payment_type == 'bank_transfer') {
                $bank = TransactionBankTransfer::create([
                    'transaction_id' => $transaction->id,
                    'bank_id' => $request['method']['id'],
                    'va_number' => $response->object()->va_numbers[0]->va_number,
                    'exp_time' => $response->object()->expiry_time,
                ]);
            }

            return Inertia::render('Deposit/Confirm', [
                'amount' => $response->object()->gross_amount,
                'bank' => $response->object()->va_numbers[0]->bank,
                'va_number' => $response->object()->va_numbers[0]->va_number,
                'exp_time' => $response->object()->expiry_time
            ]);

        } else {
            dd($response->status());
        }


    }

    public function confirm(Request $request)
    {
//        dd($request->toArray());

        $transaction = Transaction::where('id', $request['id'])->first();
        $user = User::where('id', $request['user_id'])->first();
//        dd($transaction);

        switch ($request['status']) {
            case ('success'):
                $user->deposit($request['amount']);
                $status_id = Transaction::SUCCESS;

                session()->flash('flash.banner', 'Deposit sejumlah Rp ' . $request['amount'] . ' berhasil!');
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

        $transaction->update([
            'status_id' => $status_id,
        ]);

//        $transaction = Transaction::create([
//            'token' => $request['token'],
//            'sku' => '-',
//            'order_id' => $request['order_id'],
//            'product_name' => 'Deposit',
//            'customer_no' => '-',
//            'user_id' => $request['user_id'],
//            'status_id' => $status_id,
//            'category_id' => Transaction::DEPOSIT,
//            'amount' => $request['amount'],
//        ]);

        return to_route('dashboard');

    }
}
