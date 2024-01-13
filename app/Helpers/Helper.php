<?php

namespace App\Helpers;

use App\Models\AppSetting;
use App\Models\TransactionCustomer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Redis;
use Pusher\Pusher;
use Pusher\PusherException;

class Helper
{
    public static function api()
    {
//        if (AppSetting::first() != null) {
//            return AppSetting::first();
//        }

        $cached = Redis::get('appsetting');

        if(isset($cached)) {
            return json_decode($cached, FALSE);
        }else {
            $data = AppSetting::first();
            Redis::set('appsetting', $data,'EX', 600);
            return json_decode($data, FALSE);
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
            Redis::set('pricelist', $data,'EX', 600);
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
            'data' => [
                'message' => $msg['title'],
            ],
            'notification'  => [
                'title' => $msg['title'],
                'body' => $msg['body'],
                'badge' => 1,
                'sound' => 'ping.aiff'
            ]
        ];

//        dd($token, $msg, json_encode($array));

        $response = Http::post('https://api.pushy.me/push?api_key=c6c48c9d9c6de34d676a6ba63ca60d8fd6437b970e2f82facb9c6540918b6dd0', [
            $array,
        ]);
    }

    public static function sendUserNotification($msg)
    {
        $array = [
            'to' => '/topics/user',
            'data' => [
                'message' => $msg['title'],
            ],
            'notification'  => [
                'title' => $msg['title'],
                'body' => $msg['body'],
                'badge' => 1,
                'sound' => 'ping.aiff'
            ]
        ];

//        dd($token, $msg, json_encode($array));

        $response = Http::post('https://api.pushy.me/push?api_key=c6c48c9d9c6de34d676a6ba63ca60d8fd6437b970e2f82facb9c6540918b6dd0', [
            $array,
        ]);
    }

    public static function phoneFormat($phoneNumber) {
        //Terlebih dahulu kita trim dl
        $phoneNumber = trim($phoneNumber);
        //bersihkan dari karakter yang tidak perlu
        $phoneNumber = strip_tags($phoneNumber);
        // Berishkan dari spasi
        $phoneNumber= str_replace(" ","",$phoneNumber);
        // bersihkan dari bentuk seperti  (022) 66677788
        $phoneNumber= str_replace("(","",$phoneNumber);
        // bersihkan dari format yang ada titik seperti 0811.222.333.4
        $phoneNumber= str_replace(".","",$phoneNumber);

        //cek apakah mengandung karakter + dan 0-9
        if(!preg_match('/[^+0-9]/',trim($phoneNumber))){
            // cek apakah no hp karakter 1-3 adalah +62
            if(substr(trim($phoneNumber), 0, 2)=='62'){
                $phoneNumber= trim($phoneNumber);
            }
            // cek apakah no hp karakter 1 adalah 0
            elseif(substr($phoneNumber, 0, 1)=='0'){
                $phoneNumber= '62'.substr($phoneNumber, 1);
            }
        }
        return $phoneNumber;
    }

    /**
     * @throws PusherException
     */
    public static function pusher() {
        return new Pusher(
            "e4c42e8e3951c6ee37f6",
            "6fbcf5dc9a409d3ae337",
            "1696509",
            array('cluster' => 'ap1')
        );
    }

    public static function transactionCustomer($brand) {
        return TransactionCustomer::where('user_id', auth()->user()->id)->whereIn('brand', $brand)->select(['customer_name', 'customer_no', 'brand'])->get()->toArray();
    }
}
