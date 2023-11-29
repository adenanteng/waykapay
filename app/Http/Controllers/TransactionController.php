<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
use Carbon\Carbon;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Request as Req;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class TransactionController extends Controller
{
    public function index() {
//        dd(Transaction::all()->toArray());

//        $magic = Transaction::query()
//            ->latest()
//            ->when(Req::input('search'), function ($query, $search) {
//                $query->where('order_id', 'like', '%' . $search . '%')
//                    ->OrWhere('customer_no', 'like', '%' . $search . '%')
//                    ->OrWhere('product_name', 'like', '%' . $search . '%');
//            })
//            ->when(Req::input('filter'), function ($query, $filter) {
//                $query->where('category_id', $filter);
//            })
//            ->get()
//            ->groupBy(function ($val) {
//                return Carbon::parse($val->created_at)->isoFormat('dddd, D MMMM Y');
//            })
//            ;
//
//        dd($magic->toArray());

        $trx = Transaction::where('status_id', Transaction::SUCCESS)->whereNotIn('category_id', [Transaction::TRANSFER, Transaction::DEPOSIT]);

        return Inertia::render('Transaction/Index', [
//            'transaction' => Inertia::lazy(fn () => Transaction::latest()->get()),
            'transaction' => Transaction::query()
                ->latest()
                ->when(Req::input('search'), function ($query, $search) {
                    $query->where('order_id', 'like', '%' . $search . '%')
                        ->OrWhere('customer_no', 'like', '%' . $search . '%')
                        ->OrWhere('product_name', 'like', '%' . $search . '%');
                })
                ->when(Req::input('filter'), function ($query, $filter) {
                    $query->where('category_id', $filter);
                })
                ->when(Req::input('date_start'), function ($query, $date_start) {
                    $query->whereDate('created_at', '>=', $date_start);
                })
                ->when(Req::input('date_end'), function ($query, $date_end) {
                    $query->whereDate('created_at', '<=', $date_end);
                })
//                ->paginate(8)
//                ->withQueryString()
                ->get()
                ->groupBy(function ($val) {
                    return Carbon::parse($val->created_at)->isoFormat('dddd, D MMMM Y');
                }),

            'amount' => $trx->sum('amount'),
            'gross_amount' => $trx->sum('gross_amount'),

            'filters' => Req::only(['search', 'filter', 'date_start', 'date_end']),
            'selectCategory' => Transaction::CATEGORY,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param Transaction $transaction
     * @return void
     */
    public function update(Request $request, Transaction $transaction)
    {

//        dd($request->all(), $transaction);
        if ($request['agent_commission']) {
            Validator::make($request->toArray(), [
                'agent_commission' => ['required', 'integer', 'gte:'.$transaction['gross_amount']],
            ])->validateWithBag('storeInformation');

            $commission = $request['agent_commission'] - $transaction['gross_amount'];

            $transaction->update([
                'agent_commission' => $commission,
//                'gross_amount' => $transaction['gross_amount'] + $commission
            ]);
        }


//        return Redirect::route('user.index');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Transaction $transaction
     */
    public function print($id) {
//        dd($id);
//        $customer = new Buyer([
//            'name'          => 'John Doe',
//            'custom_fields' => [
//                'email' => 'test@example.com',
//            ],
//        ]);
//
//        $item = (new InvoiceItem())->title('Service 1')->pricePerUnit(2);
//
//        $invoice = Invoice::make()
//            ->buyer($customer)
//            ->discountByPercent(10)
//            ->taxRate(15)
//            ->shipping(1.99)
//            ->addItem($item);

//        return $invoice->download();

//        return view('print', compact('invoice'));
        $trx = Transaction::where('order_id', $id)->first();

        return Inertia::render('History/Print', [
            'history' => $trx,
        ]);
    }
}
