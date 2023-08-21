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
        'fees',
//        'midtrans_id_merchant',
//        'midtrans_client_key',
//        'midtrans_server_key',
        'flip_secret',
        'flip_token',
        'flip_saldo',
        'digiflazz_username',
        'digiflazz_key',
        'digiflazz_saldo'
    ];

    protected $with = ['media'];

}
