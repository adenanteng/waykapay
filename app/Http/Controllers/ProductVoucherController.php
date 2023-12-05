<?php

namespace App\Http\Controllers;

use App\Helpers\Helper;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class ProductVoucherController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        return Inertia::render('Product/Voucher/Index', [
            'users' => auth()->user(),
        ]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function show($product)
    {
//        $response = Helper::pricelist();

//        if ($response->successful()) {
            return Inertia::render('Product/Voucher/Show', [
                'users' => auth()->user(),
                'response' => Inertia::lazy(fn () => Helper::pricelist()),
                'product' => $product,
                'fee_25' => Helper::fee()->voucher_25,
                'fee_50' => Helper::fee()->voucher_50,
                'fee_75' => Helper::fee()->voucher_75,
                'fee_100' => Helper::fee()->voucher_100,
                'fee_200' => Helper::fee()->voucher_200,
                'fee_500' => Helper::fee()->voucher_500,
                'fee_1000' => Helper::fee()->voucher_1000,
                'fee_max' => Helper::fee()->voucher_max,
            ]);

//        } else {
////            dd($response->status());
//            return Inertia::render('Payment/Info', [
//                'transaction' => $response->object()->data,
//            ]);
//        }
    }
}
