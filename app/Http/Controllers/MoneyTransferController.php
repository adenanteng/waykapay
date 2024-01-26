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
use PHPUnit\TextUI\Help;

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

        if ($request['bank']['name'] == 'wkp') {
            $to = User::where('phone', $request['account_no'])->first();

            if ($to && $to->id != auth()->user()->id) {
                $users = $to;
            } else {
                session()->flash('flash.banner', 'Nomor rekening tidak valid!');
                session()->flash('flash.bannerStyle', 'danger');
                return \redirect()->back();
            }
        } else {
            $token = Helper::ayoToken();
            $beneficiary = Helper::ayoBeneficiary($request->all(), $token, $request->ip());
//            dd($beneficiary);
        }

//        dd($users);
        return Inertia::render('MoneyTransfer/CreateEdit', [
            'users' => $users ?? null,
            'beneficiary' => $beneficiary ?? null,
            'token' => $token ?? null,
            'bank' => $request['bank'],
            'account_no' => $request['account_no']
        ]);
    }

    public function confirm(Request $request)
    {
//        Log::info($request->getContent());

        $to = User::where('phone', $request['account_no'])->first();
        $user = auth()->user();

        $gross_amount = $request['amount'] + $request['bank']['admin'];

        if ($user->wallet_balance <= $gross_amount) {
            dd('Saldo kurang');
        }

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
            'gross_amount' => $gross_amount,
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
            ->where('customer_no', $transaction->customer_no)
            ->where('brand', $transaction->brand)
            ->first();

        return Inertia::render('History/Show', [
            'history' => $transaction,
            'goBack' => false,
            'goSuccess' => true,
            'saveCustomer' => $save,
        ]);
    }

    public function confirmAyo(Request $request) {
//        dd($request->toArray());
        $order_id = Str::random(32);
        $geo = Helper::ipGeo($request->ip());
//        dd($request['beneficiary']['beneficiaryDetails']['beneficiaryId']);
//        dd($request['amount'] . '.00');
        $response = Http::withHeaders([
            'Accept' => 'application/json',
            'Content-Type' => 'application/json',
            'Authorization' => 'Bearer ' . $request['token'],
            'A-Correlation-ID' => $order_id,
            'A-Merchant-Code' => 'WAYKPY',
            'A-IP-Address' => $request->ip(),
            'A-Latitude' => $geo->latitude ?? '-5.4292',
            'A-Longitude' => $geo->longitude ?? '105.2611',
        ])
        ->post('https://sandbox.api.of.ayoconnect.id/api/v1/bank-disbursements/disbursement', [
            "transactionId" => $request['beneficiary']['transactionId'],
            "customerId" => $request['beneficiary']['customerId'],
            "beneficiaryId" => $request['beneficiary']['beneficiaryDetails']['beneficiaryId'],
            "amount" => $request['amount'] . '.00',
            "currency" => "IDR",
            "remark" => "Testing"
        ]);

//        Log::info(json_decode( json_encode($response->object()), true));

        if (!$response->successful()) {
            dd($response->object()->errors[0]->details);
        }

//        dd($response->object(), $request->toArray());

        $user = auth()->user();

        $gross_amount = $request['amount'] + $request['bank']['admin'];

//        if ($user->wallet_balance <= $gross_amount) {
//            dd('Saldo kurang');
//        }

        $transaction = Transaction::create([
            'sku' => '-',
            'order_id' => $order_id,
            'brand' => $request['beneficiary']['beneficiaryDetails']['beneficiaryBankName'],
            'product_name' => 'Kirim uang',
            'customer_no' => $request['account_no'],
            'user_id' => $user->id,
            'status_id' => Transaction::PENDING,
            'category_id' => Transaction::TRANSFER,
            'amount' => $request['amount'],
            'gross_amount' => $gross_amount,
            'last_amount' => $user->wallet_balance,
            'admin_fee' => $request['bank']['admin'],
            'desc' => $request['desc'],
        ]);

        $money_transfer = TransactionMoneyTransfer::create([
            'transaction_id' => $transaction->id,
            'bank_id' => $request['bank']['id'],
            'to_name' => $request['beneficiary']['beneficiaryDetails']['beneficiaryName'],
            'to_number' => $request['account_no'],
            'to_id' => null,
        ]);

        $user->update([
            'wallet_balance' => $user->wallet_balance - $transaction->gross_amount,
        ]);

//        $transaction->update([
//            'status_id' => Transaction::SUCCESS
//        ]);

        $transaction = Transaction::where('order_id', $transaction->order_id)->first();

//        dd($transaction->toArray());

//        return $response->object()->data->deposit;

//        $save = !TransactionCustomer::where('user_id', auth()->user()->id)
//            ->where('customer_no', $transaction->customer_no)
//            ->where('brand', $transaction->brand)
//            ->first();

        return Inertia::render('Payment/AyoPending', [
            'transaction' => $transaction,
            'response' => $response->object()
        ]);
    }

    public function ayoStatus(Request $request)
    {
//        dd($request->all());
//        $request = $request['transaction'];
//        dd($request);
        $order_id = Str::random(32);
        $geo = Helper::ipGeo($request->ip());
        $token = Helper::ayoToken();
//        dd($token);

        $response = Http::withHeaders([
            'Accept' => 'application/json',
            'Content-Type' => 'application/json',
            'Authorization' => 'Bearer ' . $token,
            'A-Merchant-Code' => 'WAYKPY',
            'A-IP-Address' => $request->ip(),
            'A-Latitude' => $geo->latitude ?? '-5.4292',
            'A-Longitude' => $geo->longitude ?? '105.2611',
            'A-Correlation-ID' => $order_id,
        ])
            ->withQueryParameters([
                'transactionId' => $request['response']['transactionId'],
                'beneficiaryId' => $request['response']['transaction']['beneficiaryId'],
                'customerId' => $request['response']['customerId'],

            ])
            ->get('https://sandbox.api.of.ayoconnect.id/api/v1/bank-disbursements/status/'.$request['transaction']['order_id']);

        if (!$response->successful()) {
            dd($response->object()->errors[0]->details);
        }

        $transaction = Transaction::where('order_id', $request['transaction']['order_id'])->first();

        if ($transaction->status_id == Transaction::PENDING) {
            $save = !TransactionCustomer::where('user_id', auth()->user()->id)
                ->where('customer_no', $transaction->customer_no)
                ->where('brand', $transaction->brand)
                ->first();

            switch($response->object()->transaction->status) {
                case(TransactionMoneyTransfer::PROCESSING):
                    $transaction->update([
                        'status_id' => Transaction::PENDING,
                        'desc' => $response->object()->message
                    ]);
                    return Inertia::render('Payment/Pending', [
                        'transaction'   => $transaction,
                        'response' => $request['response']
                    ]);
                    break;

                case(TransactionMoneyTransfer::SUCCESS):
                    $transaction->update([
                        'status_id' => Transaction::SUCCESS,
                    ]);

                    return Inertia::render('History/Show', [
                        'history' => $transaction,
                        'goBack' => false,
                        'goSuccess' => true,
                        'saveCustomer' => $save,
                    ]);
                    break;

                case(TransactionMoneyTransfer::REFUNDED):
                    $transaction->update([
                        'status_id' => Transaction::REFUNDED,
                        'desc' => $response->object()->message
                    ]);

                    return Inertia::render('Payment/Error', [
                        'transaction'   => $transaction
                    ]);
                    break;

                case(TransactionMoneyTransfer::CANCELED):
                    $transaction->update([
                        'status_id' => Transaction::CANCEL,
                        'desc' => $response->object()->message
                    ]);

                    return Inertia::render('Payment/Error', [
                        'transaction'   => $transaction
                    ]);
                    break;

                default:
                    $transaction->update([
                        'status_id' => Transaction::ERROR,
                        'desc' => $response->object()->message
                    ]);

                    return Inertia::render('Payment/Error', [
                        'transaction'   => $transaction
                    ]);
            }
        }


//        dd($response->object());
    }

    public function ayoBalance()
    {
        $order_id = Str::random(32);
        $token = Helper::ayoToken();
//        dd($token);

        $response = Http::withHeaders([
                'Accept' => 'application/json',
                'Content-Type' => 'application/json',
                'Authorization' => $token,
                'A-Correlation-ID' => $order_id,
                'A-Merchant-Code' => 'WAYKPY',
            ])
            ->withQueryParameters([
                'transactionId' => $order_id,
            ])
            ->get('https://sandbox.api.of.ayoconnect.id/api/v1/merchants/balance');

        dd($response->object());
    }

    public function ayoBeneficiary()
    {
        $order_id = Str::random(32);
        $token = Helper::ayoToken();

        $response = Http::withHeaders([
            'Accept' => 'application/json',
            'Content-Type' => 'application/json',
            'Authorization' => 'Bearer ' . $token,
            'A-Correlation-ID' => $order_id,
            'A-Merchant-Code' => 'WAYKPY',
            'A-Latitude' => '-4.721020',
            'A-Longitude' => '104.542023'
        ])
//            ->withQueryParameters([
//                'transactionId' => $order_id,
//            ])
        ->post('https://sandbox.api.of.ayoconnect.id/api/v1/bank-disbursements/beneficiary', [
            "transactionId" => $order_id,
            "phoneNumber" => "6298896111134",
            "customerDetails" => [
                "ipAddress" => "192.168.100.12"
            ],
            "beneficiaryAccountDetails" => [
                "accountNumber" => "510654320",
                "bankCode" => "BRINIDJA"
            ],
        ]);

        dd($response->object());

    }

    public function ayoDisbursement() {

    }
}
