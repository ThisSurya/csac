<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class IsAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, string ...$guards): Response
    {
        try {
            if (Auth::user()->isadmin != true) {
                return response()->json('Kamu tidak punya akses admin');
            }
        } catch (\Exception $e) {
            return redirect()->to(route('landing'));
        }


        return $next($request);
    }
}
