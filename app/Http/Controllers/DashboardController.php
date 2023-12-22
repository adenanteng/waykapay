<?php

namespace App\Http\Controllers;

use App\Models\Carousel;
use App\Models\Otp;
use App\Models\Transaction;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
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
//        dd(Transaction::where('user_id', auth()->user()->id)->latest()->paginate(5)->toArray());
        return Inertia::render('Dashboard', [
            'history' => Inertia::lazy(fn () => Transaction::where(function($query)
                        {
                            $query->where('user_id', auth()->user()->id)
                                ->orWhereRelation('money_transfer', 'to_id', '=', auth()->user()->id);
                        })->latest()->paginate(5)),

            'carousel' => Inertia::lazy(fn () => Carousel::all()),
        ]);
    }

    public function createOtp() {
        return Inertia::render('Pin/Otp', [

        ]);
    }

    public function reqOtp() {

        $originalNumber = auth()->user()->phone;
        $countryCode = '62'; // Replace with known country code of user.
        $internationalNumber = preg_replace('/^0/', $countryCode, $originalNumber);
//        echo $internationalNumber; // Will output: +6212345678


        $key = "NI2OOUICFTWI23NNLM14";
        $number = $internationalNumber;
        $otp = rand(100000,999999);
        $text = "Kode%20OTP%20Waykapay%20anda%20adalah%20".$otp;

        $url = "https://panel.rapiwha.com/send_message.php?apikey=".$key."&number=".$number."&text=".$text;

//        dd($url);

        $curl = curl_init();

        curl_setopt_array($curl, array(
            CURLOPT_URL => $url,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 30,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "GET",
        ));

        $response = curl_exec($curl);
        $err = curl_error($curl);

        curl_close($curl);

        if ($err) {
            dd('error: '.$err);
        } else {
//            dd($response);
            session()->flash('flash.banner', 'OTP terkirim!');

            Otp::create([
                'user_id' => auth()->user()->id,
                'otp' => $otp
            ]);

//            $idk = Otp::where('user_id', auth()->user()->id);
//            if ($idk) {
//                $idk->update([
//                    'otp' => $otp
//                ]);
//
//            } else {
//                Otp::create([
//                    'user_id' => auth()->user()->id,
//                    'otp' => $otp
//                ]);
//            }

        }

    }

    public function accOtp(Request $request) {
//        dd($request->all());
        $idk = Otp::where('user_id', auth()->user()->id)->latest()->first();
//        dd($idk->otp, $request['pin']);
        if ($request['pin'] == $idk->otp) {
            $user = auth()->user();
            $user->update([
                'phone_verified_at' => Carbon::now(),
            ]);

            $idk->update([
                'status_id' => 0
            ]);

            session()->flash('flash.banner', 'Kode OTP benar!');
            return to_route('dashboard');
        } else {
            session()->flash('flash.banner', 'Kode OTP salah!');
            session()->flash('flash.bannerStyle', 'danger');
        }
    }


}
