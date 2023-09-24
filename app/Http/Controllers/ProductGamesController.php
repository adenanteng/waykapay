<?php

namespace App\Http\Controllers;

use App\Helpers\Helper;
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
    public function pubgm()
    {
        $response = Helper::pricelist();

        if ($response->successful()) {
            return Inertia::render('Product/Games/Pubgm', [
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
    public function ml()
    {
        $response = Helper::pricelist();

        if ($response->successful()) {
            return Inertia::render('Product/Games/MobileLegends', [
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
    public function googlePlay()
    {
        $response = Helper::pricelist();

        if ($response->successful()) {
            return Inertia::render('Product/Games/GooglePlay', [
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
    public function steam()
    {
        $response = Helper::pricelist();

        if ($response->successful()) {
            return Inertia::render('Product/Games/Steam', [
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
