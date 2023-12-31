<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Request as Req;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;
use Inertia\Response;

class PinController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
//        dd(User::latest()->paginate(20));
        return Inertia::render('Pin/Index', [
//            'users' => User::latest()->get(),
            'users' => auth()->user()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create(): Response
    {
        return Inertia::render('Pin/CreateEdit', [
//            'selectStatus' => User::STATUS,
//            'selectRole' => User::ROLE
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return RedirectResponse
     */
    public function store(Request $request): RedirectResponse
    {
//        dd($request->toArray());
        Validator::make($request->toArray(), [
            'pin' => ['required', 'numeric'],
        ])->validateWithBag('storeInformation');

        $request['pin'] = Hash::make($request['pin']);

//        dd($request->all());
        $user = auth()->user();
        $user->update($request->all());

        session()->flash('flash.banner', 'Pin berhasil dibuat!');

        return Redirect::route('dashboard', [

        ]);
    }

    public function confirmMoneyTransfer(Request $request)
    {
//        dd($request->toArray());
        return Inertia::render('Pin/MoneyTransfer', [
            'request' => $request->all()
        ]);
    }

    public function confirmTopup(Request $request)
    {
//        dd($request->toArray());
        return Inertia::render('Pin/Topup', [
            'request' => $request->all()
        ]);
    }

    public function confirmTopupPasca(Request $request)
    {
//        dd($request->toArray());
        return Inertia::render('Pin/TopupPasca', [
            'request' => $request->all()
        ]);
    }

    public function confirmManualTransfer(Request $request)
    {
//        dd(Transaction::where('order_id', $request['valid'])->first());
        return Inertia::render('Pin/ManualTransfer', [
            'request' => $request->all(),
            'history' => Transaction::where('order_id', $request['valid'])->first()
        ]);
    }

    public function wrong()
    {
//        dd($request->all());
//        return Hash::check($request['pin'], auth()->user()->pin);
        return Inertia::render('Pin/Wrong', [
//            'users' => User::latest()->get(),
//            'request' => $request->all()
        ]);
    }
}
