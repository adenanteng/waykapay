<?php

namespace App\Helpers;

use App\Models\AppSetting;

class Helper
{
    public static function api()
    {
        if (AppSetting::first() != null) {
            return AppSetting::all()->first();
        }
    }

}
