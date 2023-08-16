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
        $response = Http::post('https://api.digiflazz.com/v1/price-list', [
            'cmd' => 'prepaid',
            'username' => Helper::api()->digiflazz_username,
            'sign'  => md5(Helper::api()->digiflazz_username.Helper::api()->digiflazz_key.'pricelist')
        ]);

        if ($response->successful()) {
            return Inertia::render('Product/Games/Pubgm', [
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

    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function ml()
    {
        $response = Http::post('https://api.digiflazz.com/v1/price-list', [
            'cmd' => 'prepaid',
            'username' => Helper::api()->digiflazz_username,
            'sign'  => md5(Helper::api()->digiflazz_username.Helper::api()->digiflazz_key.'pricelist')
        ]);

        if ($response->successful()) {
            return Inertia::render('Product/Games/MobileLegends', [
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
