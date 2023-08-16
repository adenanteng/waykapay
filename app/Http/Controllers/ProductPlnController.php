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
        $response = Http::post('https://api.digiflazz.com/v1/price-list', [
            'cmd' => 'prepaid',
            'username' => Helper::api()->digiflazz_username,
            'sign'  => md5(Helper::api()->digiflazz_username.Helper::api()->digiflazz_key.'pricelist')
        ]);

        $customer = Http::post('https://api.digiflazz.com/v1/transaction', [
            'commands' => 'pln-subscribe',
            'customer_no' => $request['customer_no'],
        ]);

        if ($customer->successful()) {
            return Inertia::render('Product/Pln/Prepaid/CreateEdit', [
                'users' => auth()->user(),
                'customer' => $customer->object(),
                'response'  => $response->object(),
                'fee' => Helper::api()->fees,
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
        $response = Http::post('https://api.digiflazz.com/v1/price-list', [
            'cmd' => 'prepaid',
            'username' => Helper::api()->digiflazz_username,
            'sign'  => md5(Helper::api()->digiflazz_username.Helper::api()->digiflazz_key.'pricelist')
        ]);

        $order_id = "post-".$user['id']."-".\Illuminate\Support\Str::random(8);
        $customer = Http::post('https://api.digiflazz.com/v1/transaction', [
            'commands' => 'inq-pasca',
            'customer_no' => $request['customer_no'],
            'buyer_sku_code' => 'pln-pasca',
            'username' => Helper::api()->digiflazz_username,
            'ref_id' => $order_id,
            'sign' => md5(Helper::api()->digiflazz_username.Helper::api()->digiflazz_key.$order_id),
        ]);

//        dd($customer->object()->data);

        return Inertia::render('Payment/Info', [
            'transaction' => $customer->object()->data,
        ]);

//        if ($customer->successful()) {
//            return Inertia::render('Product/Pln/CreateEdit', [
//                'users' => auth()->user(),
//                'customer' => $customer->object(),
//                'response'  => $response->object(),
//                'fee' => Helper::api()->fees,
//            ]);
//
//        } else {
//            dd($customer->status());
//        }
    }

}
