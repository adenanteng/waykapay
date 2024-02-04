<?php

namespace App\Http\Controllers;

use App\Helpers\Helper;
use App\Models\Transaction;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Request as Req;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rules\In;
use Inertia\Inertia;
use Inertia\Response;
use PHPUnit\TextUI\Help;

class TransactionController extends Controller
{
    public function index() {
//        dd(Carbon::today()->subMonth()->toDateString());

        $now = Transaction::where('status_id', Transaction::SUCCESS)
            ->whereNotIn('category_id', [Transaction::TRANSFER, Transaction::TRANSFERAYO, Transaction::DEPOSIT])
            ->whereYear('created_at', Carbon::today()->year)->whereMonth('created_at', Carbon::today()->month);

        $prev = Transaction::where('status_id', Transaction::SUCCESS)
            ->whereNotIn('category_id', [Transaction::TRANSFER, Transaction::TRANSFERAYO, Transaction::DEPOSIT])
            ->whereMonth('created_at', Carbon::now()->startOfMonth()->subMonth()->month);

//        dd(Carbon::now()->startOfMonth()->subMonth()->month);

//        dd(
//            $now->count(),
//            $now->sum('amount'),
//            $now->get(),
//
//            $prev->count(),
//            $prev->sum('amount'),
//            $prev->get(),
//        );


//        $now = $trx->whereYear('created_at', Carbon::today()->year)->whereMonth('created_at', Carbon::today()->month);

//        dd($trx->whereDate('created_at', now()->subMonth())->get()->sum('gross_amount'));
//        dd($trx->whereDate('created_at', Carbon::now()->subMonth())->get()->count());

//        $prev_trx = $prev->count();
//        $prev_amount = $prev->sum('amount');
//        $prev_gross_amount = $prev->sum('gross_amount');

        return Inertia::render('Transaction/Index', [
            'trx' => $now->count(),
            'amount' => $now->sum('amount'),
            'gross_amount' => $now->sum('gross_amount'),

            'prev_trx' => $prev->count(),
            'prev_amount' => $prev->sum('amount'),
            'prev_gross_amount' => $prev->sum('gross_amount'),

//            'trx' => Inertia::lazy(fn () => $now->count()),
//            'amount' => Inertia::lazy(fn () => $now->sum('amount')),
//            'gross_amount' => Inertia::lazy(fn () => $now->sum('gross_amount')),
//
//            'prev_trx' => Inertia::lazy(fn () => $prev->count()),
//            'prev_amount' => Inertia::lazy(fn () => $prev->sum('amount')),
//            'prev_gross_amount' => Inertia::lazy(fn () => $prev->sum('gross_amount')),
        ]);
    }

    public function detail() {

        $paginate = Req::input('filter_paginate') ?? 20;

        $tr = Transaction::query()
            ->latest()
            ->when(Req::input('search'), function ($query, $search) {
                $query->where('order_id', 'like', '%' . $search . '%')
                    ->OrWhere('customer_no', 'like', '%' . $search . '%')
                    ->OrWhere('product_name', 'like', '%' . $search . '%');
            })
            ->when(Req::input('filter_status'), function ($query, $filter_status) {
                $query->where('status_id', $filter_status);
            })
            ->when(Req::input('filter_category'), function ($query, $filter_category) {
                $query->where('category_id', $filter_category);
            })
            ->when(Req::input('date_start'), function ($query, $date_start) {
                $query->whereDate('created_at', '>=', $date_start);
            })
            ->when(Req::input('date_end'), function ($query, $date_end) {
                $query->whereDate('created_at', '<=', $date_end);
            });

        return Inertia::render('Transaction/Detail', [
            'transaction' => Inertia::lazy(fn () => $tr->paginate($paginate)->onEachSide(1)),
            'transactionCount' => Inertia::lazy(fn () => $tr->count()),
            'filters' => Req::only(['search', 'filter_status', 'filter_category', 'filter_paginate','date_start', 'date_end']),
            'selectCategory' => Transaction::CATEGORY,
            'selectStatus' => Transaction::STATUS,
//            'selectPaginate' => Transaction::PAGINATE,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param Transaction $transaction
     * @return RedirectResponse|\Symfony\Component\HttpFoundation\Response|void
     */
    public function update(Request $request, Transaction $transaction)
    {

//        dd($request->all(), $transaction);

        if ($request['agent_commission'] != null) {
            Validator::make($request->toArray(), [
                'agent_commission' => ['required', 'integer', 'gte:'.$transaction['gross_amount']],
            ])->validateWithBag('storeInformation');


            $commission = $request['agent_commission'] - $transaction['gross_amount'];

            $transaction->update([
                'agent_commission' => $commission,
//                'gross_amount' => $transaction['gross_amount'] + $commission
            ]);

        } elseif ($request['valid'] != null) {

//            if (auth()->user()->pin != null) {
//                Validator::make($request->toArray(), [
//                    'pin' => ['required'],
//                ])->validateWithBag('storeInformation');
//
//                if (!Hash::check($request['pin'], auth()->user()->pin)) {
//                    return to_route('pin.wrong');
//                }
//            }

            $transaction = Transaction::where('order_id', $request['valid'])->first();
            $user = User::where('id', $transaction['user_id'])->first();

            if ($transaction->status_id != Transaction::SUCCESS) {
                $unique = $transaction->gross_amount - $transaction->amount;
                $amount = $request['valid_amount'] - $unique;
                $transaction->update([
                    'admin_fee' => $unique,
                    'amount' => $amount,
                    'gross_amount' => $request['valid_amount'],
                    'status_id' => Transaction::SUCCESS,
                ]);

                $user->deposit($amount);

                if ($user->device_token) {
                    $msg = [
                        'title' => 'Deposit Rp '.$transaction->amount.' berhasil!',
                        'body' => 'Lorem ipsum dolor sit amet',
                        'badge' => 1,
                        'sound' => 'ping.aiff'
                    ];
                    Helper::sendNotification($user->device_token, $msg);
                }

                $url = 'https://api.whatsapp.com/send?phone='.Helper::phoneFormat($user->phone).'&text=Deposit%20Rp%20'.$transaction->amount.'%20sudah%20diproses%20ya.%20Terima%20kasih';
                return Inertia::location($url);
            }
//            dd(Helper::phoneFormat($user->phone));
//            return to_route('history.show', $transaction->order_id);
        } else {
            dd('something error!');
        }

//        return Redirect::route('user.index');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param $id
     * @return Response
     */
    public function print($id) {
//        dd($id);
        $trx = Transaction::where('order_id', $id)->first();

        return Inertia::render('History/Print', [
            'history' => $trx,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param $id
     * @return Response
     */
    public function share($id) {
//        dd($id);
        $trx = Transaction::where('order_id', $id)->first();

        return Inertia::render('History/Share', [
            'history' => $trx,
        ]);
    }
}
