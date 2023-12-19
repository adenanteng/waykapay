<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class TransactionBankTransfer extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'transaction_id',
        'bank_id',
        'va_number',
        'payment_url',
        'exp_time'
    ];

    const BCA = 1;
    const BNI = 2;
    const BRI = 3;
    const MANDIRI = 4;
    const PERMATA = 5;
    const BSM = 6;
    const QRIS = 7;
    const OVO = 8;
    const SHOPEEPAY = 9;
    const LINKAJA = 10;
    const DANA = 11;
    const ALFAMART = 13;
    const INDOMARET = 14;
    const MANUAL_BCA = 15;
    const MANUAL_BRI = 16;
    const BANK = [
        self::BCA => 'VA BCA',
        self::BNI => 'VA BNI',
        self::BRI  => 'VA BRI',
        self::MANDIRI => 'VA MANDIRI',
        self::PERMATA => 'VA PERMATA',
        self::BSM  => 'VA BSI',
        self::QRIS => 'QRIS',
        self::OVO => 'OVO',
        self::SHOPEEPAY  => 'SHOPEEPAY',
        self::LINKAJA => 'LINKAJA',
        self::DANA => 'DANA',
        self::ALFAMART => 'Alfamart',
        self::INDOMARET => 'Indomaret',
        self::MANUAL_BCA => 'Transfer BCA',
        self::MANUAL_BRI => 'Transfer BRI'
    ];

    protected $appends = [
        'bank',
    ];

    public function getBankAttribute(): string
    {
        return self::BANK[$this->bank_id];
    }

    public function transaction(): BelongsTo
    {
        return $this->belongsTo(Transaction::class, 'transaction_id', 'id');
    }
}
