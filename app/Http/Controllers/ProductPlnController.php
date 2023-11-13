<?php

namespace App\Http\Controllers;

use App\Helpers\Helper;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class ProductPlnController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        return Inertia::render('Product/Pln/Index', [
//            'users' => auth()->user(),
        ]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function prepaid()
    {
        return Inertia::render('Product/Pln/Prepaid/Index', [
//            'users' => auth()->user(),
        ]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function inquiryPrepaid(Request $request)
    {
//        dd($request->all());
        $response = Helper::pricelist();

        $customer = Http::post('https://api.digiflazz.com/v1/transaction', [
            'commands' => 'pln-subscribe',
            'customer_no' => $request['customer_no'],
        ]);

        if ($customer->successful()) {
            return Inertia::render('Product/Pln/Prepaid/CreateEdit', [
                'users' => auth()->user(),
                'customer' => $customer->object(),
                'response'  => Inertia::lazy(fn () => $response->object()),
                'fee_25' => Helper::fee()->pln_25,
                'fee_50' => Helper::fee()->pln_50,
                'fee_75' => Helper::fee()->pln_75,
                'fee_100' => Helper::fee()->pln_100,
                'fee_200' => Helper::fee()->pln_200,
                'fee_500' => Helper::fee()->pln_500,
                'fee_1000' => Helper::fee()->pln_1000,
                'fee_max' => Helper::fee()->pln_max,
            ]);

        } else {
//            dd($customer->status());
            return Inertia::render('Payment/Info', [
                'transaction' => $customer->object()->data,
            ]);
        }
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function postpaid()
    {
        return Inertia::render('Product/Pln/Postpaid/Index', [
//            'users' => auth()->user(),
        ]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function inquiryPostpaid(Request $request)
    {
//        dd($request->all());
        $user = auth()->user();
        $response = Helper::pricelist();

        $order_id = \Illuminate\Support\Str::random(8);
        $customer = Http::post('https://api.digiflazz.com/v1/transaction', [
            'commands' => 'inq-pasca',
            'customer_no' => $request['customer_no'],
            'buyer_sku_code' => 'pln',
            'username' => Helper::api()->digiflazz_username,
            'ref_id' => $order_id,
            'sign' => md5(Helper::api()->digiflazz_username.Helper::api()->digiflazz_key.$order_id),
        ]);

//        dd($customer->object()->data);

//        return Inertia::render('Payment/Info', [
//            'transaction' => $customer->object()->data,
//        ]);

        if ($customer->successful()) {
            return Inertia::render('Product/Pln/Postpaid/CreateEdit', [
                'users' => auth()->user(),
                'customer' => $customer->object(),
//                'response'  => Inertia::lazy(fn () => $response->object()),
                'fee' => Helper::api()->fees,
            ]);

        } else {
            return Inertia::render('Payment/Info', [
                'transaction' => $customer->object()->data,
            ]);
        }
    }

}
