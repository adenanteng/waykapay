<?php

namespace App\Http\Controllers;

use App\Helpers\Helper;
use App\Models\AppSetting;
use App\Models\TransactionCustomer;
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

//        $test = TransactionCustomer::where('user_id', auth()->user()->id)
//            ->where('brand', ['OVO', 'TELKOMSEL', 'TRI'])->select(['customer_name', 'customer_no'])->get()->toArray();
//        dd($test);

//        dd(Helper::transactionCustomer(['OVO', 'TELKOMSEL', 'TRI']));

        return Inertia::render('Product/Pulsa/Index', [
            'response' => Inertia::lazy(fn () => Helper::pricelist()),
            'customer_list' => Inertia::lazy(fn () => Helper::transactionCustomer(['TELKOMSEL', 'by.U', 'INDOSAT', 'TRI', 'XL', 'AXIS', 'SMARTFREN'])),
            'fee_25' => Helper::fee()->pulsa_25,
            'fee_50' => Helper::fee()->pulsa_50,
            'fee_75' => Helper::fee()->pulsa_75,
            'fee_100' => Helper::fee()->pulsa_100,
            'fee_200' => Helper::fee()->pulsa_200,
            'fee_500' => Helper::fee()->pulsa_500,
            'fee_1000' => Helper::fee()->pulsa_1000,
            'fee_max' => Helper::fee()->pulsa_max,
        ]);

    }

}
