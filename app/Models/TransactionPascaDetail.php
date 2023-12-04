<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TransactionPascaDetail extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'pasca_id',
        'periode',
        'nilai_tagihan',
        'meter_awal',
        'meter_akhir',
        'admin',
        'denda',
        'biaya_lain'
    ];
}
