<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use Psy\Util\Str;
use Stephenjude\Wallet\Exceptions\InsufficientFundException;

class HistoryController extends Controller
{
    public function index() {
//        dd(Transaction::where('user_id', auth()->user()->id)->get());
        return Inertia::render('History/Index', [
            'users' => auth()->user(),
            'history' => Transaction::where('user_id', auth()->user()->id)->latest()->get(),
        ]);
    }

    public function show($id) {
        dd(Transaction::where('id', $id)->first()->toArray());
    }


}
