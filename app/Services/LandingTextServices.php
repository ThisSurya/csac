<?php

namespace App\Services;

use App\Models\LandingText;

class LandingTextServices{
    public function getDataBySection($key){
        $data = LandingText::where('id', $key)->get();
        return $data;
    }
}
