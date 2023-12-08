<?php

namespace App\Actions\Fortify;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Laravel\Fortify\Contracts\CreatesNewUsers;
use Laravel\Jetstream\Jetstream;
use Otpless\OTPLessAuth;

class CreateNewUser implements CreatesNewUsers
{
    use PasswordValidationRules;

    /**
     * Validate and create a newly registered user.
     *
     * @param  array  $input
     * @return \App\Models\User
     */
    public function create(array $input)
    {
        Validator::make($input, [
            'name' => ['required', 'string', 'max:255'],
            'phone' => ['required', 'unique:users'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => $this->passwordRules(),
            'terms' => Jetstream::hasTermsAndPrivacyPolicyFeature() ? ['accepted', 'required'] : '',
        ])->validate();

//        $auth = new OtplessAuth();
//        $data = $auth->generateMagicLink(
//                        $input['phone'],
//                        $input['email'],
//                        "11PUMM5B0OOP6S64C6JOIF049GMFNGXU",
//                        "2j07p4bhipk2oz8k6mo0j7dlenjj86ri",
//                        "https://waykapay.com/dashboard",
//                        null);

        return User::create([
            'slug' => rand(100000,999999),
            'name' => $input['name'],
            'phone' => $input['phone'],
            'email' => $input['email'],
            'password' => Hash::make($input['password']),
            'role_id' => User::USER,
            'email_verified_at' => Carbon::now()
        ]);
    }
}
