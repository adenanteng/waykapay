<?php

namespace App\Http\Controllers;

use App\Models\Device;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class DeviceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Device/Index', []);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store()
    {
        $device = Device::where('user_id', auth()->user()->id)->first();

//        if ($device) {
////            dd('check');
//        } else {
////            Device::create([
////                'user_id' => auth()->user()->id
////            ]);
////            dd('chock');
//        }

//        session()->flash('flash.banner', 'Notifikasi perangkat!');
        return Inertia::render('Device/Index', []);
//        return to_route('profile.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Device $device)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Device $device)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Device $device)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Device $device)
    {
        //
    }

    public function subscribe()
    {
        $admin = User::where('category_id', User::SUPERADMIN)->get();
        $user = User::where('device_token', '!=', null)->get();

        foreach ($admin as $item) {
            $response = Http::post('https://api.pushy.me/topics/subscribe?api_key=c6c48c9d9c6de34d676a6ba63ca60d8fd6437b970e2f82facb9c6540918b6dd0', [
                'token' => $item->device_token,
                'topics' => [
                    'admin',
                    'user'
                ],
            ]);

        }

        foreach ($user as $item) {
            $response = Http::post('https://api.pushy.me/topics/subscribe?api_key=c6c48c9d9c6de34d676a6ba63ca60d8fd6437b970e2f82facb9c6540918b6dd0', [
                'token' => $item->device_token,
                'topics' => [
                    'user'
                ],
            ]);

        }
    }
}
