<?php

namespace App\Http\Controllers;

use App\Helpers\Helper;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class ProductPlnController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        return Inertia::render('Product/Pln/Index', []);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function prepaid()
    {
        return Inertia::render('Product/Pln/Prepaid/Index', []);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function inquiryPrepaid(Request $request)
    {
//        dd($request->all());
//        $response = Helper::pricelist();

        $customer = Http::post('https://api.digiflazz.com/v1/transaction', [
            'commands' => 'pln-subscribe',
            'customer_no' => $request['customer_no'],
        ]);

//        dd($customer->object());

        if ($customer->successful() && $customer->object()->data->customer_no != null) {
            return Inertia::render('Product/Pln/Prepaid/CreateEdit', [
                'customer' => $customer->object(),
                'response'  => Inertia::lazy(fn () => Helper::pricelist()),
                'category_id' => Transaction::PLN,
                'fee_25' => Helper::fee()->pln_25,
                'fee_50' => Helper::fee()->pln_50,
                'fee_75' => Helper::fee()->pln_75,
                'fee_100' => Helper::fee()->pln_100,
                'fee_200' => Helper::fee()->pln_200,
                'fee_500' => Helper::fee()->pln_500,
                'fee_1000' => Helper::fee()->pln_1000,
                'fee_max' => Helper::fee()->pln_max,
            ]);

        } else {
//            dd($customer->status());
            return Inertia::render('Payment/Info', [
                'transaction' => $customer->object()->data,
            ]);
        }
    }
}
