<?php

namespace App\Http\Controllers;

use App\Helpers\Helper;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class ProductInternetController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        return Inertia::render('Product/Internet/Index', [
//            'users' => auth()->user(),
        ]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function indihome()
    {
        return Inertia::render('Product/Internet/Indihome/Index');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function indihomeInquiry(Request $request)
    {
//        dd($request->all());
        $user = auth()->user();

        $order_id = "post-".$user['id']."-".\Illuminate\Support\Str::random(8);
        $customer = Http::post('https://api.digiflazz.com/v1/transaction', [
            'commands' => 'inq-pasca',
            'customer_no' => $request['customer_no'],
            'buyer_sku_code' => 'net-indihome',
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
//                'response'  => Inertia::lazy(fn () => $response->object()),
//                'fee' => Helper::api()->fees,
//            ]);
//
//        } else {
//            dd($customer->status());
//        }
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function myrepublic()
    {
        return Inertia::render('Product/Internet/Myrepublic/Index');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function myrepublicInquiry(Request $request)
    {
//        dd($request->all());
        $user = auth()->user();

        $order_id = "post-".$user['id']."-".\Illuminate\Support\Str::random(8);
        $customer = Http::post('https://api.digiflazz.com/v1/transaction', [
            'commands' => 'inq-pasca',
            'customer_no' => $request['customer_no'],
            'buyer_sku_code' => 'net-myrepublic',
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
//                'response'  => Inertia::lazy(fn () => $response->object()),
//                'fee' => Helper::api()->fees,
//            ]);
//
//        } else {
//            dd($customer->status());
//        }
    }
}
