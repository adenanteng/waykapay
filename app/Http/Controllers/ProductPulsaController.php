<?php

namespace App\Http\Controllers;

use App\Helpers\Helper;
use App\Models\AppSetting;
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

//        dd($response->object());
//        dd(Helper::fee()->pulsa_25);
        if ($response->successful()) {
            return Inertia::render('Product/Pulsa/Index', [
                'users' => auth()->user(),
                'response'  => Inertia::lazy(fn () => $response->object()),
                'fee_25' => Helper::fee()->pulsa_25,
                'fee_50' => Helper::fee()->pulsa_50,
                'fee_75' => Helper::fee()->pulsa_75,
                'fee_100' => Helper::fee()->pulsa_100,
                'fee_200' => Helper::fee()->pulsa_200,
                'fee_500' => Helper::fee()->pulsa_500,
                'fee_1000' => Helper::fee()->pulsa_1000,
                'fee_max' => Helper::fee()->pulsa_max,
            ]);

        } else {
//            dd($response->status());
            return Inertia::render('Payment/Info', [
                'transaction' => $response->object()->data,
            ]);
        }
    }

}
