<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Request as Req;
use Inertia\Inertia;

class ReportController extends Controller
{
    public function index() {
        $now = Transaction::where('user_id', auth()->user()->id)
            ->where('status_id', Transaction::SUCCESS)
            ->whereNotIn('category_id', [Transaction::DEPOSIT])
            ->whereYear('created_at', Carbon::today()->year)->whereMonth('created_at', Carbon::today()->month);

        $prev = Transaction::where('user_id', auth()->user()->id)
            ->where('status_id', Transaction::SUCCESS)
            ->whereNotIn('category_id', [Transaction::DEPOSIT])
            ->whereMonth('created_at', Carbon::now()->startOfMonth()->subMonth()->month);


        return Inertia::render('Report/Index', [
            'trx' => $now->count(),
            'gross_amount' => $now->sum('gross_amount'),
            'agent_commission' => $now->sum('agent_commission'),

            'prev_trx' => $prev->count(),
            'prev_gross_amount' => $prev->sum('gross_amount'),
            'prev_agent_commission' => $prev->sum('agent_commission'),

        ]);
    }

    public function detail() {

        $paginate = Req::input('filter_paginate') ?? 10;

        $tr = Transaction::query()
            ->where('user_id', auth()->user()->id)
//                ->orWhereRelation('money_transfer', 'to_id', '=', auth()->user()->id)
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

        return Inertia::render('Report/Detail', [
            'transaction' => Inertia::lazy(fn () => $tr->paginate($paginate)->onEachSide(1)),
            'transactionCount' => Inertia::lazy(fn () => $tr->count()),
            'filters' => Req::only(['search', 'filter_status', 'filter_category', 'filter_paginate', 'date_start', 'date_end']),
            'selectCategory' => Transaction::CATEGORY,
            'selectStatus' => Transaction::STATUS,
//            'selectPaginate' => Transaction::PAGINATE
        ]);
    }
}
