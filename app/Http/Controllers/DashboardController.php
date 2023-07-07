<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use Psy\Util\Str;
use Stephenjude\Wallet\Exceptions\InsufficientFundException;

class DashboardController extends Controller
{
    public function index() {
//        $lastActivity = Activity::all()->last(); //returns the last logged activity
//
//        $lastActivity->getExtraProperty('user_id'); //returns 'value'
//
//        dd($lastActivity->where('properties->user_id', auth()->user()->id)->get());

        return Inertia::render('Dashboard', [
            'users' => auth()->user(),
//            'history'  =>  Activity::where('properties->user_id', auth()->user()->id)->latest()->get()->take(5)
        'history'   => null
        ]);
    }


}
