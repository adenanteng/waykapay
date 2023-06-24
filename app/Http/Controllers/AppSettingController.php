<?php

namespace App\Http\Controllers;

use App\Models\AppSetting;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;

class AppSettingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        $setting = AppSetting::all()->first();

        if ($setting == null) {
            $setting = AppSetting::all();
        } else {
            $setting = AppSetting::all()->first();
        }

//        dd($setting);
        return Inertia::render('AppSetting/Show', [
            'setting' => $setting
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return Response
     */
    public function store(Request $request)
    {
        if (AppSetting::first() == null) {
            Validator::make($request->toArray(), [
                'name' => ['required', 'string', 'max:255'],
                'photo' => ['required']
            ])->validateWithBag('storeSettingInformation');

            $app = AppSetting::create($request->all());
            if ($request['photo'] != null) {
                $app->addMedia($request['photo'])->toMediaCollection();
            }
        } else {
            $setting = AppSetting::first();
            $setting->update($request->all());

            if ($request['photo'] != null) {
                $setting->clearMediaCollection();
                $setting->addMedia($request['photo'])->toMediaCollection();
            }
        }
    }

    /**
     * Display the specified resource.
     *
     * @param AppSetting $appSetting
     * @return Response
     */
    public function show(AppSetting $appSetting)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param AppSetting $appSetting
     * @return Response
     */
    public function edit(AppSetting $appSetting)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @throws ValidationException
     */

    public function update(Request $request)
    {

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param AppSetting $appSetting
     * @return Response
     */
    public function destroy(AppSetting $appSetting)
    {

    }
}
