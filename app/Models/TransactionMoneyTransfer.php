<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class TransactionMoneyTransfer extends Model
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
        'to_name',
        'to_number',
        'to_id'
    ];

    const WKP = 1;
    const BCA = 2;
    const BNI = 3;
    const BRI = 4;
    const MANDIRI = 5;
    const PERMATA = 6;
    const BSM = 7;
    const BANK = [
        self::WKP => 'Waykapay',
        self::BCA => 'BCA',
        self::BNI => 'BNI',
        self::BRI => 'BRI',
        self::MANDIRI => 'Mandiri',
        self::PERMATA => 'Permata',
        self::BSM => 'BSI',
    ];

    const PROCESSING = 0;
    const SUCCESS = 1;
    const REFUNDED = 2;
    const CANCELED = 3;
    const FAILED = 4;
    const DISBURSEMENT_STATUS = [
        self::PROCESSING => 'Proses',
        self::SUCCESS => 'Sukses',
        self::REFUNDED => 'Refund',
        self::CANCELED => 'Batal',
        self::FAILED => 'Gagal',
    ];

    protected $with = [
        'to'
    ];

    protected $appends = [
        'bank'
    ];

    public function getBankAttribute(): string
    {
        return self::BANK[$this->bank_id];
    }

    public function transaction(): BelongsTo
    {
        return $this->belongsTo(Transaction::class, 'transaction_id', 'id');
    }

    public function to(): BelongsTo
    {
        return $this->belongsTo(User::class, 'to_id', 'id');
    }
}
