<?php

namespace App\Http\Controllers;

use App\Helpers\Helper;
use App\Models\Transaction;
use App\Models\TransactionCustomer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;
use PHPUnit\TextUI\Help;

class ProductEmoneyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        return Inertia::render('Product/Emoney/Index', []);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function show($product)
    {
//        $response = Helper::pricelist();

//        $cust = TransactionCustomer::where('user_id', auth()->user()->id)->where('brand', $product)->select(['customer_name', 'customer_no'])->get()->toArray();
//        dd(Helper::transactionCustomer($product));

        return Inertia::render('Product/Show', [
            'response' => Inertia::lazy(fn () => Helper::pricelist()),
            'customer_list' => Inertia::lazy(fn () => Helper::transactionCustomer([$product])),
            'product' => $product,
            'category_id' => Transaction::EMONEY,
            'fee_25' => Helper::fee()->emoney_25,
            'fee_50' => Helper::fee()->emoney_50,
            'fee_75' => Helper::fee()->emoney_75,
            'fee_100' => Helper::fee()->emoney_100,
            'fee_200' => Helper::fee()->emoney_200,
            'fee_500' => Helper::fee()->emoney_500,
            'fee_1000' => Helper::fee()->emoney_1000,
            'fee_max' => Helper::fee()->emoney_max,
        ]);

    }
}
