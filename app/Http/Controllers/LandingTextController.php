<?php

namespace App\Http\Controllers;

use App\Models\LandingText;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;

class LandingTextController extends Controller
{
    public function Index(){
        return Inertia::render('Admin/LandingText/Index');
    }

    public function edit($id){
        $data = LandingText::where('id', $id)->get();
        return Inertia::render('Admin/LandingText/Edit', ['id' => $data]);
    }

    public function getData(){
        $key = request('section');
        $data = LandingText::query()->when($key, function($query, $key){
            $query->where('id', 'like', "%{$key}%");
        })->get();
        return $data;
    }

    public function update(Request $request){
        $validator = Validator::make($request->all(), [
            'deskripsi' => 'required'
        ]);

        if($validator->fails()){
            throw ValidationException::withMessages([
                'deskripsi' => 'This field is required!'
            ]);
        }
        $landing = LandingText::where('id', $request->id);
        $landing->update([
            'deskripsi' => $request->deskripsi
        ]);
    }
}
