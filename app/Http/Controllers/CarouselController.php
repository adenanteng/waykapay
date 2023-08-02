<?php

namespace App\Http\Controllers;

use App\Models\carousel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class CarouselController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        return Inertia::render('Carousel/Index', [
            'carousel' => carousel::all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        return Inertia::render('Carousel/Show', [

        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(Request $request)
    {
        Validator::make($request->toArray(), [
            'href' => ['required', 'string', 'max:255'],
            'photo' => ['required'],
        ])->validateWithBag('storeInformation');

        $carousel = carousel::create($request->all());
        $carousel->addMedia($request['photo'])->toMediaCollection();

        return Redirect::route('carousel.index');

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\carousel  $carousel
     * @return \Inertia\Response
     */
    public function show(carousel $carousel)
    {
//        return Inertia::render('Carousel/Show', [
//            'carousel' => $carousel
//        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\carousel  $carousel
     * @return \Inertia\Response
     */
    public function edit(carousel $carousel)
    {
        return Inertia::render('Carousel/Show', [
            'carousel' => $carousel
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\carousel  $carousel
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(Request $request, carousel $carousel)
    {
//        dd($request->all(), $carousel->toArray());
        $carousel->update($request->all());

        return Redirect::route('carousel.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\carousel  $carousel
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(carousel $carousel)
    {
//        dd($carousel->toArray());
//        $carousel->deleteMedia(0);
        $carousel->delete();

        return Redirect::route('carousel.index');
    }
}
