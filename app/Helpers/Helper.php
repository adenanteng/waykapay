<?php

namespace App\Helpers;

use App\Models\AppSetting;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Redis;

class Helper
{
    public static function api()
    {
        if (AppSetting::first() != null) {
            return AppSetting::first();
        }
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

//        $key = 'pricelist';
//        $minutes = 60; // Waktu cache dalam menit
//
//        $data = cache()->remember($key, $minutes, function () {
//            // Logika untuk mendapatkan data dari sumbernya
//            return Http::post('https://api.digiflazz.com/v1/price-list', [
//                'cmd' => 'prepaid',
//                'username' => Helper::api()->digiflazz_username,
//                'sign'  => md5(Helper::api()->digiflazz_username.Helper::api()->digiflazz_key.'pricelist')
//            ]);
//        });

//        dd($data->toArray());

//        return response()->json($data);

//        Redis::del('pricelist');
        $cached = Redis::get('pricelist');
//        dd($cached);
        if(isset($cached)) {
//            $data = json_decode($cached, FALSE);

//            dd($cached);
            return $cached;
        }else {
            $data = Http::post('https://api.digiflazz.com/v1/price-list', [
                'cmd' => 'prepaid',
                'username' => Helper::api()->digiflazz_username,
                'sign'  => md5(Helper::api()->digiflazz_username.Helper::api()->digiflazz_key.'pricelist')
            ]);

//            if ($data->object()->data->sn) {
                Redis::set('pricelist', $data,'EX', 360);
//            }
            return $data;

//            dd($data->object());

        }
    }

    public static function fee()
    {
        if (AppSetting::first() != null) {

            return AppSetting::first();
        }
    }
}
