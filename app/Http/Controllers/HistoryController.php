<?php

namespace App\Http\Controllers;

use App\Helpers\Helper;
use App\Models\Transaction;
use App\Models\User;
use Illuminate\Http\Request;
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
        $history = Transaction::where('user_id', auth()->user()->id)->latest()->get();

//        dd($history->where('category_id', 1)->sum('gross_amount'));

        return Inertia::render('History/Index', [
            'users' => auth()->user(),
            'history' => $history,
            'in_count' => $history->where('category_id', 1)->where('status_id', 1)->sum('amount'),
            'out_count' => $history->where('category_id', '!=', 1)->where('status_id', 1)->sum('gross_amount'),
        ]);
    }

    public function show($id) {
        $transaction = Transaction::where('id', $id)->first();
        $user = User::where('id', $transaction->user_id)->first();

//        dd($transaction->toArray());

        if ($transaction->category_id == Transaction::DEPOSIT) {
            switch ($transaction->status_id) {
                case (Transaction::SUCCESS):
//                    session()->flash('flash.banner', 'tidak ada proses!');
                    break;
                default:
                    $response = Http::withHeaders([
                        'Accept' => 'application/json',
                        'Content-Type' => 'application/json',
                        'Authorization' => 'Basic ' . base64_encode(Helper::api()->midtrans_server_key . ':')
                    ])->get('https://api.sandbox.midtrans.com/v2/' . $transaction->order_id . '/status');

                    switch ($response->object()->transaction_status) {
                        case ('capture'):
                        case('settlement'):
                            $status_id = Transaction::SUCCESS;
                            $user->deposit($transaction->amount);
                            break;

                        case ('pending'):
                            $status_id = Transaction::PENDING;
                            break;

                        case ('cancel'):
                            $status_id = Transaction::CANCEL;
                            break;

                        case ('deny'):
                            $status_id = Transaction::DENY;
                            break;

                        case ('expire'):
                            $status_id = Transaction::EXPIRE;
                            break;

                        default:
                            $status_id = Transaction::UNDEFINED;
                    }

                    $transaction->update([
                        'status_id' => $status_id,
                    ]);

//                    session()->flash('flash.banner', 'terproses ');
//                    session()->flash('flash.bannerStyle', 'danger');
            }
        } else {
            switch ($transaction->status_id) {
                case (Transaction::SUCCESS):
//                    session()->flash('flash.banner', 'tidak ada proses!');
                    break;
                default:
                    $response = Http::post('https://api.digiflazz.com/v1/transaction', [
//                        'commands' => 'status-pasca',
                        'username' => Helper::api()->digiflazz_username,
                        'buyer_sku_code' => $transaction->sku,
                        'customer_no' => $transaction->customer_no,
                        'ref_id' => $transaction->order_id,
                        'sign' => md5(Helper::api()->digiflazz_username.Helper::api()->digiflazz_key.$transaction->order_id),
//                        'testing' => true
                    ]);

//                dd($response->object()->data);

                    switch ($response->object()->data->status) {
                        case ('Sukses'):
                            $transaction->update([
                                'status_id' => Transaction::SUCCESS,
                            ]);
                            $user->deposit($transaction->gross_amount);
                            break;

                        case ('Pending'):
                            $transaction->update([
                                'status_id' => Transaction::PENDING,
                            ]);
                            break;

                        default:
                            $transaction->update([
                                'status_id' => Transaction::UNDEFINED,
                            ]);
                    }

//                    session()->flash('flash.banner', 'terproses');
//                    session()->flash('flash.bannerStyle', 'danger');
            }
        }

//        dd($transaction->toArray());

        return Inertia::render('History/Show', [
            'history' => $transaction,
        ]);
    }

}
