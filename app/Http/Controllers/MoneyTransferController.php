<?php

namespace App\Http\Controllers;

use App\Helpers\Helper;
use App\Models\Transaction;
use App\Models\TransactionMoneyTransfer;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Inertia\Inertia;

class MoneyTransferController extends Controller
{
    public function index()
    {
        return Inertia::render('MoneyTransfer/Bank', [
            'users' => auth()->user(),
            'response' => null,
        ]);
    }

    public function amount(Request $request)
    {
//        dd($request->toArray());
        Validator::make($request->toArray(), [
            'bank' => ['required'],
            'account_no' => ['required'],
        ])->validateWithBag('storeInformation');

        $to = User::where('phone', $request['account_no'])->first();

        if ($to && $to->id != auth()->user()->id) {
            $users = $to;
        } else {
//            dd('Nomor rekening tidak valid');
            session()->flash('flash.banner', 'Nomor rekening tidak valid!');
            session()->flash('flash.bannerStyle', 'danger');
            return \redirect()->back();
        }

        return Inertia::render('MoneyTransfer/CreateEdit', [
            'users' => $users,
            'bank' => $request['bank'],
            'account_no' => $request['account_no']
        ]);
    }

    public function confirm(Request $request)
    {
        if (auth()->user()->pin != null) {
            Validator::make($request->toArray(), [
                'pin' => ['required'],
            ])->validateWithBag('storeInformation');

            if (!Hash::check($request['pin'], auth()->user()->pin)) {
//                dd('pin salah');
//                session()->flash('flash.banner', 'Pin tidak valid');
//                session()->flash('flash.bannerStyle', 'danger');
//                return \redirect()->back();
                return to_route('pin.wrong');
            }
        }

        $to = User::where('phone', $request['account_no'])->first();
        $user = auth()->user();

        $transaction = Transaction::create([
            'sku' => '-',
            'order_id' => strtolower(Str::random(8)),
            'product_name' => 'Kirim uang',
            'customer_no' => $to->phone,
            'user_id' => $user->id,
            'status_id' => Transaction::PENDING,
            'category_id' => Transaction::TRANSFER,
            'amount' => $request['amount'],
            'gross_amount' => $request['amount'] + $request['bank']['admin'],
            'last_amount' => $user->wallet_balance,
            'admin_fee' => $request['bank']['admin'],
            'desc' => $request['desc'],
        ]);

        $money_transfer = TransactionMoneyTransfer::create([
            'transaction_id' => $transaction->id,
            'bank_id' => $request['bank']['id'],
            'to_name' => $to->name,
            'to_number' => $to->phone,
            'to_id' => $to->id,
        ]);

        $user->withdraw($transaction->gross_amount);
        $to->deposit($transaction->amount);

        $transaction->update([
            'status_id' => Transaction::SUCCESS
        ]);

//        return Inertia::render('MoneyTransfer/Confirm', [
//            'to' => $to,
//            'users' => $user,
//            'transaction' => $transaction,
//        ]);

        if (auth()->user()->device_token) {
            $msg = array([
                'title' => 'Transfer Berhasil',
                'body' => 'Lorem ipsum dolor sit amet',
                'badge' => 1,
                'sound' => 'ping.aiff'
            ]);
            Helper::sendNotification(auth()->user()->device_token, $msg);
        }

//        return $response->object()->data->deposit;

        return Inertia::render('History/Show', [
            'history' => $transaction,
            'goBack' => false,
            'goSuccess' => true
        ]);

//        return to_route('history.show', $transaction->order_id);
    }
}
