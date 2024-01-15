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
        'brand',
        'product_name',
        'customer_no',
        'user_id',
        'status_id',
        'category_id',
        'amount',
        'gross_amount',
        'last_amount',
        'admin_fee',
        'service_fee',
        'agent_commission',
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
        self::ALL => 'Semua',
        self::SUCCESS => 'Sukses',
        self::PENDING => 'Pending',
        self::CANCEL => 'Batal',
        self::DENY => 'Ditolak',
        self::EXPIRE => 'Kadaluarsa',
        self::ERROR =>  'Gagal',
        self::CLOSE => 'Keluar',
        self::UNDEFINED => 'Undefined',
    ];

    const COLOR = [
        self::SUCCESS => 'bg-green-100 text-green-800',
        self::PENDING => 'bg-amber-100 text-amber-800',
        self::CANCEL => 'bg-red-100 text-red-800',
        self::DENY => 'bg-gray-100 text-gray-800',
        self::EXPIRE => 'bg-gray-100 text-gray-800',
        self::ERROR =>  'bg-red-100 text-red-800',
        self::CLOSE => 'bg-gray-100 text-gray-800',
        self::UNDEFINED => 'bg-gray-100 text-gray-800',
    ];

    const ALL = null;
    const TRANSFER = 99;
    const DEPOSIT = 1;
    const PULSA = 2;
    const DATA = 3;
    const GAMES = 4;
    const PLN = 5;
    const EMONEY = 6;
    const TV = 7;
    const VOUCHER = 8;
    const PASCA_PLN = 9;
    const PASCA_PDAM = 10;
    const PASCA_HP = 11;
    const PASCA_INTERNET = 12;
    const PASCA_TV = 13;
    const PASCA_BPJSK = 14;
    const PASCA_BPJSTK = 15;
    const PASCA_BPJSTKPU = 16;
    const PASCA_MULTIFINANCE = 17;
    const PASCA_PBB = 18;
    const PASCA_GASNEGARA = 19;
    const PASCA_SAMSAT = 20;
    const UNKNOWN = 90;
    const CATEGORY = [
        self::ALL => 'Semua',
        self::TRANSFER => 'Kirim Uang',
        self::DEPOSIT => 'Deposit',
        self::PULSA => 'Pulsa',
        self::DATA  => 'Data',
        self::GAMES => 'Games',
        self::PLN   => 'PLN',
        self::EMONEY => 'E-Money',
        self::TV => 'TV',
        self::VOUCHER => 'Voucher',

        self::PASCA_PLN => 'PLN Pascabayar',
//        self::PASCA_PDAM => 'Pasca PDAM',
//        self::PASCA_HP => 'Pasca HP',
        self::PASCA_INTERNET => 'Internet',
        self::PASCA_TV => 'TV Pascabayar',
        self::PASCA_BPJSK => 'BPJS Kesehatan',
        self::PASCA_BPJSTK => 'PBJS Ketenagakerjaan',
//        self::PASCA_BPJSTKPU => 'PBJS Ketenagakerjaan Penerima Upah',
        self::PASCA_MULTIFINANCE => 'Multifinance',
//        self::PASCA_PBB => 'Pasca PBB',
//        self::PASCA_GASNEGARA => 'Pasca Gas Negara',
//        self::PASCA_SAMSAT => 'Pasca Samsat',
        self::UNKNOWN => 'Tidak diketahui'
    ];

    const SEPULUH = 10;
    const LIMAPULUH = 50;
    const SERATUS = 100;
//    const SEMUA = null;
    const PAGINATE = [
        self::SEPULUH => '10',
        self::LIMAPULUH => '50',
        self::SERATUS => '100',
//        self::SEMUA => 'Semua',
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
        'color',
        'category',
    ];

    protected $with = [
        'user',
        'virtual_account',
        'wallet_account',
        'offline_account',
        'manual_account',
        'money_transfer',
        'pasca_desc'
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

    public function getColorAttribute(): string
    {
        return self::COLOR[$this->status_id];
    }

    public function getCategoryAttribute(): string
    {
        return self::CATEGORY[$this->category_id];
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function money_transfer(): HasOne
    {
        return $this->hasOne(TransactionMoneyTransfer::class, 'transaction_id', 'id');
    }
    public function virtual_account(): HasOne
    {
        return $this->hasOne(TransactionBankTransfer::class, 'transaction_id', 'id');
    }

    public function wallet_account(): HasOne
    {
        return $this->hasOne(TransactionQris::class, 'transaction_id', 'id');
    }

    public function offline_account(): HasOne
    {
        return $this->hasOne(TransactionOffline::class, 'transaction_id', 'id');
    }

    public function manual_account(): HasOne
    {
        return $this->hasOne(TransactionManualTransfer::class, 'transaction_id', 'id');
    }

    public function pasca_desc(): HasOne
    {
        return $this->hasOne(TransactionPasca::class, 'transaction_id', 'id');
    }
}
