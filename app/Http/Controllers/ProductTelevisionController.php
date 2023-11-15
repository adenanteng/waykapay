<?php

namespace App\Http\Controllers;

use App\Helpers\Helper;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class ProductTelevisionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        return Inertia::render('Product/Television/Index', [
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
        $response = Helper::pricelist();

//        if ($response->successful()) {
            return Inertia::render('Product/Television/Show', [
                'users' => auth()->user(),
                'response' => Inertia::lazy(fn () => $response),
                'product' => $product,
                'fee_25' => Helper::fee()->tv_25,
                'fee_50' => Helper::fee()->tv_50,
                'fee_75' => Helper::fee()->tv_75,
                'fee_100' => Helper::fee()->tv_100,
                'fee_200' => Helper::fee()->tv_200,
                'fee_500' => Helper::fee()->tv_500,
                'fee_1000' => Helper::fee()->tv_1000,
                'fee_max' => Helper::fee()->tv_max,
            ]);

//        } else {
////            dd($response->status());
//            return Inertia::render('Payment/Info', [
//                'transaction' => $response->object()->data,
//            ]);
//        }
    }
}
