<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PaymentController extends Controller
{
    public function success() {

        return Inertia::render('Payment/Success', []);
    }

    public function pending() {

        return to_route('dashboard');
    }

    public function error() {

        return to_route('dashboard');
    }
}
