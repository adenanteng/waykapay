<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class AppSetting extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'desc',
//        'midtrans_id_merchant',
//        'midtrans_client_key',
//        'midtrans_server_key',
//        'flip_secret',
//        'flip_token',
//        'flip_saldo',
        'digiflazz_username',
        'digiflazz_key',
        'digiflazz_saldo',
        'fees',

        'pulsa_25', 'pulsa_50', 'pulsa_75', 'pulsa_100', 'pulsa_200', 'pulsa_500', 'pulsa_1000', 'pulsa_max',
        'emoney_25', 'emoney_50', 'emoney_75', 'emoney_100', 'emoney_200', 'emoney_500', 'emoney_1000', 'emoney_max',
        'games_25', 'games_50', 'games_75', 'games_100', 'games_200', 'games_500', 'games_1000', 'games_max',
        'voucher_25', 'voucher_50', 'voucher_75', 'voucher_100', 'voucher_200', 'voucher_500', 'voucher_1000', 'voucher_max',
        'pln_25', 'pln_50', 'pln_75', 'pln_100', 'pln_200', 'pln_500', 'pln_1000', 'pln_max',
        'internet_25', 'internet_50', 'internet_75', 'internet_100', 'internet_200', 'internet_500', 'internet_1000', 'internet_max',
        'tv_25', 'tv_50', 'tv_75', 'tv_100', 'tv_200', 'tv_500', 'tv_1000', 'tv_max',
        'etoll_25', 'etoll_50', 'etoll_75', 'etoll_100', 'etoll_200', 'etoll_500', 'etoll_1000', 'etoll_max',

    ];

    protected $with = ['media'];

}
