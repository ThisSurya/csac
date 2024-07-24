<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ActivitiesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('activities')->insert(
            [

                [
                    'title' => 'Ini adalah judul artikel',
                    'content' => 'artikel ini didasarkan bla bla bla....artikel ini didasarkan bla bla bla.... artikel ini didasarkan bla bla bla.... artikel ini didasarkan bla bla bla.... artikel ini didasarkan bla bla bla.... artikel ini didasarkan bla bla bla....  ',
                    'summary_content' => 'artikel ini didasarkan bla bla bla....artikel ini didasarkan bla bla bla....artikel ini didasarkan bla bla bla....',
                    'user_id' => 1
                ],
                [
                    'title' => 'Ini adalah judul artikel',
                    'content' => 'artikel ini didasarkan bla bla bla....artikel ini didasarkan bla bla bla.... artikel ini didasarkan bla bla bla.... artikel ini didasarkan bla bla bla.... artikel ini didasarkan bla bla bla.... artikel ini didasarkan bla bla bla....  ',
                    'summary_content' => 'artikel ini didasarkan bla bla bla....artikel ini didasarkan bla bla bla....artikel ini didasarkan bla bla bla....',
                    'user_id' => 1
                ],
                [
                    'title' => 'Ini adalah judul artikel',
                    'content' => 'artikel ini didasarkan bla bla bla....artikel ini didasarkan bla bla bla.... artikel ini didasarkan bla bla bla.... artikel ini didasarkan bla bla bla.... artikel ini didasarkan bla bla bla.... artikel ini didasarkan bla bla bla....  ',
                    'summary_content' => 'artikel ini didasarkan bla bla bla....artikel ini didasarkan bla bla bla....artikel ini didasarkan bla bla bla....',
                    'user_id' => 1
                ],
                [
                    'title' => 'Ini adalah judul artikel',
                    'content' => 'artikel ini didasarkan bla bla bla....artikel ini didasarkan bla bla bla.... artikel ini didasarkan bla bla bla.... artikel ini didasarkan bla bla bla.... artikel ini didasarkan bla bla bla.... artikel ini didasarkan bla bla bla....  ',
                    'summary_content' => 'artikel ini didasarkan bla bla bla....artikel ini didasarkan bla bla bla....artikel ini didasarkan bla bla bla....',
                    'user_id' => 1
                ],
                [
                    'title' => 'Ini adalah judul artikel',
                    'content' => 'artikel ini didasarkan bla bla bla....artikel ini didasarkan bla bla bla.... artikel ini didasarkan bla bla bla.... artikel ini didasarkan bla bla bla.... artikel ini didasarkan bla bla bla.... artikel ini didasarkan bla bla bla....  ',
                    'summary_content' => 'artikel ini didasarkan bla bla bla....artikel ini didasarkan bla bla bla....artikel ini didasarkan bla bla bla....',
                    'user_id' => 1
                ],
                [
                    'title' => 'Ini adalah judul artikel',
                    'content' => 'artikel ini didasarkan bla bla bla....artikel ini didasarkan bla bla bla.... artikel ini didasarkan bla bla bla.... artikel ini didasarkan bla bla bla.... artikel ini didasarkan bla bla bla.... artikel ini didasarkan bla bla bla....  ',
                    'summary_content' => 'artikel ini didasarkan bla bla bla....artikel ini didasarkan bla bla bla....artikel ini didasarkan bla bla bla....',
                    'user_id' => 1
                ],
                [
                    'title' => 'Ini adalah judul artikel',
                    'content' => 'artikel ini didasarkan bla bla bla....artikel ini didasarkan bla bla bla.... artikel ini didasarkan bla bla bla.... artikel ini didasarkan bla bla bla.... artikel ini didasarkan bla bla bla.... artikel ini didasarkan bla bla bla....  ',
                    'summary_content' => 'artikel ini didasarkan bla bla bla....artikel ini didasarkan bla bla bla....artikel ini didasarkan bla bla bla....',
                    'user_id' => 1
                ],
                [
                    'title' => 'Ini adalah judul artikel',
                    'content' => 'artikel ini didasarkan bla bla bla....artikel ini didasarkan bla bla bla.... artikel ini didasarkan bla bla bla.... artikel ini didasarkan bla bla bla.... artikel ini didasarkan bla bla bla.... artikel ini didasarkan bla bla bla....  ',
                    'summary_content' => 'artikel ini didasarkan bla bla bla....artikel ini didasarkan bla bla bla....artikel ini didasarkan bla bla bla....',
                    'user_id' => 1
                ],
                [
                    'title' => 'Ini adalah judul artikel',
                    'content' => 'artikel ini didasarkan bla bla bla....artikel ini didasarkan bla bla bla.... artikel ini didasarkan bla bla bla.... artikel ini didasarkan bla bla bla.... artikel ini didasarkan bla bla bla.... artikel ini didasarkan bla bla bla....  ',
                    'summary_content' => 'artikel ini didasarkan bla bla bla....artikel ini didasarkan bla bla bla....artikel ini didasarkan bla bla bla....',
                    'user_id' => 1
                ],
            ]
        );
    }
}
