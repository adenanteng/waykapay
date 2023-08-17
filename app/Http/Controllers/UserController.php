<?php

namespace App\Http\Controllers;

use App\Helpers\Helper;
use App\Models\Transaction;
use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;
use ProtoneMedia\LaravelQueryBuilderInertiaJs\InertiaTable;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        return Inertia::render('User/Index', [
            'users' => User::latest()->paginate(20),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create(): Response
    {
        return Inertia::render('User/CreateEdit', [
            'selectRole' => User::ROLE
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return RedirectResponse
     */
    public function store(Request $request): RedirectResponse
    {
//        dd($request->toArray());
        Validator::make($request->toArray(), [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'unique:users'],
            'phone' => ['required', 'unique:users'],
        ])->validateWithBag('storeInformation');

        $request['password'] = bcrypt(12345678);

        return Redirect::route('user.index', [
            'users' => User::create($request->all()),
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param User $user
     * @return Response
     */
    public function show(User $user)
    {
        return Inertia::render('User/Show', [
            'users' => $user,
            'history' => Transaction::where('user_id', $user->id)->get()
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param $id
     * @return Response
     */
    public function edit($id)
    {
//        $users = User::find($id);
//        dd($users);
        return Inertia::render('User/CreateEdit',
            [
                'users' => User::find($id),
                'selectRole' => User::ROLE
            ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param User $user
     * @return RedirectResponse
     */
    public function update(Request $request, User $user)
    {
//        dd($request->all());
//        Validator::make($request->toArray(), [
//            'name' => ['required', 'string', 'max:255'],
//        ])->validateWithBag('updateBlogInformation');
        $user->update($request->all());

        return Redirect::route('user.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Request $request
     * @return RedirectResponse
     */
    public function destroy(Request $request)
    {
        $user = User::find($request['id']);
        $user->delete();

        return Redirect::route('user.index');
    }

    public function resetPassword(User $user)
    {
//        dd($user);
//        $data = User::findOrFail($user);
        $data = $user;

        $data->password = bcrypt('12345678');
        // User user data...
        $data->fill($data->all()->toArray())->update();
    }
}
