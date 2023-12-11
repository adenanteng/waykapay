<?php

namespace App\Http\Middleware;

use App\Helpers\Helper;
use App\Models\AppSetting;
use App\Models\Page;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Defines the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
//            'appSetting' => AppSetting::get()->first(),
            'appSetting' => Helper::fee(),
//            'fee' => fn () => Helper::api()->fees,
            'digiflazz_saldo' => Helper::fee()->digiflazz_saldo ?? 0,
        ]);
    }
}
