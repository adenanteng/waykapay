<?php

namespace App\Http\Controllers;

use App\Helpers\Helper;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductEtollController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        return Inertia::render('Product/Etoll/Index', []);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function show($product)
    {
//        $response = Helper::pricelist();

//        dd($response);
//        if ($response->successful()) {
        return Inertia::render('Product/Show', [
            'response' => Inertia::lazy(fn () => Helper::pricelist()),
            'customer_list' => Inertia::lazy(fn () => Helper::transactionCustomer([$product])),
            'product' => $product,
            'category_id' => Transaction::EMONEY,
            'fee_25' => Helper::fee()->etoll_25,
            'fee_50' => Helper::fee()->etoll_50,
            'fee_75' => Helper::fee()->etoll_75,
            'fee_100' => Helper::fee()->etoll_100,
            'fee_200' => Helper::fee()->etoll_200,
            'fee_500' => Helper::fee()->etoll_500,
            'fee_1000' => Helper::fee()->etoll_1000,
            'fee_max' => Helper::fee()->etoll_max,
        ]);

//        } else {
////            dd($response->status());
//            return Inertia::render('Payment/Info', [
//                'transaction' => $response->object()->data,
//            ]);
//        }
    }
}
