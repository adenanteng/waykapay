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
                'slug' => '000001',
                'name' => 'Aden Anteng',
                'email' => 'aden.anteng@gmail.com',
                'phone' => '085156875180',
                'password' => bcrypt('12345678'),
                'role_id' => 1,
                'email_verified_at' => now(),
            ],
            [
                'slug' => '000002',
                'name' => 'Agus Suryaman',
                'email' => 'agusyaya@gmail.com',
                'phone' => '082372892755',
                'password' => bcrypt('wkpbaradatu1'),
                'role_id' => 1,
                'email_verified_at' => now(),
            ],
        ];
        foreach ($users as $key => $value) {
            $user = User::create($value);
//            $user->assignRole($value['user_type']);
        }
    }
}
