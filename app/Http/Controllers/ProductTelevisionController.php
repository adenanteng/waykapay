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
    public function kvision()
    {
        $response = Helper::pricelist();

        if ($response->successful()) {
            return Inertia::render('Product/Television/Kvision', [
                'users' => auth()->user(),
                'response'  => Inertia::lazy(fn () => $response->object()),
                'fee' => Helper::api()->fees,
            ]);

        } else {
//            dd($response->status());
            return Inertia::render('Payment/Info', [
                'transaction' => $response->object()->data,
            ]);
        }
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function nex()
    {
        $response = Helper::pricelist();

        if ($response->successful()) {
            return Inertia::render('Product/Television/Nex', [
                'users' => auth()->user(),
                'response'  => Inertia::lazy(fn () => $response->object()),
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
