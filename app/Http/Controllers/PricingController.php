<?php

namespace App\Http\Controllers;

use App\Helpers\Helper;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PricingController extends Controller
{
    public function index()
    {
        $response = Helper::pricelist();

        $array = collect($response->data)->groupBy('category');

        $pulsa = $array['Pulsa']->groupBy('brand');
        $data = $array['Data']->groupBy('brand');
        $emoney = $array['E-Money']->groupBy('brand');
        $voucher = $array['Voucher']->groupBy('brand');
        $games = $array['Games']->groupBy('brand');
        $tv = $array['TV']->groupBy('brand');
        $pln = $array['PLN']->groupBy('brand');

//        dd(count($response->data));
        return Inertia::render('Pricing/Index', [
//            'product' => Inertia::lazy(fn () => $array),
            'product_count' => Inertia::lazy(fn () => count($response->data)),
            'pulsa' => Inertia::lazy(fn () => $pulsa),
            'data' => Inertia::lazy(fn () => $data),
            'emoney' => Inertia::lazy(fn () => $emoney),
            'voucher' => Inertia::lazy(fn () => $voucher),
            'games' => Inertia::lazy(fn () => $games),
            'tv' => Inertia::lazy(fn () => $tv),
            'pln' => Inertia::lazy(fn () => $pln),
            'selectCategory' => Transaction::CATEGORY
        ]);
    }
}
