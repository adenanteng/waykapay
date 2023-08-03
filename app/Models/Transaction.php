<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Transaction extends Model
{
    use HasFactory;
//    use HasUuids;

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'sku',
        'order_id',
        'product_name',
        'customer_no',
        'user_id',
        'status_id',
        'category_id',
        'amount',
        'gross_amount',
        'last_amount',
        'admin_fee',
        'desc',
    ];

    const SUCCESS = 1;
    const PENDING = 2;
    const CANCEL = 3;
    const DENY = 4;
    const EXPIRE = 5;
    const ERROR = 6;
    const CLOSE = 7;
    const UNDEFINED = 8;
    const STATUS = [
        self::SUCCESS => 'Sukses',
        self::PENDING => 'Pending',
        self::CANCEL => 'Batal',
        self::DENY => 'Ditolak',
        self::EXPIRE => 'Kadaluarsa',
        self::ERROR =>  'Gagal',
        self::CLOSE => 'Keluar',
        self::UNDEFINED => 'Undefined',
    ];

    const DEPOSIT = 1;
    const PULSA = 2;
    const DATA = 3;
    const GAMES = 4;
    const PLN = 5;
    const EMONEY = 6;

    const CATEGORY = [
        self::DEPOSIT => 'Deposit',
        self::PULSA => 'Pulsa',
        self::DATA  => 'Data',
        self::GAMES => 'Games',
        self::PLN   => 'PLN',
        self::EMONEY => 'E-Money'
    ];

    const BANKTRANSFER = 1;
    const GOPAY = 2;
    const SHOPEEPAY = 3;
    const QRIS = 4;
    const ADMINFEE = [
        self::BANKTRANSFER => 4000,
        self::GOPAY => 2,
        self::SHOPEEPAY  => 2,
        self::QRIS => 0.7,
    ];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = [
        'created',
//        'user',
        'status',
        'category'
    ];

    protected $with = [
        'user',
        'bank',
        'gopay'
    ];

    public function getCreatedAttribute()
    {
        return date('d M Y', strtotime($this->created_at));
    }

//    public function getUserAttribute(): string
//    {
//        return User::where('id', $this->user_id)->first();
//    }

    public function getStatusAttribute(): string
    {
        return self::STATUS[$this->status_id];
    }

    public function getCategoryAttribute(): string
    {
        return self::CATEGORY[$this->category_id];
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function bank(): HasOne
    {
        return $this->hasOne(TransactionBankTransfer::class, 'transaction_id', 'id');
    }

    public function gopay(): HasOne
    {
        return $this->hasOne(TransactionGopay::class, 'transaction_id', 'id');
    }
}
