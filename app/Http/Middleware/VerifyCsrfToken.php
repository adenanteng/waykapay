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
        'webhook-midtrans',
        'webhook-digiflazz',
        'webhook-flip-accept-payment',
        'webhook-doku-accept-payment',
        'webhook-oke-connect',
    ];
}
