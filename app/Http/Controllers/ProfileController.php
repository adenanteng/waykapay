<?php

namespace App\Http\Controllers;

use App\Helpers\Helper;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProfileController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        $history = Transaction::where('user_id', auth()->user()->id)->latest()->get();

        return Inertia::render('Profile/Index', [
            'users' => auth()->user(),
//            'history' => $history,
            'in_count' => $history->where('category_id', 1)->where('status_id', 1)->sum('amount'),
            'out_count' => $history->where('category_id', '!=', 1)->where('status_id', 1)->sum('gross_amount'),
            'flip_saldo' => Helper::flip_saldo(),
            'digiflazz_saldo' => Helper::digiflazz_saldo(),
        ]);
    }
}
