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

        return Inertia::render('Pricing/Index', [
//            'product' => Inertia::lazy(fn () => $response),
            'product' => $response,
            'selectCategory' => Transaction::CATEGORY
        ]);
    }
}
