<?php

namespace App\Http\Controllers;

use App\Helpers\Helper;
use App\Models\Transaction;
use App\Models\TransactionBankTransfer;
use App\Models\TransactionManualTransfer;
use App\Models\TransactionOffline;
use App\Models\TransactionQris;
use App\Models\User;
use DOKU\Client;
use Exception;
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
//        dd($request->toArray());

        $user = User::where('id', $request['user_id'])->first();
        $merchantCode = "OK1168432";
        $merchantOrderId = Str::random(8);
        $paymentAmount = $request['amount'];
        $mKey = "836753316901900731168432OKCTFB6944D5EE66C810AF962674B3A8C7AF";

        $sender_bank_type = match ($request['method']['id']) {
            1 => $bank = "BCA",
            2 => $bank = "BNI",
            3 => $bank = "BRI",
            4 => $bank = "MANDIRI",
            5 => $bank = "PERMATA",
            6 => $bank = "BSI",
            13 => $bank = "ALFAMART",
            14 => $bank = "INDOMARET",
            15 => $bank = "Transfer BCA",
            16 => $bank = "Transfer BRI",
        };

        $sender_bank_fee = match ($request['method']['id']) {
            1, 2, 3, 4, 5, 6 => $admin_fee = 3000,
            13, 14 => $admin_fee = 4000,
            15, 16 => $admin_fee = 0,
        };

        $grossAmount = $request['amount'] + $admin_fee;

        if ($request['method']['id'] <=14) {
            $curl = curl_init();
//        dd($sender_bank_type);
            if ($request['method']['id'] <=6) {
                curl_setopt_array($curl, array(
                    CURLOPT_URL => 'https://gateway.okeconnect.com/api/va/inquiry',
                    CURLOPT_RETURNTRANSFER => true,
                    CURLOPT_ENCODING => '',
                    CURLOPT_MAXREDIRS => 10,
                    CURLOPT_TIMEOUT => 0,
                    CURLOPT_FOLLOWLOCATION => true,
                    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                    CURLOPT_CUSTOMREQUEST => 'POST',
                    CURLOPT_POSTFIELDS => array(
                        'merchantCode' => $merchantCode,
                        'paymentAmount' => $grossAmount,
                        'merchantOrderId' => $merchantOrderId,
                        'productDetails' => 'Pembayaran Deposit Waykapay - ' . $user->name,
                        'email' => $user->email,
                        'phoneNumber' => $user->phone,
                        'bank' => $bank,
                        'returnUrl' => 'https://waykapay.com',
                        'callbackUrl' => 'https://waykapay.com/webhook-oke-connect?order='.$merchantOrderId,
                        'signature' => md5($merchantCode . $merchantOrderId . $grossAmount . $mKey)
                    ),
                ));
            } else {
                curl_setopt_array($curl, array(
                    CURLOPT_URL => 'https://gateway.okeconnect.com/api/retail/inquiry',
                    CURLOPT_RETURNTRANSFER => true,
                    CURLOPT_ENCODING => '',
                    CURLOPT_MAXREDIRS => 10,
                    CURLOPT_TIMEOUT => 0,
                    CURLOPT_FOLLOWLOCATION => true,
                    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                    CURLOPT_CUSTOMREQUEST => 'POST',
                    CURLOPT_POSTFIELDS => array(
                        'merchantCode' => $merchantCode,
                        'paymentAmount' => $grossAmount,
                        'paymentFee' => '0',
                        'merchantOrderId' => $merchantOrderId,
                        'productDetails' => 'Pembayaran Deposit Waykapay - ' . $user->name,
                        'email' => $user->email,
                        'phoneNumber' => $user->phone,
                        'channel' => $bank,
                        'returnUrl' => 'https://waykapay.com',
                        'callbackUrl' => 'https://waykapay.com/webhook-oke-connect?order='.$merchantOrderId,
                        'signature' => md5($merchantCode . $merchantOrderId . $grossAmount . $mKey)
                    ),
                ));
            }

            // Set response json
            $responseJson = curl_exec($curl);
            $response = json_decode($responseJson, true);
            $httpCode = curl_getinfo($curl, CURLINFO_HTTP_CODE);

            curl_close($curl);

            if (isset($response['status']) || isset($response['success']) && $httpCode == 200) {

                if ($request['method']['id'] <= 6) {
                    if ($response['code'][$sender_bank_type] == null) {
                        return Inertia::render('Payment/Info', [
//                            'transaction' => $response->object()->data,
                        ]);
                    }
                } elseif ($request['method']['id'] == 13) {
                    if ($response['response']['alfamart']['code'] == 'Tidak Tersedia') {
                        return Inertia::render('Payment/Info', [
//                            'transaction' => $response->object()->data,
                        ]);
                    }
                }

//                dd($response);

                try {
                    $transaction = Transaction::create([
                        'sku' => '-',
                        'order_id' => $merchantOrderId,
                        'product_name' => 'Deposit',
                        'customer_no' => '-',
                        'user_id' => $request['user_id'],
                        'status_id' => Transaction::PENDING,
                        'category_id' => Transaction::DEPOSIT,
                        'amount' => $request['amount'],
                        'gross_amount' => $grossAmount,
                        'last_amount' => $user->wallet_balance,
                        'admin_fee' => $admin_fee,
                        'desc' => ''
                    ]);

                    if ($request['method']['id'] <= 6) {
                        $virtual_account = TransactionBankTransfer::create([
                            'transaction_id' => $transaction->id,
                            'bank_id' => $request['method']['id'],
                            'va_number' => $response['code'][$sender_bank_type],
                            'payment_url' => '-',
                            'exp_time' => Carbon::tomorrow(),
                        ]);
                    } elseif ($request['method']['id'] == 13) {
                        $offline_account = TransactionOffline::create([
                            'transaction_id' => $transaction->id,
                            'bank_id' => $request['method']['id'],
                            'payment_code' => $response['response']['alfamart']['code'],
                            'payment_url' => '-',
                            'exp_time' => Carbon::tomorrow(),
                        ]);
                    }
                } catch (Exception $e) {
                    dd($e->getMessage());
                }

            } else {
                dd('error');
            }
        } else {
            $idk = match ($request['method']['id']) {
                15 => $bank_code = '',
                16 => $bank_code = '009801143657509',
            };

            try {
                $transaction = Transaction::create([
                    'sku' => '-',
                    'order_id' => $merchantOrderId,
                    'product_name' => 'Deposit',
                    'customer_no' => '-',
                    'user_id' => $request['user_id'],
                    'status_id' => Transaction::PENDING,
                    'category_id' => Transaction::DEPOSIT,
                    'amount' => $request['amount'],
                    'gross_amount' => $grossAmount + rand(2,500),
                    'last_amount' => $user->wallet_balance,
                    'admin_fee' => $admin_fee,
                    'desc' => ''
                ]);

                $manual_account = TransactionManualTransfer::create([
                    'transaction_id' => $transaction->id,
                    'bank_id' => $request['method']['id'],
                    'payment_code' => $bank_code,
                    'payment_url' => '-',
                    'exp_time' => Carbon::tomorrow(),
                ]);

            } catch (Exception $e) {
                dd($e->getMessage());
            }
        }

        return Inertia::render('Deposit/Confirm', [
            'transaction' => $transaction,
            'virtual_account' => $virtual_account ?? '',
            'wallet_account' => $wallet_account ?? '',
            'offline_account' => $offline_account ?? '',
            'manual_account' => $manual_account ?? '',
        ]);
    }

    public function confirm(Request $request)
    {
//        dd($request->toArray());
        $request = $request['transaction'];

        $transaction = Transaction::where('id', $request['id'])->first();
        $user = User::where('id', $request['user_id'])->first();

//        $response = Http::withHeaders([
//            'Accept' => 'application/json',
//            'Content-Type' => 'application/json',
//            'Authorization' => 'Basic ' . base64_encode(Helper::api()->flip_secret . ':')
//        ])->get('https://bigflip.id/api/v2/pwf/' . $transaction->order_id . '/payment');

//        switch ($response->object()->data[0]->status) {
//            case('SUCCESSFUL'):
//                $status_id = Transaction::SUCCESS;
//                $user->deposit($transaction->amount);
//                break;
//
//            case ('PENDING'):
//                $status_id = Transaction::PENDING;
//                break;
//
//            case ('FAILED'):
//                $status_id = Transaction::ERROR;
//                break;
//
//            default:
//                $status_id = Transaction::UNDEFINED;
//        }
//        $transaction->update([
//            'status_id' => $status_id,
//        ]);

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

    //    public function create(Request $request)
//    {
////        dd($request->all());
//        $user = User::where('id', $request['user_id'])->first();
//
//        $sender_bank_type = match ($request['method']['id']) {
//            1 => $targetPath = "/bca-virtual-account/v2/payment-code",
//            2 => $targetPath = "/bni-virtual-account/v2/payment-code",
//            3 => $targetPath = "/bri-virtual-account/v2/payment-code",
//            4 => $targetPath = "/mandiri-virtual-account/v2/payment-code",
//            5 => $targetPath = "/permata-virtual-account/v2/payment-code",
//            6 => $targetPath = "/bsm-virtual-account/v2/payment-code",
//            13 => $targetPath = "/alfa-online-to-offline/v2/payment-code",
//        };
//
//        $sender_bank_type = match ($request['method']['id']) {
//            1, 2, 3, 4, 5, 6 => $admin_fee = 4000,
//            13 => $admin_fee = 5000,
//        };
//
//        $clientId = 'BRN-0288-1690798735800';
//        $secretKey = 'SK-CIiJ0QDZmqNAhpfxFVbt';
//        $requestId = strtolower(Str::random(8));
//        $requestDate = Carbon::now('UTC')->toIso8601ZuluString();
//        $getUrl = 'https://api.doku.com';
//        $url = $getUrl . $targetPath;
//
//        if ($request['method']['id'] <= 6){
//            $requestBody = array(
//                'order' => array(
//                    'amount' => $request['amount'] + $admin_fee,
//                    'invoice_number' => $requestId,
//                ),
//                'virtual_account_info' => array(
//                    "billing_type" => "FIX_BILL",
//                    'expired_time' => 60,
//                    'reusable_status' => false,
//                    'info1' => 'Waykapay',
//                ),
//                'customer' => array(
//                    'name' => $user->name,
//                    'email' => $user->email,
//                ),
//            );
//        } elseif ($request['method']['id'] == 13) {
//            $requestBody = array(
//                'order' => array(
//                    'amount' => $request['amount'] + $admin_fee,
//                    'invoice_number' => $requestId,
//                ),
//                'online_to_offline_info' => array(
//                    'expired_time' => 60,
//                    'reusable_status' => false,
//                    'info' => 'Waykapay',
//                ),
//                'customer' => array(
//                    'name' => $user->name,
//                    'email' => $user->email,
//                ),
//            );
//        }
//
//        // Generate digest
//        $digestValue = base64_encode(hash('sha256', json_encode($requestBody), true));
//
//        // Prepare signature component
//        $componentSignature = "Client-Id:".$clientId ."\n".
//            "Request-Id:".$requestId . "\n".
//            "Request-Timestamp:".$requestDate ."\n".
//            "Request-Target:".$targetPath ."\n".
//            "Digest:".$digestValue;
//
//        // Generate signature
//        $signature = base64_encode(hash_hmac('sha256', $componentSignature, $secretKey, true));
//
//        // Execute request
//        $ch = curl_init($url);
//        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($requestBody));
//        curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type:application/json'));
//        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
//
//        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
//            'Content-Type: application/json',
//            'Client-Id:' . $clientId,
//            'Request-Id:' . $requestId,
//            'Request-Timestamp:' . $requestDate,
//            'Signature:' . "HMACSHA256=" . $signature,
//        ));
//
//        // Set response json
//        $responseJson = curl_exec($ch);
//        $response = json_decode($responseJson);
//        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
//
//        curl_close($ch);
//
//        // Echo the response
//        if (is_string($responseJson) && $httpCode == 200) {
////            dd($response);
//            $transaction = Transaction::create([
//                'sku' => '-',
//                'order_id' => $response->order->invoice_number,
//                'product_name' => 'Deposit',
//                'customer_no' => '-',
//                'user_id' => $request['user_id'],
//                'status_id' => Transaction::PENDING,
//                'category_id' => Transaction::DEPOSIT,
//                'amount' => $request['amount'],
//                'gross_amount' => $request['amount'] + $admin_fee,
//                'last_amount' => $user->wallet_balance,
//                'admin_fee' => $admin_fee,
//            ]);
//
//            if ($request['method']['id'] <= 6) {
//                $virtual_account = TransactionBankTransfer::create([
//                    'transaction_id' => $transaction->id,
//                    'bank_id' => $request['method']['id'],
//                    'va_number' => $response->virtual_account_info->virtual_account_number,
//                    'payment_url' => $response->virtual_account_info->how_to_pay_page,
//                    'exp_time' => Carbon::tomorrow(),
//                ]);
//            } elseif ($request['method']['id'] == 13) {
//                $offline_account = TransactionOffline::create([
//                    'transaction_id' => $transaction->id,
//                    'bank_id' => $request['method']['id'],
//                    'payment_code' => $response->online_to_offline_info->payment_code,
//                    'payment_url' => $response->online_to_offline_info->how_to_pay_page,
//                    'exp_time' => Carbon::tomorrow(),
//                ]);
//            } else {
//                dd('error');
//            }
//
//            return Inertia::render('Deposit/Confirm', [
//                'transaction' => $transaction,
//                'virtual_account' => $virtual_account ?? '',
//                'wallet_account' => $wallet_account ?? '',
//                'offline_account' => $offline_account ?? '',
//            ]);
//
//        } else {
//            dd($response);
//        }
//
//    }

//    public function createFlip(Request $request)
//    {
////        dd($request->all());
//        $user = User::where('id', $request['user_id'])->first();
//
////        $order_id = "dp-" . $request['user_id'] . "-" . \Illuminate\Support\Str::random(8);
//
//        $sender_bank_type = match ($request['method']['id']) {
//            1, 2, 3, 4, 5, 6 => 'virtual_account',
//            7, 8, 9, 10, 11, 12 => 'wallet_account',
//        };
//
//        if ($sender_bank_type == 'virtual_account') {
//            $admin_fee = 4000;
//            $gross_amount = $request['amount'] + $admin_fee;
//        } elseif ($sender_bank_type == 'wallet_account') {
//            $admin_fee = (2 / 100) * $request['amount'];
//            $gross_amount = $request['amount'] + $admin_fee;
//        } else {
//            $admin_fee = 0;
//            $gross_amount = 0;
//        }
//
////        dd($admin_fee);
////        dd($order_id, $payment_type, $admin_fee);
//
//        $response = Http::withHeaders([
//            'Accept' => 'application/json',
//            'Content-Type' => 'application/json',
//            'Authorization' => 'Basic ' . base64_encode(Helper::api()->flip_secret . ':')
//        ])->post('https://bigflip.id/api/v2/pwf/bill',
//            [
//                "title" => "Deposit-" . $user['id'],
//                "type" => "SINGLE",
//                "amount" => $gross_amount,
//                "is_phone_number_required" => 1,
//                "step" => "3",
//                "sender_name" => $user['name'],
//                "sender_email" => $user['email'],
//                "sender_phone_number" => $user['phone'],
//                "sender_bank_type" => $sender_bank_type,
//                "sender_bank" => $request['method']['name'],
//            ],
//        );
//
////        dd($response->object());
//
//        if ($response->successful()) {
//            $transaction = Transaction::create([
//                'sku' => '-',
//                'order_id' => $response->object()->link_id,
//                'product_name' => 'Deposit',
//                'customer_no' => '-',
//                'user_id' => $request['user_id'],
//                'status_id' => Transaction::PENDING,
//                'category_id' => Transaction::DEPOSIT,
//                'amount' => $request['amount'],
//                'gross_amount' => $gross_amount,
//                'last_amount' => $user->wallet_balance,
//                'admin_fee' => $admin_fee,
//            ]);
//
//            if ($sender_bank_type == 'virtual_account') {
//                $virtual_account = TransactionBankTransfer::create([
//                    'transaction_id' => $transaction->id,
//                    'bank_id' => $request['method']['id'],
//                    'va_number' => $response->object()->bill_payment->receiver_bank_account->account_number,
//                    'payment_url' => $response->object()->payment_url,
//                    'exp_time' => Carbon::tomorrow(),
//                ]);
//            } elseif ($sender_bank_type == 'wallet_account') {
//                $wallet_account = TransactionQris::create([
//                    'transaction_id' => $transaction->id,
//                    'bank_id' => $request['method']['id'],
//                    'qr_code' => $request['method']['name'] === 'qris' ? $response->object()->bill_payment->receiver_bank_account->qr_code_data : '-',
//                    'payment_url' => $response->object()->payment_url,
//                    'exp_time' => Carbon::tomorrow(),
//                ]);
//            }
//
//            return Inertia::render('Deposit/Confirm', [
//                'transaction' => $transaction,
//                'virtual_account' => $virtual_account ?? '',
//                'wallet_account' => $wallet_account ?? '',
//            ]);
//
//        } else {
//            dd($response->object());
//        }
//
//
//    }

//    public function createMidtrans(Request $request)
//    {
////        dd($request->all());
//        $user = User::where('id', $request['user_id'])->first();
//
//        $order_id = "dp-" . $request['user_id'] . "-" . \Illuminate\Support\Str::random(8);
//
//        $payment_type = match ($request['method']['id']) {
//            1, 2, 3 => 'bank_transfer',
//            6 => 'gopay',
//        };
//
//        if ($payment_type == 'bank_transfer') {
//            $admin_fee = 4000;
//            $gross_amount = $request['amount'] + $admin_fee;
//        } elseif ($payment_type == 'gopay') {
//            $admin_fee = (2 / 100) * $request['amount'];
//            $gross_amount = $request['amount'] + $admin_fee;
//        } else {
//            $admin_fee = 0;
//            $gross_amount = 0;
//        }
//
////        dd($admin_fee);
////        dd($order_id, $payment_type, $admin_fee);
//
//        $response = Http::withHeaders([
//            'Accept' => 'application/json',
//            'Content-Type' => 'application/json',
//            'Authorization' => 'Basic ' . base64_encode(Helper::api()->midtrans_server_key . ':')
//        ])->post('https://api.sandbox.midtrans.com/v2/charge',
//            [
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
//            ],
//        );
//
////        dd($response->object());
//
//        if ($response->successful()) {
//            $transaction = Transaction::create([
//                'sku' => '-',
//                'order_id' => $order_id,
//                'product_name' => 'Deposit',
//                'customer_no' => '-',
//                'user_id' => $request['user_id'],
//                'status_id' => Transaction::PENDING,
//                'category_id' => Transaction::DEPOSIT,
//                'amount' => $request['amount'],
//                'gross_amount' => $gross_amount,
//                'last_amount' => $user->wallet_balance,
//                'admin_fee' => $admin_fee,
//            ]);
//
//            if ($payment_type == 'bank_transfer') {
//                $bank = TransactionBankTransfer::create([
//                    'transaction_id' => $transaction->id,
//                    'bank_id' => $request['method']['id'],
//                    'va_number' => $response->object()->va_numbers[0]->va_number,
//                    'exp_time' => $response->object()->expiry_time,
//                ]);
//            } elseif ($payment_type == 'gopay') {
//                $gopay = TransactionGopay::create([
//                    'transaction_id' => $transaction->id,
//                    'qr_code' => $response->object()->actions[0]->url,
//                    'deeplink_redirect' => $response->object()->actions[1]->url,
//                    'status' => $response->object()->actions[2]->url,
//                    'cancel' => $response->object()->actions[3]->url,
//                    'exp_time' => $response->object()->expiry_time,
//                ]);
//            }
//
//            return Inertia::render('Deposit/Confirm', [
//                'transaction' => $transaction,
//                'bank' => $bank ?? '',
//                'gopay' => $gopay ?? '',
//            ]);
//
//        } else {
//            dd($response->object());
//        }
//
//
//    }

}
