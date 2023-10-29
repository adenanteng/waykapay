<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;
use LaravelDaily\Invoices\Invoice;
use LaravelDaily\Invoices\Classes\Buyer;
use LaravelDaily\Invoices\Classes\InvoiceItem;

class TransactionController extends Controller
{
    public function index() {
//        dd(Transaction::all());
        return Inertia::render('Transaction/Index', [
            'transaction' => Inertia::lazy(fn () => Transaction::latest()->get())
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
    public function print(Transaction $transaction) {
//        dd($transaction);
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

        return Inertia::render('History/Print', [
            'history' => $transaction,
        ]);
    }
}
