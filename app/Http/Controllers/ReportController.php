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
        $trx = Transaction::where('user_id', auth()->user()->id
        )->where('status_id', Transaction::SUCCESS)
        ->whereNotIn('category_id', [Transaction::TRANSFER, Transaction::DEPOSIT]);

//        dd($trx->get());

        return Inertia::render('Report/Index', [
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
                ->when(Req::input('filter'), function ($query, $filter) {
                    $query->where('category_id', $filter);
                })
//                ->paginate(8)
//                ->withQueryString()
                ->get()
                ->groupBy(function ($val) {
                    return Carbon::parse($val->created_at)->isoFormat('dddd, D MMMM Y');
                }),

            'gross_amount' => Inertia::lazy(fn () => $trx->sum('gross_amount')),
            'agent_commission' => Inertia::lazy(fn () => $trx->sum('agent_commission')),
            'transaction_count' => Inertia::lazy(fn () => Transaction::where('user_id', auth()->user()->id)
                                                        ->orWhereRelation('money_transfer', 'to_id', '=', auth()->user()->id)->latest()
                                                        ->where('status_id', Transaction::SUCCESS)->get()->count()),

            'filters' => Req::only(['search', 'filter']),
            'selectCategory' => Transaction::CATEGORY,
        ]);
    }
}
