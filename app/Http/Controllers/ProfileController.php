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

        if (auth()->user()->role_id !== User::SUPERADMIN) {
            $ayoconnect_saldo = 0;
            $digiflazz_saldo = 0;
        } else {
            $ayoconnect_saldo = Inertia::lazy(fn () => Helper::ayoconnect_saldo());
            $digiflazz_saldo = Inertia::lazy(fn () => Helper::digiflazz_saldo());

            $app = AppSetting::first();

            if ($app) {
                $app->update([
                    'ayoconnect_saldo' => Helper::ayoconnect_saldo(),
                    'digiflazz_saldo' => Helper::digiflazz_saldo()
                ]);
            }
        }

        return Inertia::render('Profile/Index', [
            'ayoconnect_saldo' =>  $ayoconnect_saldo,
            'digiflazz_saldo' => $digiflazz_saldo,
        ]);
    }
}
