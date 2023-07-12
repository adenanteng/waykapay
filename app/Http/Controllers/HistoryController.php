<?php

namespace App\Http\Controllers;

use App\Helpers\Helper;
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
//        dd(Transaction::where('id', $id)->first()->toArray());

        $transaction = Transaction::where('id', $id)->first();
        $user = User::where('id', $transaction->user_id)->first();

        $response = Http::withHeaders([
            'Accept' => 'application/json',
            'Content-Type' => 'application/json',
            'Authorization' => 'Basic '.base64_encode(Helper::api()->midtrans_server_key.':')
        ])->get('https://api.sandbox.midtrans.com/v2/'.$transaction->order_id.'/status');

//        dd($response->object()->transaction_status);
        if ($response->object()->transaction_status == 'settlement') {
            $status_id = Transaction::SUCCESS;
            $user->deposit($transaction->amount);

        } elseif ($response->object()->transaction_status == 'capture') {
            $status_id = Transaction::SUCCESS;
            $user->deposit($transaction->amount);

        } elseif ($response->object()->transaction_status == 'pending') {
            $status_id = Transaction::PENDING;
        } elseif ($response->object()->transaction_status == 'cancel') {
            $status_id = Transaction::CANCEL;
        } elseif ($response->object()->transaction_status == 'deny') {
            $status_id = Transaction::ERROR;
        } elseif ($response->object()->transaction_status == 'expired') {
            $status_id = Transaction::ERROR;
        } else {
            $status_id = Transaction::UNDEFINED;
        }

        $transaction->update([
            'status_id'     => $status_id,
        ]);

        return to_route('history.index');
    }


}
