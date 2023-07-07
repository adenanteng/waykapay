<?php

namespace App\Http\Controllers;

use App\Helpers\Helper;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function pulsa()
    {
        $response = Http::post('https://api.digiflazz.com/v1/price-list', [
            'cmd' => 'prepaid',
            'username' => Helper::api()->digiflazz_username,
            'sign'  => Hash::make(Helper::api()->digiflazz_username.Helper::api()->digiflazz_key.'pricelist')
        ]);

        if ($response->successful()) {
            return Inertia::render('Product/Pulsa/Index', [
                'users' => auth()->user(),
                'response'  => $response->object(),
            ]);

        } else {
            dd($response->status());
        }
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function games()
    {
        $response = Http::post('https://api.digiflazz.com/v1/price-list', [
            'cmd' => 'prepaid',
            'username' => Helper::api()->digiflazz_username,
            'sign'  => Hash::make(Helper::api()->digiflazz_username.Helper::api()->digiflazz_key.'pricelist')
        ]);

        if ($response->successful()) {
            return Inertia::render('Product/Games/Index', [
                'users' => auth()->user(),
                'response'  => $response->object(),
            ]);

        } else {
            dd($response->status());
        }
    }
}
