<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\Gallery;
use App\Models\Page;
use App\Models\PageCta;
use App\Models\PageFeature;
use App\Models\PageFeatureDetail;
use App\Models\PageHero;
use App\Models\Trip;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;

class LandingController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function welcome(): Response
    {
        return Inertia::render('Landing/Welcome', [
//            'trip' => Trip::all()
        ]);
//        return Redirect::route('dashboard');
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function upgrade(): Response
    {
        return Inertia::render('Upgrade/Index', [
//            'trip' => Trip::all()
        ]);
    }
}
