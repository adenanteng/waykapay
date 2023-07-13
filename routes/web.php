<?php

use App\Http\Controllers\AppSettingController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DepositController;
use App\Http\Controllers\HistoryController;
use App\Http\Controllers\LandingController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [LandingController::class, 'welcome'])->name('landing.welcome');

Route::middleware(['auth:sanctum', config('jetstream.auth_session'), 'verified',])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    Route::get('/deposit', [DepositController::class, 'index'])->name('deposit.index');
    Route::post('/deposit', [DepositController::class, 'create'])->name('deposit.create');
    Route::post('/deposit/confirm', [DepositController::class, 'confirm'])->name('deposit.confirm');

    Route::get('/payment/finish', [DepositController::class, 'finish'])->name('deposit.finish');
    Route::get('/payment/unfinish', [DepositController::class, 'unfinish'])->name('deposit.unfinish');
    Route::get('/payment/error', [DepositController::class, 'error'])->name('deposit.error');

    Route::resource('/history', HistoryController::class)->names('history');

    Route::get('/profile', function () {return Inertia::render('Profile/Index');})->name('profile.index');

    Route::get('/product/pulsa', [ProductController::class, 'pulsa'])->name('product.pulsa');
    Route::get('/product/games', [ProductController::class, 'games'])->name('product.games');

    Route::resource('/user', UserController::class)->names('user');
    Route::post('/users/reset-password/{user}', [UserController::class, 'resetPassword'])->name('user.passwordReset');

    Route::resource('/setting', AppSettingController::class)->names('setting');
});
