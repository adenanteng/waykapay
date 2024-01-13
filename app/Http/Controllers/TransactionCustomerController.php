<?php

namespace App\Http\Controllers;

use App\Models\TransactionCustomer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class TransactionCustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        Validator::make($request->toArray(), [
            'brand' => ['required', 'string', 'max:255'],
            'customer_name' => ['required', 'max:255'],
            'customer_no' => ['required', 'max:255'],
        ])->validateWithBag('storeInformation');

//        dd($request->all());

        $request['user_id'] = auth()->user()->id;

        TransactionCustomer::create($request->all());

        return to_route('history.show', $request['history_id']);
//        return Inertia::location($url);
    }

    /**
     * Display the specified resource.
     */
    public function show(TransactionCustomer $transactionCustomer)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(TransactionCustomer $transactionCustomer)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, TransactionCustomer $transactionCustomer)
    {
        dd($request->all());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(TransactionCustomer $transactionCustomer)
    {
        dd($transactionCustomer);
    }
}
