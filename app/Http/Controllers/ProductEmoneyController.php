<?php

namespace App\Http\Controllers;

use App\Helpers\Helper;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

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

//        dd($response);
//        if ($response->successful()) {

            $arr = array(
                "data" => array(
                    'rc' => '83',
                    'message' => 'Anda telah mencapai limitasi pengecekan pricelist, silahkan coba beberapa saat lagi'
                ),
            );

            return Inertia::render('Product/Show', [
                'response' => Inertia::lazy(fn () => Helper::pricelist()),
//                'response' => Inertia::lazy(fn () => $arr),
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

//        } else {
////            dd($response->status());
//            return Inertia::render('Payment/Info', [
//                'transaction' => $response->object()->data,
//            ]);
//        }
    }
}
