<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;

class VerifyCsrfToken extends Middleware
{
    /**
     * The URIs that should be excluded from CSRF verification.
     *
     * @var array<int, string>
     */
    protected $except = [
        'webhook-digiflazz',
        'webhook-oke-connect',
        'webhook-ayo-beneficiary',
        'webhook-ayo-disbursement',
        'webhook-ayo-inquiry',
        'api/v1/ayo-beneficiary',
        'api/v1/ayo-disbursement',
        'api/v1/ayo-inquiry'
//        'webhook-midtrans',
//        'webhook-flip-accept-payment',
//        'webhook-doku-accept-payment',
    ];
}
