<?php

namespace App\Http\Controllers;

use App\Helpers\Helper;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Validator;
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

        return Inertia::render('MoneyTransfer/CreateEdit', [
            'users' => auth()->user(),
            'bank' => $request['bank'],
            'account_no' => $request['account_no']
        ]);
    }

    public function confirm(Request $request)
    {
//        dd($request->toArray());
        $idempotency_key = "mt-".auth()->user()->id."-".\Illuminate\Support\Str::random(8);

        $response = Http::withHeaders([
            'Accept' => 'application/json',
            'Content-Type' => 'application/json',
            'Authorization' => 'Basic ' . base64_encode(Helper::api()->flip_secret . ':'),
            'idempotency-key' => $idempotency_key
        ])->post('https://bigflip.id/big_sandbox_api/v3/special-disbursement',
            [
                "account_number" => $request['account_no'],
                "bank_code" => $request['bank']['name'],
                "amount" => $request['amount'],
                "remark" => "coba dulu ya",
                "sender_country" => "100252",
                "sender_name" => auth()->user()->name,
                "sender_address" => "Baradatu",
                "sender_job" => "others",
                "direction" => "DOMESTIC_SPECIAL_TRANSFER",
            ],
        );

        if ($response->successful()) {
            dd($response->object());
        }
    }
}
