<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class TransactionPasca extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'transaction_id',
        'lembar_tagihan',
        'tarif',
        'daya',
        'jumlah_peserta',
        'item_name',
        'no_pol',
        'tahun_pajak',
        'kab_kota',
        'kode_iuran',
        'kode_program',
        'kantor_cabang',
        'tgl_efektif',
        'tgl_expired'
    ];

    protected $with = [
        'detail',
    ];

    public function detail(): HasMany
    {
        return $this->hasMany(TransactionPascaDetail::class, 'pasca_id', 'id');
    }
}
