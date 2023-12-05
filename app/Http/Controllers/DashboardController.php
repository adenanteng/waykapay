<?php

namespace App\Http\Controllers;

use App\Models\Carousel;
use App\Models\Transaction;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use Otpless\OTPLessAuth;
use Psy\Util\Str;
use Stephenjude\Wallet\Exceptions\InsufficientFundException;

class DashboardController extends Controller
{
    public function index() {
//        dd(Transaction::where('user_id', auth()->user()->id)->get());
//        dd(Carousel::all()->toArray());
        return Inertia::render('Dashboard', [
            'users' => auth()->user(),
            'carousel' => Carousel::all(),
        ]);
    }

    public function createOtp() {
        return Inertia::render('Pin/Otp', [

        ]);
    }

    public function reqOtp() {
        // Your ID token to decode

        $clientId = '11PUMM5B0OOP6S64C6JOIF049GMFNGXU';
        $clientSecret = '2j07p4bhipk2oz8k6mo0j7dlenjj86ri';

        $auth = new OtplessAuth();
        $token = $auth->decodeIdToken('', $clientId, $clientSecret, null);


        $data = $auth->generateMagicLink('6282372892755', auth()->user()->email, $clientId, $clientSecret, "https://waykapay.com/dashboard", null);

        return $data;
    }

    public function accOtp(Request $request) {
        dd($request->all());
    }


}
