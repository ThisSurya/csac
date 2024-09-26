<?php

namespace App\Http\Controllers;

use App\Services\BackgroundServices;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;
use App\Models\Background;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class BackgroundController extends Controller
{
    var $background;
    public function __construct()
    {
        $this->background = new BackgroundServices;
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'file_upload' => 'required|max:8192|mimes:jpeg,png,jpg',
        ]);

        if ($validator->fails()) {
            throw ValidationException::withMessages([
                'file_upload' => 'Limit size is 8 mb, supported type: jpeg, png, jpg'
            ]);
        }

        $result = $this->background->store($request);
    }

    public function index()
    {
        $request = $this->background->getImage();
        return Inertia::render('Admin/Dashboard', ['id' => $request]);
    }
}
