<?php

namespace App\Http\Controllers;

use App\Helpers\Helper;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class ProductPulsaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        $response = Helper::pricelist();

        if ($response->successful()) {
            return Inertia::render('Product/Pulsa/Index', [
                'users' => auth()->user(),
                'response'  => $response->object(),
                'fee' => Helper::api()->fees,
            ]);

        } else {
//            dd($response->status());
            return Inertia::render('Payment/Info', [
                'transaction' => $response->object()->data,
            ]);
        }
    }

}
