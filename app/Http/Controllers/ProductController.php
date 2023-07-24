<?php

namespace App\Http\Controllers;

use App\Helpers\Helper;
use App\Models\Transaction;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\RedirectResponse
     */
    public function topup(Request $request)
    {
//        dd($request->all());
        $order_id = "tp-".$request['user_id']."-".\Illuminate\Support\Str::random(8);

        $response = Http::post('https://api.digiflazz.com/v1/transaction', [
            'username' => Helper::api()->digiflazz_username,
            'buyer_sku_code' => $request['sku'],
            'customer_no' => $request['customer_no'],
            'ref_id' => $order_id,
            'sign' => md5(Helper::api()->digiflazz_username.Helper::api()->digiflazz_key.$order_id),
            'testing' => true
        ]);

//        dd($response->object());

        if ($response->successful()) {
            $user = User::where('id', $request['user_id'])->first();

            $status = Http::post('https://api.digiflazz.com/v1/transaction', [
                'commands' => 'status-pasca',
                'username' => Helper::api()->digiflazz_username,
                'buyer_sku_code' => $request['sku'],
                'customer_no' => $request['customer_no'],
                'ref_id' => $order_id,
                'sign' => md5(Helper::api()->digiflazz_username.Helper::api()->digiflazz_key.$order_id),
                'testing' => true
            ]);

            switch($status->object()->data->status) {
                case ('Sukses'):
//                    $user->withdraw($request['amount']);
                    $status_id = Transaction::SUCCESS;
                    session()->flash('flash.banner', 'Topup ' . $request['product_name'] . ' berhasil!');
                    session()->flash('flash.bannerStyle', 'success');
                    break;

                case ('Pending'):
                    $status_id = Transaction::PENDING;
                    session()->flash('flash.banner', 'Topup pending!');
                    session()->flash('flash.bannerStyle', 'danger');
                    break;

                default:
                    $status_id = Transaction::UNDEFINED;
                    session()->flash('flash.banner', 'Gatau lagi kami!');
                    session()->flash('flash.bannerStyle', 'danger');
            }

            $transaction = Transaction::create([
                'token' => '-',
                'sku' => $request['sku'],
                'order_id' => $order_id,
                'product_name' => $request['product_name'],
                'customer_no' => $request['customer_no'],
                'user_id' => $request['user_id'],
                'status_id' => $status_id,
                'category_id' => Transaction::GAMES,
                'amount' => $request['amount'],
            ]);

            $user->withdraw($transaction->amount);

//            dd($transaction->toArray());

            return to_route('dashboard');

//        return Inertia::render('Product/Games/Show', [
//            'users' => auth()->user(),
//            'response'  => $response->object(),
//        ]);

        } else {
            dd($response->status());
        }
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function pulsa()
    {
        $response = Http::post('https://api.digiflazz.com/v1/price-list', [
            'cmd' => 'prepaid',
            'username' => Helper::api()->digiflazz_username,
            'sign'  => md5(Helper::api()->digiflazz_username.Helper::api()->digiflazz_key.'pricelist')
        ]);

        if ($response->successful()) {
            return Inertia::render('Product/Pulsa/Index', [
                'users' => auth()->user(),
                'response'  => $response->object(),
            ]);

        } else {
            dd($response->status());
        }
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function games()
    {
//        $response = Http::post('https://api.digiflazz.com/v1/price-list', [
//            'cmd' => 'prepaid',
//            'username' => Helper::api()->digiflazz_username,
//            'sign'  => Hash::make(Helper::api()->digiflazz_username.Helper::api()->digiflazz_key.'pricelist')
//        ]);

//        if ($response->successful()) {
            return Inertia::render('Product/Games/Index', [
                'users' => auth()->user(),
//                'response'  => $response->object(),
            ]);

//        } else {
//            dd($response->status());
//        }
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function gamePubgm()
    {
        $response = Http::post('https://api.digiflazz.com/v1/price-list', [
            'cmd' => 'prepaid',
            'username' => Helper::api()->digiflazz_username,
            'sign'  => md5(Helper::api()->digiflazz_username.Helper::api()->digiflazz_key.'pricelist')
        ]);

        if ($response->successful()) {
            return Inertia::render('Product/Games/Pubgm', [
                'users' => auth()->user(),
                'response'  => $response->object(),
            ]);

        } else {
            dd($response->status());
        }
    }
}
