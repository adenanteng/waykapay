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
//        $trx = Transaction::where('user_id', auth()->user()->id)
//            ->where('status_id', Transaction::SUCCESS)
//            ->whereNotIn('category_id', [Transaction::TRANSFER, Transaction::DEPOSIT]);

//        dd($trx->get());

        return Inertia::render('Report/Detail', [
//            'transaction' => Inertia::lazy(fn () => Transaction::latest()->get()),
            'transaction' => Transaction::query()
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
                })
                ->paginate(8),
//                ->withQueryString()
//                ->get()
//                ->groupBy(function ($val) {
//                    return Carbon::parse($val->created_at)->isoFormat('dddd, D MMMM Y');
//                }),

//            'gross_amount' => $trx->sum('gross_amount'),
//            'agent_commission' => $trx->sum('agent_commission'),
//            'transaction_count' => Transaction::where(function($query)
//                {
//                    $query->where('user_id', auth()->user()->id)
//                        ->orWhereRelation('money_transfer', 'to_id', '=', auth()->user()->id);
//                })
//                ->where('status_id', Transaction::SUCCESS)
//                ->latest()
//                ->get()->count(),

            'filters' => Req::only(['search', 'filter_status', 'filter_category', 'date_start', 'date_end']),
            'selectCategory' => Transaction::CATEGORY,
            'selectStatus' => Transaction::STATUS,
        ]);
    }
}
