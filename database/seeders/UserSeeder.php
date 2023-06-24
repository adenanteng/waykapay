<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = [
            [
                'name' => 'Aden Anteng',
                'email' => 'aden.anteng@gmail.com',
                'password' => bcrypt('password'),
                'email_verified_at' => now(),
//                'user_type' => 'god',
            ],
        ];
        foreach ($users as $key => $value) {
            $user = User::create($value);
//            $user->assignRole($value['user_type']);
        }
    }
}
