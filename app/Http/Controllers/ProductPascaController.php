<?php

namespace App\Http\Controllers;

use App\Helpers\Helper;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class ProductPascaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function internet()
    {
        return Inertia::render('Product/PascaInternet/Index', []);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function bpjs()
    {
        return Inertia::render('Product/PascaBpjs/Index', []);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function multifinance()
    {
        return Inertia::render('Product/PascaMultifinance/Index', []);
    }
}
