<?php

namespace App\Http\Middleware;

use App\Models\User;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class GodOnly
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if(auth()->check()){
            if (auth()->user()->role_id == User::SUPERADMIN) {
                return $next($request);
            }
        }

        session()->flash('flash.banner', 'Gak boleh!');
        session()->flash('flash.bannerStyle', 'danger');
        return redirect()->route('dashboard');
    }
}
