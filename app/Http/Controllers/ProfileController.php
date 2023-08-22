<?php

namespace App\Http\Controllers;

use App\Helpers\Helper;
use App\Models\Transaction;
use App\Models\User;
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

        if (auth()->user()->role_id == User::USER) {
            $flip_saldo = 0;
            $digiflazz_saldo = 0;
        } else {
            $flip_saldo = Helper::flip_saldo();
            $digiflazz_saldo = Helper::digiflazz_saldo();
        }

        return Inertia::render('Profile/Index', [
            'users' => auth()->user(),
//            'history' => $history,
            'in_count' => $history->where('category_id', 1)->where('status_id', 1)->sum('amount'),
            'out_count' => $history->where('category_id', '!=', 1)->where('status_id', 1)->sum('gross_amount'),
            'flip_saldo' => $flip_saldo,
            'digiflazz_saldo' => $digiflazz_saldo,
        ]);
    }
}
