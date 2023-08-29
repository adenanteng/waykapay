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
            'history'=> Inertia::lazy(fn () => $history),
            'on_process' => Inertia::lazy(fn () => $history->where('status_id', Transaction::PENDING)->count()),
            'in_count' => Inertia::lazy(fn () => $history->where('category_id', Transaction::DEPOSIT)->where('status_id', Transaction::SUCCESS)->sum('amount')),
            'out_count' => Inertia::lazy(fn () => $history->where('category_id', '!=', Transaction::DEPOSIT)->where('status_id', Transaction::SUCCESS)->sum('gross_amount')),
        ]);
    }

    public function show($id) {
        $transaction = Transaction::where('id', $id)->first();
        $user = User::where('id', $transaction->user_id)->first();

//        dd($transaction->toArray());

        if ($transaction->category_id == Transaction::DEPOSIT) {
            switch ($transaction->status_id) {
                case (Transaction::SUCCESS):
                case (Transaction::ERROR):
//                    session()->flash('flash.banner', 'tidak ada proses!');
                    break;
                default:
                    $response = Http::withHeaders([
                        'Accept' => 'application/json',
                        'Content-Type' => 'application/json',
                        'Authorization' => 'Basic ' . base64_encode(Helper::api()->flip_secret . ':')
                    ])->get('https://bigflip.id/big_sandbox_api/v2/pwf/' . $transaction->order_id . '/payment');

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

            }
        } else {
            switch ($transaction->status_id) {
                case (Transaction::SUCCESS):
                case (Transaction::ERROR):
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

                    Helper::update_digiflazz_saldo($response->object()->data->buyer_last_saldo);
            }
        }

//        dd($transaction->toArray());

        return Inertia::render('History/Show', [
            'history' => $transaction,
        ]);
    }

}
