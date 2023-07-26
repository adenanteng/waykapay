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
        'exp_time'
    ];

    const BCA = 1;
    const BNI = 2;
    const BRI = 3;
    const BANK = [
        self::BCA => 'bca',
        self::BNI => 'bni',
        self::BRI  => 'bri',
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
