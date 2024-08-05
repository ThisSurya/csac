<?php

namespace App\Http\Controllers;

use App\Services\LandingTextServices;
use Illuminate\Http\Request;

class GuestPageController extends Controller
{
    var $lts;

    public function __construct()
    {
        $this->lts = new LandingTextServices;
    }
    public function getDataBySection(){
        $key = request('section');
        $data = $this->lts->getDataBySection($key);
        return $data;
    }
}
