<?php

namespace App\Http\Controllers;

use App\Services\BackgroundServices;
use App\Services\LandingTextServices;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GuestPageController extends Controller
{
    var $lts;
    var $bg;

    public function __construct()
    {
        $this->bg = new BackgroundServices;
        $this->lts = new LandingTextServices;
    }
    public function getDataBySection(){
        $key = request('section');
        $data = $this->lts->getDataBySection($key);
        return $data;
    }

    public function LandingIndex(){
        $request = $this->bg->getImage();
        return Inertia::render('Landing/Index', ['id' => $request]);
    }

    public function PartnerIndex(){
        $request = $this->bg->getImage();
        return Inertia::render('Partnership/Index', ['id' => $request]);
    }

    public function OurResearchIndex(){
        $request = $this->bg->getImage();
        return Inertia::render('OurResearch/Index', ['id' => $request]);
    }

    public function ContactIndex(){
        $request = $this->bg->getImage();
        return Inertia::render('Contact/Index', ['id' => $request]);
    }
}
