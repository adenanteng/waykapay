<?php

namespace App\Http\Controllers;

use App\Helpers\Helper;
use App\Models\AppSetting;
use App\Models\Transaction;
use App\Models\TransactionPasca;
use App\Models\User;
use App\Rules\PinValidationRules;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\RedirectResponse|\Inertia\Response
     */
    public function topup(Request $request)
    {
//        dd('halo');
        if (auth()->user()->pin != null) {
            Validator::make($request->toArray(), [
                'pin' => ['required'],
            ])->validateWithBag('storeInformation');

//            dd('lewat');

            if (!Hash::check($request['pin'], auth()->user()->pin)) {
//                session()->flash('flash.banner', 'Pin tidak valid');
//                session()->flash('flash.bannerStyle', 'danger');
//                dd('pin salah');
                return to_route('pin.wrong');
            }
        }

//        dd($request->toArray());
//        $admin_fee = (Helper::api()->fees / 100) * $request['amount'];
        $gross_amount = $request['amount'] + $request['fee'];

//        dd($request->all());
        $order_id = strtolower(Str::random(8));

        $response = Http::post('https://api.digiflazz.com/v1/transaction', [
            'username' => Helper::api()->digiflazz_username,
            'buyer_sku_code' => $request['sku'],
            'customer_no' => $request['customer_no'],
            'ref_id' => $order_id,
            'sign' => md5(Helper::api()->digiflazz_username.Helper::api()->digiflazz_key.$order_id),
//            'testing' => true
        ]);

//        dd($response->object()->data);

        if ($response->successful()) {
            $user = User::where('id', auth()->user()->id)->first();

            $transaction = Transaction::create([
                'sku' => $request['sku'],
                'order_id' => $order_id,
                'product_name' => $request['product_name'],
                'customer_no' => $request['customer_no'],
                'user_id' => auth()->user()->id,
                'status_id' => Transaction::PENDING,
                'category_id' => $request['category_id'],
                'amount' => $request['amount'],
                'gross_amount' => $gross_amount,
                'last_amount' => $user->wallet_balance,
                'admin_fee' => $request['fee'],
                'desc' => $response->object()->data->sn ?? $response->object()->data->rc.' '.$response->object()->data->message,
            ]);

//            $user->withdraw($transaction->gross_amount);

            switch($response->object()->data->status) {
                case ('Pending'):
                case ('Sukses'):
                    $user->withdraw($transaction->gross_amount);
                    $user->update(
                        [ 'coin'=> DB::raw('coin+6') ]
                    );
                    Helper::update_digiflazz_saldo($response->object()->data->buyer_last_saldo);
                    break;
                default:
//                    dd($response->object()->data);
                    return Inertia::render('Payment/Info', [
                        'transaction' => $response->object()->data,
                    ]);
            }

        return Inertia::render('Payment/Pending', [
            'transaction' => $transaction
        ]);

        } else {
//            dd($response->status());
            return Inertia::render('Payment/Info', [
                'transaction' => $response->object()->data,
            ]);
        }
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function topupPasca(Request $request)
    {
//        $admin_fee = (Helper::api()->fees / 100) * $request['amount'];
//        $gross_amount = $request['amount'] + $admin_fee;

//        dd($request->all());

        switch($request['sku']) {
            case ('pln'):
                $category_id = Transaction::PASCA_PLN;
                break;

            case ('pdam-bandar-lampung'):
                $category_id = Transaction::PASCA_PDAM;
                break;

            case ('myrepublic'):
            case ('indihome'):
                $category_id = Transaction::PASCA_INTERNET;
                break;

            case ('bpjs-kesehatan'):
                $category_id = Transaction::PASCA_BPJSK;
                break;

            case ('bpjs-ketenagakerjaan'):
                $category_id = Transaction::PASCA_BPJSTK;
                break;

            case ('home-credit'):
            case ('mnc-finance'):
            case ('adira-finance'):
                $category_id = Transaction::PASCA_MULTIFINANCE;
                break;

            case ('indovision'):
            case ('nex-media'):
            case ('telkomvision'):
            case ('firstmedia'):
                $category_id = Transaction::PASCA_TV;
                break;

            default:
                dd('produk tidak ditemukan');
        }

        $response = Http::post('https://api.digiflazz.com/v1/transaction', [
            "commands" => "pay-pasca",
            'username' => Helper::api()->digiflazz_username,
            'buyer_sku_code' => $request['sku'],
            'customer_no' => $request['customer_no'],
            'ref_id' => $request['order_id'],
            'sign' => md5(Helper::api()->digiflazz_username.Helper::api()->digiflazz_key.$request['order_id']),
        ]);

//        dd($response->object()->data);

        if ($response->successful()) {
            $user = User::where('id', auth()->user()->id)->first();

            try {
                $transaction = Transaction::create([
                    'sku' => $request['sku'],
                    'order_id' => $request['order_id'],
                    'product_name' => $request['sku'].' '.$request['customer_name'],
                    'customer_no' => $request['customer_no'],
                    'user_id' => auth()->user()->id,
                    'status_id' => Transaction::PENDING,
                    'category_id' => $category_id,
                    'amount' => $request['price'],
                    'gross_amount' => $request['selling_price'],
                    'last_amount' => $user->wallet_balance,
                    'admin_fee' => $request['admin'],
                    'desc' => $response->object()->data->sn ?? $response->object()->data->rc.' '.$response->object()->data->message,
                ]);

//                if ($request['category_id'] >= Transaction::PASCA_PLN && $request['category_id'] <= Transaction::PASCA_SAMSAT) {
//
//                    $desc = $request['desc'];
//
//                    $pasca_desc = TransactionPasca::create($desc);
//                }

            } catch (Exception $e) {
                dd($e->getMessage());
            }


//            $user->withdraw($transaction->gross_amount);

            switch($response->object()->data->status) {
                case ('Pending'):
                case ('Sukses'):
                    $user->withdraw($transaction->gross_amount);
                    $user->update(
                        [ 'coin'=> DB::raw('coin+6') ]
                    );
                    Helper::update_digiflazz_saldo($response->object()->data->buyer_last_saldo ?? $user->wallet_balance);
                    break;
                default:
//                    dd($response->object()->data);
                    return Inertia::render('Payment/Info', [
                        'transaction' => $response->object()->data,
                    ]);
            }

            return Inertia::render('Payment/Pending', [
                'transaction' => $transaction
            ]);

        } else {
//            dd($response->status());
            return Inertia::render('Payment/Info', [
                'transaction' => $response->object()->data,
            ]);
        }
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function indexPasca($sku)
    {
//        dd($id);
        return Inertia::render('Product/Pasca/Index', [
            'sku' => $sku,
        ]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function inquiryPasca(Request $request)
    {
//        dd($request->all());
        $user = auth()->user();
//        $response = Helper::pricelist();

        $order_id = \Illuminate\Support\Str::random(8);
        $customer = Http::post('https://api.digiflazz.com/v1/transaction', [
            'commands' => 'inq-pasca',
            'customer_no' => $request['customer_no'],
            'buyer_sku_code' => $request['sku'],
            'username' => Helper::api()->digiflazz_username,
            'ref_id' => $order_id,
            'sign' => md5(Helper::api()->digiflazz_username.Helper::api()->digiflazz_key.$order_id),
        ]);

//        dd($customer->object()->data);

//        return Inertia::render('Payment/Info', [
//            'transaction' => $customer->object()->data,
//        ]);

        if ($customer->successful() && $customer->object()->data->status == "Sukses") {
            return Inertia::render('Product/Pasca/CreateEdit', [
                'users' => auth()->user(),
                'customer' => $customer->object(),
//                'response'  => Inertia::lazy(fn () => $response->object()),
//                'fee' => Helper::api()->fees,
            ]);

        } else {
            return Inertia::render('Payment/Info', [
                'transaction' => $customer->object()->data,
            ]);
        }
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\RedirectResponse|\Inertia\Response
     */
    public function status(Request $request)
    {
//        dd($request->all());
        $request = $request['transaction'];

        $user = User::where('id', auth()->user()->id)->first();
        $transaction = Transaction::where('id', $request['id'])->first();

        if ($transaction->category_id < 8) {
            $status = Http::post('https://api.digiflazz.com/v1/transaction', [
//            'commands' => 'status-pasca',
                'username' => Helper::api()->digiflazz_username,
                'buyer_sku_code' => $request['sku'],
                'customer_no' => $request['customer_no'],
                'ref_id' => $request['order_id'],
                'sign' => md5(Helper::api()->digiflazz_username . Helper::api()->digiflazz_key . $request['order_id']),
            ]);
        } else {
            $status = Http::post('https://api.digiflazz.com/v1/transaction', [
            'commands' => 'status-pasca',
                'username' => Helper::api()->digiflazz_username,
                'buyer_sku_code' => $request['sku'],
                'customer_no' => $request['customer_no'],
                'ref_id' => $request['order_id'],
                'sign' => md5(Helper::api()->digiflazz_username . Helper::api()->digiflazz_key . $request['order_id']),
            ]);
        }

//            dd($status->object()->data);

        switch($status->object()->data->status) {
            case ('Sukses'):
//                    $user->withdraw($request['amount']);
                $transaction->update([
                    'status_id' => Transaction::SUCCESS,
                    'desc' => $status->object()->data->sn
                ]);

                return Inertia::render('History/Show', [
                    'history' => $transaction,
                    'goBack' => false,
                    'goSuccess' => true
                ]);

//                return Redirect::route('history.show', $transaction->order_id);
                break;

            case ('Pending'):
                $transaction->update([
                    'status_id' => Transaction::PENDING,
                    'desc' => $status->object()->data->rc.' '.$status->object()->data->message
                ]);

                return Inertia::render('Payment/Pending', [
                    'transaction'   => $transaction
                ]);
                break;

            default:
                $transaction->update([
                    'status_id' => Transaction::ERROR,
                    'desc' => $status->object()->data->rc.' '.$status->object()->data->message
                ]);

//                $user->deposit($transaction->gross_amount);

                return Inertia::render('Payment/Error', [
                    'transaction'   => $transaction
                ]);
        }



    }

}
