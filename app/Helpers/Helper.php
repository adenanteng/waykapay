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

    public static function sendNotification($token, $msg)
    {

        $array = [
            'to' => $token,
            'data' => array([
                'message' => 'Waykapay',
            ]),
            'notification'  => array([
                'title' => $msg['title'],
                'body' => $msg['body'],
                'badge' => 1,
                'sound' => 'ping.aiff'
            ])
        ];

        $response = Http::post('https://api.pushy.me/push?api_key=c6c48c9d9c6de34d676a6ba63ca60d8fd6437b970e2f82facb9c6540918b6dd0', [
            json_encode($array),
        ]);


//        return back()->with('success', 'Notification send successfully.');
//        return true;
        dd($response->object(), json_encode($array));
    }
}
