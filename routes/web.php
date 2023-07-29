<?php

use App\Http\Controllers\AppSettingController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DepositController;
use App\Http\Controllers\HistoryController;
use App\Http\Controllers\InformationController;
use App\Http\Controllers\LandingController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\WebHookController;
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

Route::post('/webhook-midtrans', [WebHookController::class, 'webhookHandlerMidtrans']);
Route::post('/webhook-digiflazz', [WebHookController::class, 'webhookHandlerDigiflazz']);

Route::middleware(['auth:sanctum', config('jetstream.auth_session'), 'verified',])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    Route::get('/deposit', [DepositController::class, 'index'])->name('deposit.index');
    Route::post('/deposit/method', [DepositController::class, 'method'])->name('deposit.method');
    Route::post('/deposit', [DepositController::class, 'create'])->name('deposit.create');
    Route::post('/deposit/confirm', [DepositController::class, 'confirm'])->name('deposit.confirm');

    Route::get('/payment/success', [PaymentController::class, 'success'])->name('payment.success');

    Route::resource('/history', HistoryController::class)->names('history');
//    Route::post('/history/confirm', [HistoryController::class, 'confirm'])->name('history.confirm');

    Route::get('/profile', function () {return Inertia::render('Profile/Index');})->name('profile.index');

    Route::post('/product/topup', [ProductController::class, 'topup'])->name('product.topup');
    Route::get('/product/pulsa', [ProductController::class, 'pulsa'])->name('product.pulsa');

    Route::get('/product/pln', [ProductController::class, 'pln'])->name('product.pln');
    Route::post('/product/pln-inquiry', [ProductController::class, 'plnInquiry'])->name('product.plnInquiry');

    Route::get('/product/games', [ProductController::class, 'games'])->name('product.games');
    Route::get('/product/game/pubgm', [ProductController::class, 'gamePubgm'])->name('product.gamePubgm');
    Route::get('/product/game/mobilelegends', [ProductController::class, 'gameML'])->name('product.gameML');

    Route::resource('/information', InformationController::class)->names('information');

    Route::resource('/user', UserController::class)->names('user');
    Route::post('/users/reset-password/{user}', [UserController::class, 'resetPassword'])->name('user.passwordReset');

    Route::resource('/setting', AppSettingController::class)->names('setting');
});
