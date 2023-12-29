<?php

namespace App\Http\Controllers;

use App\Helpers\Helper;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class ProductGamesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        return Inertia::render('Product/Games/Index', [
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
            return Inertia::render('Product/Show', [
                'users' => auth()->user(),
                'response' => Inertia::lazy(fn () => Helper::pricelist()),
                'product' => $product,
                'category_id' => Transaction::GAMES,
                'fee_25' => Helper::fee()->games_25,
                'fee_50' => Helper::fee()->games_50,
                'fee_75' => Helper::fee()->games_75,
                'fee_100' => Helper::fee()->games_100,
                'fee_200' => Helper::fee()->games_200,
                'fee_500' => Helper::fee()->games_500,
                'fee_1000' => Helper::fee()->games_1000,
                'fee_max' => Helper::fee()->games_max,
            ]);

//        } else {
////            dd($response->status());
//            return Inertia::render('Payment/Info', [
//                'transaction' => $response->object()->data,
//            ]);
//        }
    }
}
