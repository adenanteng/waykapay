<?php

namespace App\Helpers;

use App\Models\AppSetting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Redis;

class Helper
{
    public static function api()
    {
//        if (AppSetting::first() != null) {
            return AppSetting::first();
//        }

//        $cached = Redis::get('appsetting');
//
//        if(isset($cached)) {
//            return json_decode($cached, FALSE);
//        }else {
//            $data = AppSetting::first();
//            Redis::set('appsetting', $data,'EX', 360);
//            return json_decode($data, FALSE);
//        }
    }

//    public static function flip_saldo()
//    {
//        $response = Http::withHeaders([
//            'Content-Type' => 'application/x-www-form-urlencoded',
//            'Authorization' => 'Basic ' . base64_encode(Helper::api()->flip_secret . ':')
//        ])->get('https://bigflip.id/big_sandbox_api/v2/general/balance');
//
//        return $response->object()->balance;
//    }

    public static function digiflazz_saldo()
    {
        $response = Http::post('https://api.digiflazz.com/v1/cek-saldo', [
            'cmd' => 'deposit',
            'username' => Helper::api()->digiflazz_username,
            'sign'  => md5(Helper::api()->digiflazz_username.Helper::api()->digiflazz_key.'depo')
        ]);

        return $response->object()->data->deposit;
    }

    public static function update_digiflazz_saldo($saldo)
    {
         $app = AppSetting::all()->first();
         $app->update([
            'digiflazz_saldo' => $saldo
         ]);

         return true;
    }

    public static function pricelist()
    {
//        Redis::del('pricelist');
        $cached = Redis::get('pricelist');

        if(isset($cached)) {
//            dd(json_decode($cached));
            return json_decode($cached, FALSE);
        }else {
            $data = Http::post('https://api.digiflazz.com/v1/price-list', [
                'cmd' => 'prepaid',
                'username' => Helper::api()->digiflazz_username,
                'sign'  => md5(Helper::api()->digiflazz_username.Helper::api()->digiflazz_key.'pricelist')
            ]);

//            dd($data->status());
            Redis::set('pricelist', $data,'EX', 360);
//            $cached = Redis::get('pricelist');

//            dd(json_decode($data));
            return json_decode($data, FALSE);

        }
    }

    public static function fee()
    {
        //        Redis::del('pricelist');
        $cached = Redis::get('appsetting');

        if(isset($cached)) {
            return json_decode($cached, FALSE);
        }else {
            $data = AppSetting::first();
            Redis::set('appsetting', $data,'EX', 360);
            return json_decode($data, FALSE);
        }
    }

    public static function delRedis()
    {
        Redis::del('pricelist');
        Redis::del('appsetting');
    }

    public static function sendNotification()
    {
//        $firebaseToken = User::whereNotNull('device_token')->pluck('device_token')->all();
        $firebaseToken = 'xTlVto47Edh2vjjKZMXlFa0gSrp2';

        $SERVER_API_KEY = env('FCM_SERVER_KEY');

        $data = [
            "registration_ids" => $firebaseToken,
            "notification" => [
                "title" => 'Hello World',
                "body" => 'Lorem ipsum',
            ]
        ];
        $dataString = json_encode($data);

        $headers = [
            'Authorization: key=' . $SERVER_API_KEY,
            'Content-Type: application/json',
        ];

        $ch = curl_init();

        curl_setopt($ch, CURLOPT_URL, 'https://fcm.googleapis.com/fcm/send');
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $dataString);

        $response = curl_exec($ch);

//        return back()->with('success', 'Notification send successfully.');
//        return true;
        dd($response);
    }
}
