<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class WelcomeController extends Controller
{
    public function index() {

    }

    public function blank() {
        return Inertia::render('Welcome');
    }
}
