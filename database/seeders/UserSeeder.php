<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->insert([
            [
                'name' => 'admin',
                'nim' => '',
                'email' => 'admincsac@dinus.ac.id',
                'password' => '$2y$12$6zDqkzWp00Y/hg/sUdM.B.tUW0EJzoXVSatRjRPXkmb6HXhSnwpIC',
                'isadmin' => true,
            ]
        ]);
    }
}
