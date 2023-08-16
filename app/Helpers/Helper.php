<?php

namespace App\Helpers;

use App\Models\AppSetting;
use Illuminate\Support\Facades\Http;

class Helper
{
    public static function api()
    {
        if (AppSetting::first() != null) {
            return AppSetting::all()->first();
        }
    }

    public static function pricelist()
    {
        return Http::post('https://api.digiflazz.com/v1/price-list', [
            'cmd' => 'prepaid',
            'username' => Helper::api()->digiflazz_username,
            'sign'  => md5(Helper::api()->digiflazz_username.Helper::api()->digiflazz_key.'pricelist')
        ]);
    }
}
