<?php

namespace App\Http\Controllers;

use App\Helpers\Helper;
use App\Models\AppSetting;
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
//        $history = Transaction::where('user_id', auth()->user()->id)->latest()->get();

        if (auth()->user()->role_id == User::USER) {
            $flip_saldo = 0;
            $digiflazz_saldo = 0;
        } else {
            $flip_saldo = Inertia::lazy(fn () => Helper::flip_saldo());
            $digiflazz_saldo = Inertia::lazy(fn () => Helper::digiflazz_saldo());

            $app = AppSetting::first();
            $app->update([
                'flip_saldo' => $flip_saldo,
                'digiflazz_saldo' => $digiflazz_saldo
            ]);
        }

        return Inertia::render('Profile/Index', [
            'flip_saldo' =>  $flip_saldo,
            'digiflazz_saldo' => $digiflazz_saldo,
        ]);
    }
}
