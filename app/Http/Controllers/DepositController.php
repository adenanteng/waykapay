<?php

namespace App\Http\Controllers;

use App\Helpers\Helper;
use App\Models\Transaction;
use App\Models\TransactionBankTransfer;
use App\Models\TransactionQris;
use App\Models\User;
use DOKU\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;
use Ramsey\Uuid\Type\Integer;
use Stephenjude\Wallet\Exceptions\InsufficientFundException;
use function Termwind\render;
use Carbon\Carbon;

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
//        dd($request->toArray());
        Validator::make($request->toArray(), [
            'amount' => ['required'],
        ])->validateWithBag('storeInformation');

        return Inertia::render('Deposit/Bank', [
            'users' => auth()->user(),
            'amount' => $request['amount'],
        ]);
    }

    public function create(Request $request)
    {
        // Instantiate class
        $DOKUClient = new Client();
        // Set your Client ID
        $DOKUClient->setClientID('BRN-0207-1696486292133');
        // Set your Shared Key
        $DOKUClient->setSharedKey('SK-tJPSFOkRG0WHG8PIuzso');
        // Call this function for production use
        $DOKUClient->isProduction(false);
        // Setup VA payment request data
        $params = array(
            'customerEmail' => 'aden.anteng@gmail.com',
            'customerName' => 'Aden',
            'amount' => 15000,
            'invoiceNumber' => Str::random(8),
            'expiryTime' => Carbon::tomorrow('UTC')->toIso8601ZuluString(),
            'info1' => 'Lorem',
            'info2' => 'Ipsum',
            'info3' => 'Dolor',
            'reusableStatus' => false
        );
        $DOKUClient->generateMandiriVa($params);
        dd($DOKUClient);


//        $clientId = "BRN-0207-1696486292133";
//        $requestId = Str::random(8);
//        $requestDate = Carbon::now('UTC')->toIso8601ZuluString();;
//        $targetPath = "bca-virtual-account/v2/payment-code"; // For merchant request to Jokul, use Jokul path here. For HTTP Notification, use merchant path here
//        $secretKey = "SK-tJPSFOkRG0WHG8PIuzso";
//        $requestBody = array(
//            'order' => array(
//                'amount' => 15000,
//                'invoice_number' => 'INV-20210124-0001',
//            ),
//            'virtual_account_info' => array(
//                "billing_type" => "FIX_BILL",
//                'expired_time' => 60,
//                'reusable_status' => false,
//                'info1' => 'Merchant Demo Store',
//            ),
//            'customer' => array(
//                'name' => 'Taufik Ismail',
//                'email' => 'taufik@example.com',
//            ),
//        );
//
//        // Generate Digest
//        $digestValue = base64_encode(hash('sha256', json_encode($requestBody), true));
//
//        // Prepare Signature Component
//        $componentSignature = "Client-Id:" . $clientId . "\n" .
//            "Request-Id:" . $requestId . "\n" .
//            "Request-Timestamp:" . $requestDate . "\n" .
//            "Request-Target:" . $targetPath . "\n" .
//            "Digest:" . $digestValue;
//
//        // Calculate HMAC-SHA256 base64 from all the components above
//        $signature = base64_encode(hash_hmac('sha256', $componentSignature, $secretKey, true));
//
////        dd($requestDate, $secretKey, $digestValue, $componentSignature, $signature);
////        dd("HMACSHA256=".$signature);
//
//        $response = Http::withHeaders([
//            'Client-Id' => $clientId,
//            'Request-Id' => $requestId,
//            'Request-Timestamp' => $requestDate,
//            'Signature' => 'HMACSHA256='.$signature
//        ])->post('https://api-sandbox.doku.com/'.$targetPath, $requestBody);
//
////        dd($response->object());
//
//        if ($response->successful()) {
//            dd('asli');
//        } else {
//            dd($response->object());
//        }

    }

    public function createFlip(Request $request)
    {
//        dd($request->all());
        $user = User::where('id', $request['user_id'])->first();

//        $order_id = "dp-" . $request['user_id'] . "-" . \Illuminate\Support\Str::random(8);

        $sender_bank_type = match ($request['method']['id']) {
            1, 2, 3, 4, 5, 6 => 'virtual_account',
            7, 8, 9, 10, 11, 12 => 'wallet_account',
        };

        if ($sender_bank_type == 'virtual_account') {
            $admin_fee = 4000;
            $gross_amount = $request['amount'] + $admin_fee;
        } elseif ($sender_bank_type == 'wallet_account') {
            $admin_fee = (2 / 100) * $request['amount'];
            $gross_amount = $request['amount'] + $admin_fee;
        } else {
            $admin_fee = 0;
            $gross_amount = 0;
        }

//        dd($admin_fee);
//        dd($order_id, $payment_type, $admin_fee);

        $response = Http::withHeaders([
            'Accept' => 'application/json',
            'Content-Type' => 'application/json',
            'Authorization' => 'Basic ' . base64_encode(Helper::api()->flip_secret . ':')
        ])->post('https://bigflip.id/api/v2/pwf/bill',
            [
                "title" => "Deposit-" . $user['id'],
                "type" => "SINGLE",
                "amount" => $gross_amount,
                "is_phone_number_required" => 1,
                "step" => "3",
                "sender_name" => $user['name'],
                "sender_email" => $user['email'],
                "sender_phone_number" => $user['phone'],
                "sender_bank_type" => $sender_bank_type,
                "sender_bank" => $request['method']['name'],
            ],
        );

//        dd($response->object());

        if ($response->successful()) {
            $transaction = Transaction::create([
                'sku' => '-',
                'order_id' => $response->object()->link_id,
                'product_name' => 'Deposit',
                'customer_no' => '-',
                'user_id' => $request['user_id'],
                'status_id' => Transaction::PENDING,
                'category_id' => Transaction::DEPOSIT,
                'amount' => $request['amount'],
                'gross_amount' => $gross_amount,
                'last_amount' => $user->wallet_balance,
                'admin_fee' => $admin_fee,
            ]);

            if ($sender_bank_type == 'virtual_account') {
                $virtual_account = TransactionBankTransfer::create([
                    'transaction_id' => $transaction->id,
                    'bank_id' => $request['method']['id'],
                    'va_number' => $response->object()->bill_payment->receiver_bank_account->account_number,
                    'payment_url' => $response->object()->payment_url,
                    'exp_time' => Carbon::tomorrow(),
                ]);
            } elseif ($sender_bank_type == 'wallet_account') {
                $wallet_account = TransactionQris::create([
                    'transaction_id' => $transaction->id,
                    'bank_id' => $request['method']['id'],
                    'qr_code' => $request['method']['name'] === 'qris' ? $response->object()->bill_payment->receiver_bank_account->qr_code_data : '-',
                    'payment_url' => $response->object()->payment_url,
                    'exp_time' => Carbon::tomorrow(),
                ]);
            }

            return Inertia::render('Deposit/Confirm', [
                'transaction' => $transaction,
                'virtual_account' => $virtual_account ?? '',
                'wallet_account' => $wallet_account ?? '',
            ]);

        } else {
            dd($response->object());
        }


    }

    public function createMidtrans(Request $request)
    {
//        dd($request->all());
        $user = User::where('id', $request['user_id'])->first();

        $order_id = "dp-" . $request['user_id'] . "-" . \Illuminate\Support\Str::random(8);

        $payment_type = match ($request['method']['id']) {
            1, 2, 3 => 'bank_transfer',
            6 => 'gopay',
        };

        if ($payment_type == 'bank_transfer') {
            $admin_fee = 4000;
            $gross_amount = $request['amount'] + $admin_fee;
        } elseif ($payment_type == 'gopay') {
            $admin_fee = (2 / 100) * $request['amount'];
            $gross_amount = $request['amount'] + $admin_fee;
        } else {
            $admin_fee = 0;
            $gross_amount = 0;
        }

//        dd($admin_fee);
//        dd($order_id, $payment_type, $admin_fee);

        $response = Http::withHeaders([
            'Accept' => 'application/json',
            'Content-Type' => 'application/json',
            'Authorization' => 'Basic ' . base64_encode(Helper::api()->midtrans_server_key . ':')
        ])->post('https://api.sandbox.midtrans.com/v2/charge',
            [
                "transaction_details" => [
                    "order_id" => $order_id,
                    "gross_amount" => $gross_amount,
                ],
                "item_details" => [
                    [
                        "id" => "DEPOSIT",
                        "price" => $gross_amount,
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
                $payment_type => [
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
                'gross_amount' => $gross_amount,
                'last_amount' => $user->wallet_balance,
                'admin_fee' => $admin_fee,
            ]);

            if ($payment_type == 'bank_transfer') {
                $bank = TransactionBankTransfer::create([
                    'transaction_id' => $transaction->id,
                    'bank_id' => $request['method']['id'],
                    'va_number' => $response->object()->va_numbers[0]->va_number,
                    'exp_time' => $response->object()->expiry_time,
                ]);
            } elseif ($payment_type == 'gopay') {
                $gopay = TransactionGopay::create([
                    'transaction_id' => $transaction->id,
                    'qr_code' => $response->object()->actions[0]->url,
                    'deeplink_redirect' => $response->object()->actions[1]->url,
                    'status' => $response->object()->actions[2]->url,
                    'cancel' => $response->object()->actions[3]->url,
                    'exp_time' => $response->object()->expiry_time,
                ]);
            }

            return Inertia::render('Deposit/Confirm', [
                'transaction' => $transaction,
                'bank' => $bank ?? '',
                'gopay' => $gopay ?? '',
            ]);

        } else {
            dd($response->object());
        }


    }

    public function confirm(Request $request)
    {
//        dd($request->toArray());
        $request = $request['transaction'];

        $transaction = Transaction::where('id', $request['id'])->first();
        $user = User::where('id', $request['user_id'])->first();

        $response = Http::withHeaders([
            'Accept' => 'application/json',
            'Content-Type' => 'application/json',
            'Authorization' => 'Basic ' . base64_encode(Helper::api()->flip_secret . ':')
        ])->get('https://bigflip.id/api/v2/pwf/' . $transaction->order_id . '/payment');

        switch ($response->object()->data[0]->status) {
            case('SUCCESSFUL'):
                $status_id = Transaction::SUCCESS;
                $user->deposit($transaction->amount);
                break;

            case ('PENDING'):
                $status_id = Transaction::PENDING;
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

        switch ($transaction->status_id) {
            case (Transaction::SUCCESS):
                return Inertia::render('Payment/Success', [
                    'transaction' => $transaction
                ]);
                break;

            case (Transaction::PENDING):
                return Inertia::render('Payment/Pending', [
                    'transaction' => $transaction
                ]);
                break;

            case (Transaction::CLOSE):
            case (Transaction::ERROR):
                return Inertia::render('Payment/Error', [
                    'transaction' => $transaction
                ]);
                break;

            default:

                session()->flash('flash.banner', 'Gatau lagi kami!');
                session()->flash('flash.bannerStyle', 'danger');
        }

        return Inertia::render('Payment/Error', [
            'transaction' => $transaction
        ]);

    }
}
