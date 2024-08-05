<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class LandingSeed extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('landing_texts')->insert([
            [
                'section' => 'Landing',
                'deskripsi' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nihil quisquam fugiat facere deleniti natus modi pariatur unde ipsam sequi, atque, distinctio velit cumque ab. Voluptatibus fuga repudiandae aliquam ratione.'
            ],
            [
                'section' => 'Researcher',
                'deskripsi' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nihil quisquam fugiat facere deleniti natus modi pariatur unde ipsam sequi, atque, distinctio velit cumque ab. Voluptatibus fuga repudiandae aliquam ratione.'
            ],
            [
                'section' => 'Partnership',
                'deskripsi' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nihil quisquam fugiat facere deleniti natus modi pariatur unde ipsam sequi, atque, distinctio velit cumque ab. Voluptatibus fuga repudiandae aliquam ratione.'
            ],
            [
                'section' => 'Our Research',
                'deskripsi' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nihil quisquam fugiat facere deleniti natus modi pariatur unde ipsam sequi, atque, distinctio velit cumque ab. Voluptatibus fuga repudiandae aliquam ratione.'
            ],
            [
                'section' => 'Contact us',
                'deskripsi' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nihil quisquam fugiat facere deleniti natus modi pariatur unde ipsam sequi, atque, distinctio velit cumque ab. Voluptatibus fuga repudiandae aliquam ratione.'
            ],
        ]);
    }
}
