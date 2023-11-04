<?php

namespace App\Http\Controllers;

use App\Helpers\Helper;
use App\Models\Transaction;
use App\Models\TransactionMoneyTransfer;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
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
            'account_no' => ['required', 'integer'],
        ])->validateWithBag('storeInformation');

        $to = User::where('slug', $request['account_no'])->first();

        if ($to && $to->id != auth()->user()->id) {
            $users = $to;
        } else {
            dd('Nomor rekening tidak valid');
        }

        return Inertia::render('MoneyTransfer/CreateEdit', [
            'users' => $users,
            'bank' => $request['bank'],
            'account_no' => $request['account_no']
        ]);
    }

    public function confirm(Request $request)
    {
//        dd($request->toArray());
        $to = User::where('slug', $request['account_no'])->first();
        $user = auth()->user();

        $transaction = Transaction::create([
            'sku' => '-',
            'order_id' => strtolower(Str::random(8)),
            'product_name' => 'Transfer',
            'customer_no' => '-',
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
            'to_name' => null,
            'to_number' => null,
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

        return to_route('history.show', $transaction->order_id);
    }
}
