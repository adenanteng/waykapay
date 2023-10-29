<?php

use App\Http\Controllers\AppSettingController;
use App\Http\Controllers\CarouselController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DepositController;
use App\Http\Controllers\HistoryController;
use App\Http\Controllers\InformationController;
use App\Http\Controllers\LandingController;
use App\Http\Controllers\MoneyTransferController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProductEmoneyController;
use App\Http\Controllers\ProductGamesController;
use App\Http\Controllers\ProductInternetController;
use App\Http\Controllers\ProductPlnController;
use App\Http\Controllers\ProductPulsaController;
use App\Http\Controllers\ProductTelevisionController;
use App\Http\Controllers\ProductVoucherController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TransactionController;
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

Route::post('/webhook-doku-accept-payment', [WebHookController::class, 'webhookHandlerDokuAcceptPayment']);
Route::post('/webhook-flip-accept-payment', [WebHookController::class, 'webhookHandlerFlipAcceptPayment']);
Route::post('/webhook-digiflazz', [WebHookController::class, 'webhookHandlerDigiflazz']);
Route::post('/webhook-midtrans', [WebHookController::class, 'webhookHandlerMidtrans']);

Route::middleware(['auth:sanctum', config('jetstream.auth_session'), 'verified',])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    Route::get('/deposit', [DepositController::class, 'index'])->name('deposit.index');
    Route::post('/deposit/method', [DepositController::class, 'method'])->name('deposit.method');
    Route::post('/deposit', [DepositController::class, 'create'])->name('deposit.create');
    Route::put('/deposit/confirm', [DepositController::class, 'confirm'])->name('deposit.confirm');

    Route::get('/money-transfer', [MoneyTransferController::class, 'index'])->name('money-transfer.index');
    Route::post('/money-transfer/amount', [MoneyTransferController::class, 'amount'])->name('money-transfer.amount');
    Route::post('/money-transfer/confirm', [MoneyTransferController::class, 'confirm'])->name('money-transfer.confirm');


    Route::get('/payment/success', [PaymentController::class, 'success'])->name('payment.success');

    Route::resource('/history', HistoryController::class)->names('history');

    Route::post('/product/topup', [ProductController::class, 'topup'])->name('product.topup');
    Route::post('/product/topup-pasca', [ProductController::class, 'topupPasca'])->name('product.topup.pasca');
    Route::get('/product/status', [ProductController::class, 'status'])->name('product.status');

    Route::get('/product/pulsa', [ProductPulsaController::class, 'index'])->name('pulsa.index');

    Route::get('/product/pln', [ProductPlnController::class, 'index'])->name('pln.index');
    Route::get('/product/pln-prepaid', [ProductPlnController::class, 'prepaid'])->name('pln.prepaid.index');
    Route::get('/product/pln-prepaid-inquiry', [ProductPlnController::class, 'inquiryPrepaid'])->name('pln.prepaid.inquiry');
    Route::get('/product/pln-postpaid', [ProductPlnController::class, 'postpaid'])->name('pln.postpaid.index');
    Route::get('/product/pln-postpaid-inquiry', [ProductPlnController::class, 'inquiryPostpaid'])->name('pln.postpaid.inquiry');

    Route::get('/product/games', [ProductGamesController::class, 'index'])->name('games.index');
    Route::get('/product/games/{product}', [ProductGamesController::class, 'show'])->name('games.show');

    Route::get('/product/emoney', [ProductEmoneyController::class, 'index'])->name('emoney.index');
    Route::get('/product/emoney/{product}', [ProductEmoneyController::class, 'show'])->name('emoney.show');

    Route::get('/voucher/emoney', [ProductVoucherController::class, 'index'])->name('voucher.index');
    Route::get('/voucher/emoney/{product}', [ProductVoucherController::class, 'show'])->name('voucher.show');

    Route::get('/product/television', [ProductTelevisionController::class, 'index'])->name('television.index');
    Route::get('/product/television/{product}', [ProductTelevisionController::class, 'show'])->name('television.show');
//    Route::get('/product/television/kvision', [ProductTelevisionController::class, 'kvision'])->name('television.kvision');
//    Route::get('/product/television/nex', [ProductTelevisionController::class, 'nex'])->name('television.nex');

    Route::get('/product/internet', [ProductInternetController::class, 'index'])->name('internet.index');
    Route::get('/product/internet/indihome', [ProductInternetController::class, 'indihome'])->name('internet.indihome.index');
    Route::post('/product/internet/indihome-inquiry', [ProductInternetController::class, 'indihomeInquiry'])->name('internet.indihome.inquiry');
    Route::get('/product/internet/myrepublic', [ProductInternetController::class, 'myrepublic'])->name('internet.myrepublic.index');
    Route::post('/product/internet/myrepublic-inquiry', [ProductInternetController::class, 'myrepublicInquiry'])->name('internet.myrepublic.inquiry');


    Route::resource('/information', InformationController::class)->names('information');

    Route::resource('/carousel', CarouselController::class)->names('carousel');

    Route::resource('/transaction', TransactionController::class)->names('transaction');
    Route::get('/transaction/print/{transaction}', [TransactionController::class, 'print'])->name('transaction.print');
    Route::resource('/user', UserController::class)->names('user');
    Route::post('/users/reset-password/{user}', [UserController::class, 'resetPassword'])->name('user.passwordReset');

//    Route::get('/profile', function () {return Inertia::render('Profile/Index');})->name('profile.index');

    Route::get('/profile', [ProfileController::class, 'index'])->name('profile.index');

    Route::resource('/setting', AppSettingController::class)->names('setting');
});
