<?php

namespace App\Http\Middleware;

use App\Models\User;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckPhone
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (   $request->routeIs('otp.create')
            || $request->routeIs('otp.req')
//            || $request->routeIs('organisations.store')
//            || $request->routeIs('logout')
        )
        {
            return $next($request);
        }

        if (auth()->user()->phone_verified_at == null) {
            session()->flash('flash.banner', 'Whatsapp belum tervalidasi!');
            session()->flash('flash.bannerStyle', 'danger');
            return redirect()->route('otp.create');
        }

        return $next($request);
    }
}
