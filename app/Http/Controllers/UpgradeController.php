<?php

namespace App\Http\Controllers;

use App\Models\Upgrade;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UpgradeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Upgrade/Index', [

        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Upgrade/CreateEdit', [

        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Upgrade $upgrade)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Upgrade $upgrade)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Upgrade $upgrade)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Upgrade $upgrade)
    {
        //
    }
}
