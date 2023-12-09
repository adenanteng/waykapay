<?php

namespace App\Http\Controllers;

use App\Helpers\Helper;
use App\Models\Transaction;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use Psy\Util\Str;
use Stephenjude\Wallet\Exceptions\InsufficientFundException;

class HistoryController extends Controller
{
    public function index() {
//        dd(Transaction::where('user_id', auth()->user()->id)->get());
//        ->whereDate('created_at', Carbon::today())
        $history = Transaction::where('user_id', auth()->user()->id)
            ->orWhereRelation('money_transfer', 'to_id', '=', auth()->user()->id)
            ->whereMonth('created_at', Carbon::now()->month)
            ->latest()
            ->get()
            ->groupBy(function ($val) {
                return Carbon::parse($val->created_at)->isoFormat('dddd, D MMMM Y');
            });

//        dd($history->toArray());

        return Inertia::render('History/Index', [
            'history'=> Inertia::lazy(fn () => $history),

            'all_process' => Inertia::lazy(fn () => $history->count()),

            'in_count' => Inertia::lazy(fn () => Transaction::where('user_id', auth()->user()->id)
                                                    ->where('status_id', Transaction::SUCCESS)
                                                    ->where('category_id', Transaction::DEPOSIT)
                                                    ->orWhere('category_id', Transaction::TRANSFER)
                                                    ->orWhereRelation('money_transfer', 'to_id', '=', auth()->user()->id)
                                                    ->whereMonth('created_at', Carbon::now()->month)
                                                    ->sum('amount')),

            'out_count' => Inertia::lazy(fn () => Transaction::where('user_id', auth()->user()->id)
                                                    ->where('status_id', Transaction::SUCCESS)
                                                    ->where('category_id', '!=', Transaction::DEPOSIT)
                                                    ->orWhere('category_id', '!=', Transaction::TRANSFER)
                                                    ->whereMonth('created_at', Carbon::now()->month)
//                                                    ->orWhereRelation('money_transfer', 'to_id', '!=', auth()->user()->id)
                                                    ->sum('gross_amount')),
        ]);
    }

    public function show($id) {
        $transaction = Transaction::where('order_id', $id)->first();
        $user = User::where('id', $transaction->user_id)->first();

//        dd($transaction->toArray());

        if ($transaction->category_id == Transaction::DEPOSIT) {
            switch ($transaction->status_id) {
                case (Transaction::SUCCESS):
                case (Transaction::ERROR):
//                    session()->flash('flash.banner', 'tidak ada proses!');
                    break;
                default:

//                    $clientId = "BRN-0207-1696486292133";
//                    $secretKey = "SK-tJPSFOkRG0WHG8PIuzso";
//                    $requestId = $transaction->order_id;
//                    $requestDate = Carbon::now('UTC')->toIso8601ZuluString();
//                    $getUrl = 'https://api-sandbox.doku.com';
//                    $targetPath = '/orders/v1/status/';
//                    $url = $getUrl . $targetPath . $transaction->order_id;
//
//                    // Prepare signature component
//                    $componentSignature = "Client-Id:".$clientId ."\n".
//                        "Request-Id:".$requestId . "\n".
//                        "Request-Timestamp:".$requestDate ."\n".
//                        "Request-Target:".$targetPath;
//
//                    // Generate signature
//                    $signature = base64_encode(hash_hmac('sha256', $componentSignature, $secretKey, true));
//
//                    // Execute request
//                    $ch = curl_init($url);
////                    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($requestBody));
//                    curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type:application/json'));
//                    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
//
//                    curl_setopt($ch, CURLOPT_HTTPHEADER, array(
//                        'Content-Type: application/json',
//                        'Client-Id:' . $clientId,
//                        'Request-Id:' . $requestId,
//                        'Request-Timestamp:' . $requestDate,
//                        'Signature:' . "HMACSHA256=" . $signature,
//                    ));
//
//                    // Set response json
//                    $responseJson = curl_exec($ch);
//                    $response = json_decode($responseJson);
//                    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
//
//                    curl_close($ch);
//
//                    dd($response);
//
//                    switch ($response->object()->data[0]->status) {
//                        case('SUCCESSFUL'):
//                            $status_id = Transaction::SUCCESS;
//                            $user->deposit($transaction->amount);
//                            break;
//
//                        case ('PENDING'):
//                            $status_id = Transaction::PENDING;
//                            break;
//
//                        case ('FAILED'):
//                            $status_id = Transaction::ERROR;
//                            break;
//
//                        default:
//                            $status_id = Transaction::UNDEFINED;
//                    }
//                    $transaction->update([
//                        'status_id' => $status_id,
//                    ]);

            }
        } elseif ($transaction->category_id == Transaction::TRANSFER) {

        } else {
            switch ($transaction->status_id) {
                case (Transaction::SUCCESS):
//                case (Transaction::ERROR):
//                    session()->flash('flash.banner', 'tidak ada proses!');
                    break;
                default:
                    if ($transaction->category_id < 8) {
                        $response = Http::post('https://api.digiflazz.com/v1/transaction', [
//                        'commands' => 'status-pasca',
                            'username' => Helper::api()->digiflazz_username,
                            'buyer_sku_code' => $transaction->sku,
                            'customer_no' => $transaction->customer_no,
                            'ref_id' => $transaction->order_id,
                            'sign' => md5(Helper::api()->digiflazz_username.Helper::api()->digiflazz_key.$transaction->order_id)
                        ]);
                    } else {
                        $response = Http::post('https://api.digiflazz.com/v1/transaction', [
                            'commands' => 'status-pasca',
                            'username' => Helper::api()->digiflazz_username,
                            'buyer_sku_code' => $transaction->sku,
                            'customer_no' => $transaction->customer_no,
                            'ref_id' => $transaction->order_id,
                            'sign' => md5(Helper::api()->digiflazz_username.Helper::api()->digiflazz_key.$transaction->order_id),
                        ]);
                    }


//                dd($response->object()->data);

                    switch ($response->object()->data->status) {
                        case ('Sukses'):
                            $transaction->update([
                                'status_id' => Transaction::SUCCESS,
                                'desc' => $response->object()->data->sn
                            ]);
                            $user->deposit($transaction->gross_amount);
                            break;

                        case ('Pending'):
                            $transaction->update([
                                'status_id' => Transaction::PENDING,
                                'desc' => $response->object()->data->rc.' '.$response->object()->data->message
                            ]);
                            break;

                        default:
                            $transaction->update([
                                'status_id' => Transaction::ERROR,
                                'desc' => $response->object()->data->rc.' '.$response->object()->data->message
                            ]);
                    }

//                    Helper::update_digiflazz_saldo($response->object()->data->buyer_last_saldo);
            }
        }

//        dd($transaction->toArray());

        return Inertia::render('History/Show', [
            'history' => $transaction,
        ]);
    }
}
