<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Support\Facades\Hash;

class PinValidationRules implements ValidationRule
{
    /**
     * Run the validation rule.
     *
     * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
//        dd($attribute, $value, $fail);
//        dd(Hash::check($value, auth()->user()->pin));

        if(!Hash::check($value, auth()->user()->pin)){
            $fail('The :attribute must be between 1980 to');
        }
    }
}
