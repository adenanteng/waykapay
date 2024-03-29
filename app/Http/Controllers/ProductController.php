<?php

namespace App\Http\Controllers;

use App\Helpers\Helper;
use App\Models\AppSetting;
use App\Models\Transaction;
use App\Models\TransactionCustomer;
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
        $gross_amount = $request['amount'] + $request['fee'];

        $order_id = strtolower(Str::random(8));

        if (auth()->user()->wallet_balance <= $gross_amount) {
            dd('Saldo kurang');
        }

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
                'brand' => $request['brand'] ?? null,
                'product_name' => $request['product_name'],
                'customer_no' => $request['customer_no'],
                'user_id' => auth()->user()->id,
                'status_id' => Transaction::PENDING,
                'category_id' => $request['category_id'] ?? 90,
                'amount' => $request['amount'],
                'gross_amount' => $gross_amount,
                'last_amount' => $user->wallet_balance,
                'admin_fee' => $request['fee'],
                'service_fee' => 0,
                'desc' => $response->object()->data->sn ?? $response->object()->data->rc.' '.$response->object()->data->message,
            ]);

//            $user->withdraw($transaction->gross_amount);

            switch($response->object()->data->status) {
                case ('Pending'):
                case ('Sukses'):
//                    $user->withdraw($transaction->gross_amount);
                    $user->update([
                        'wallet_balance' => auth()->user()->wallet_balance - $gross_amount,
                        'coin' => DB::raw('coin+6')
                    ]);
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
     * @return \Illuminate\Http\RedirectResponse|\Inertia\Response
     */
    public function topupPasca(Request $request)
    {
//        $admin_fee = (Helper::api()->fees / 100) * $request['amount'];
//        $gross_amount = $request['amount'] + $admin_fee;

//        dd($request->all());

//        if (auth()->user()->pin != null) {
//            Validator::make($request->toArray(), [
//                'pin' => ['required'],
//            ])->validateWithBag('storeInformation');
//
//            if (!Hash::check($request['pin'], auth()->user()->pin)) {
//                return to_route('pin.wrong');
//            }
//        }

        if (auth()->user()->wallet_balance <= $request['selling_price']) {
            dd('Saldo kurang');
        }

        switch($request['sku']) {
            case ('tagihan-pln'):
                $category_id = Transaction::PASCA_PLN;
                break;

            case ('pln-nontaglis'):
                $category_id = Transaction::PLN_NONTAGLIS;
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

            case ('astra-credit-company'):
            case ('adira-finance'):
            case ('federal-inti-finance'):
            case ('home-credit-indonesia'):
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

            $extra_fee = $request['extra_fee'];

            $admin_fee = $response->object()->data->selling_price - $response->object()->data->price; //1125 komisi
            $service_fee = $response->object()->data->admin - $admin_fee; //1375

            $idk = $admin_fee + $service_fee; //2500 admin

//            $price = 351375;
//            $selling = 352500; //1125
//            $admin = 2500;

            try {
                $transaction = Transaction::create([
                    'sku' => $response->object()->data->buyer_sku_code,
                    'order_id' => $response->object()->data->ref_id,
                    'brand' => $request['sku'] ?? null,
                    'product_name' => $response->object()->data->buyer_sku_code.' '.$response->object()->data->customer_name,
                    'customer_no' => $response->object()->data->customer_no,
                    'user_id' => auth()->user()->id,
                    'status_id' => Transaction::PENDING,
                    'category_id' => $category_id ?? 90,
//                    'amount' => $response->object()->data->price,
                    'amount' => $response->object()->data->price - $service_fee,
//                    'gross_amount' => $response->object()->data->price + $admin_fee + $service_fee + $extra_fee,
                    'gross_amount' => $response->object()->data->price + $admin_fee + $extra_fee,
                    'last_amount' => $user->wallet_balance,
//                    'admin_fee' => $response->object()->data->admin,
                    'admin_fee' => $admin_fee + $extra_fee,
                    'service_fee' => $service_fee,
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
//                    $user->withdraw($transaction->gross_amount);
//                    $user->update(
//                        [ 'coin'=> DB::raw('coin+6') ]
//                    );
                    $user->update([
                        'wallet_balance' => auth()->user()->wallet_balance - $transaction->gross_amount,
                        'coin' => DB::raw('coin+6')
                    ]);
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
    public function indexPasca($sku)
    {
//        dd($id);
        return Inertia::render('Product/Pasca/Index', [
            'sku' => $sku,
            'customer_list' => Inertia::lazy(fn () => Helper::transactionCustomer([$sku])),
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

        if ($customer->successful() && $customer->object()->data->rc == "00") {
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
     * @return \Inertia\Response
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

        $save = !TransactionCustomer::where('user_id', auth()->user()->id)
            ->where('customer_no', $transaction->customer_no)
            ->where('brand', $transaction->brand)
            ->first();

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
                    'goSuccess' => true,
                    'saveCustomer' => $save,
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
