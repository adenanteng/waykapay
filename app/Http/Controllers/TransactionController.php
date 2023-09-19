<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TransactionController extends Controller
{
    public function index() {
//        dd(Transaction::all());
        return Inertia::render('Transaction/Index', [
            'transaction' => Inertia::lazy(fn () => Transaction::latest()->get())
        ]);
    }
}
