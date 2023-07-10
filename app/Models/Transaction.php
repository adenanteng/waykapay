<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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
        'token',
        'user_id',
        'status_id',
        'category_id',
        'order_id',
        'amount',
        'desc',
    ];

    const SUCCESS = 1;
    const PENDING = 2;
    const ERROR = 3;
    const CLOSE = 4;
    const UNDEFINED = 5;
    const STATUS = [
        self::SUCCESS => 'Sukses',
        self::PENDING => 'Pending',
        self::ERROR =>  'Gagal',
        self::CLOSE => 'Tertutup',
        self::UNDEFINED => 'Undefined',
    ];

    const DEPOSIT = 1;
    const PULSA = 2;
    const DATA = 3;
    const GAMES = 4;
    const PLN = 5;
    const CATEGORY = [
        self::DEPOSIT => 'Deposit',
        self::PULSA => 'Pulsa',
        self::DATA  => 'Data',
        self::GAMES => 'Games',
        self::PLN   => 'PLN'
    ];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = [
        'created',
        'user',
        'status',
        'category'
    ];

    public function getCreatedAttribute()
    {
        return date('d M Y', strtotime($this->created_at));
    }

    public function getUserAttribute(): string
    {
        return User::where('id', $this->user_id)->first();
    }

    public function getStatusAttribute(): string
    {
        return self::STATUS[$this->status_id];
    }

    public function getCategoryAttribute(): string
    {
        return self::CATEGORY[$this->category_id];
    }
}
