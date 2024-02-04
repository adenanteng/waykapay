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
use Illuminate\Support\Facades\Request as Req;
use Inertia\Inertia;
use Inertia\Response;
use Psy\Util\Str;
use Stephenjude\Wallet\Exceptions\InsufficientFundException;

class HistoryController extends Controller
{
    public function index() {
//        dd(Transaction::where('user_id', auth()->user()->id)->get());
//        ->whereDate('created_at', Carbon::today())
//        dd(Carbon::now()->month);
        $paginate = Req::input('filter_paginate') ?? 20;
        $history = Transaction::where(function($query)
            {
                $query->where('user_id', auth()->user()->id)
                    ->orWhereRelation('money_transfer', 'to_id', '=', auth()->user()->id);
            });
//            ->whereMonth('created_at', Carbon::now()->month)
//            ->latest()
//            ->paginate($paginate)
//            ->groupBy(function ($val) {
//                return Carbon::parse($val->created_at)->isoFormat('dddd, D MMMM Y');
//            });

//        dd($history);

        return Inertia::render('History/Index', [
            'history'=> Inertia::lazy(fn () => $history->latest()->paginate($paginate)->groupBy(function ($val) {
                                                    return Carbon::parse($val->created_at)->isoFormat('dddd, D MMMM Y');
                                                })),
            'history_count' => Inertia::lazy(fn () => $history->count()),
            'all_process' => Inertia::lazy(fn () => $history->whereMonth('created_at', Carbon::now()->month)->where('status_id', Transaction::SUCCESS)->count()),
            'in_count' => Inertia::lazy(fn () => Transaction::where(function($query)
                                                {
                                                    $query->where('user_id', auth()->user()->id)
                                                        ->orWhereRelation('money_transfer', 'to_id', '=', auth()->user()->id);
                                                })
                                                ->where([
                                                    ['status_id', Transaction::SUCCESS],
                                                ])
                                                ->whereIn('category_id', [Transaction::DEPOSIT, Transaction::TRANSFER])
                                                ->whereMonth('created_at', Carbon::now()->month)
                                                ->sum('amount')),

            'out_count' => Inertia::lazy(fn () => Transaction::where('user_id', auth()->user()->id)
                                                ->where([
                                                    ['status_id', Transaction::SUCCESS],
                                                ])
                                                ->whereNotIn('category_id', [Transaction::DEPOSIT])
                                                ->whereMonth('created_at', Carbon::now()->month)
//                                                    ->orWhereRelation('money_transfer', 'to_id', '!=', auth()->user()->id)
                                                ->sum('gross_amount')),

            'filters' => Req::only(['search', 'filter_paginate']),
        ]);
    }

    public function show($id) {
        $transaction = Transaction::where('order_id', $id)->first();
        $user = User::where('id', $transaction->user_id)->first();

//        dd($transaction->toArray());

//        mulai aari sini
//        if ($transaction->category_id == Transaction::DEPOSIT) {
//            switch ($transaction->status_id) {
//                case (Transaction::SUCCESS):
//                case (Transaction::ERROR):
////                    session()->flash('flash.banner', 'tidak ada proses!');
//                    break;
//                default:
//            }
//        } elseif ($transaction->category_id == Transaction::TRANSFER) {
//
//        } else {
//            switch ($transaction->status_id) {
//                case (Transaction::SUCCESS):
////                case (Transaction::ERROR):
////                    session()->flash('flash.banner', 'tidak ada proses!');
//                    break;
//                default:
//                    if ($transaction->category_id < 8) {
//                        $response = Http::post('https://api.digiflazz.com/v1/transaction', [
////                        'commands' => 'status-pasca',
//                            'username' => Helper::api()->digiflazz_username,
//                            'buyer_sku_code' => $transaction->sku,
//                            'customer_no' => $transaction->customer_no,
//                            'ref_id' => $transaction->order_id,
//                            'sign' => md5(Helper::api()->digiflazz_username.Helper::api()->digiflazz_key.$transaction->order_id)
//                        ]);
//                    } else {
//                        $response = Http::post('https://api.digiflazz.com/v1/transaction', [
//                            'commands' => 'status-pasca',
//                            'username' => Helper::api()->digiflazz_username,
//                            'buyer_sku_code' => $transaction->sku,
//                            'customer_no' => $transaction->customer_no,
//                            'ref_id' => $transaction->order_id,
//                            'sign' => md5(Helper::api()->digiflazz_username.Helper::api()->digiflazz_key.$transaction->order_id),
//                        ]);
//                    }
//
//
////                dd($response->object()->data);
//
//                    switch ($response->object()->data->status) {
//                        case ('Sukses'):
//                            $transaction->update([
//                                'status_id' => Transaction::SUCCESS,
//                                'desc' => $response->object()->data->sn
//                            ]);
////                            $user->deposit($transaction->gross_amount);
//                            break;
//
//                        case ('Pending'):
//                            $transaction->update([
//                                'status_id' => Transaction::PENDING,
//                                'desc' => $response->object()->data->rc.' '.$response->object()->data->message
//                            ]);
//                            break;
//
//                        default:
//                            $transaction->update([
//                                'status_id' => Transaction::ERROR,
//                                'desc' => $response->object()->data->rc.' '.$response->object()->data->message
//                            ]);
//                    }
//
////                    Helper::update_digiflazz_saldo($response->object()->data->buyer_last_saldo);
//            }
//        }
//        sampe sini


//        dd((boolean)Req::input('goBack'));

        return Inertia::render('History/Show', [
            'history' => $transaction,
//            'goBack' => (boolean)Req::input('goBack') ?? true,
//            'goSuccess' => (boolean)Req::input('goSuccess') ?? false
        ]);
    }
}
