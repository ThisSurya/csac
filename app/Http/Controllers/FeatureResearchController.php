<?php

namespace App\Http\Controllers;

use App\Services\FeatureResearchServices;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;

class FeatureResearchController extends Controller
{
    var $fs;

    public function __construct()
    {
        $this->fs = new FeatureResearchServices;
    }

    public function index(){
        return Inertia::render('Admin/FeatureResearch/Index');
    }

    public function create(){
        return Inertia::render('Admin/FeatureResearch/Create');
    }

    public function getShownableCarousel(){
        $data = $this->fs->getDataShownable();
        return $data;
    }

    public function edit($id){
        $data = $this->fs->getDataByID($id);
        return Inertia::render('Admin/FeatureResearch/Edit', [
            'id' => $data
        ]);
    }

    public function getData(){
        $key = request('searchquery');
        $data = $this->fs->getData($key);
        return $data;
    }

    public function store(Request $request){
        $validator = Validator::make($request->all(), [
            'titleResearch' => 'required',
            'deskripsi' => 'required|max:300',
            'isShown' => 'required',
        ]);
        if($validator->fails()){
            throw ValidationException::withMessages([
                'titleResearch' => 'This field is required',
                'deskripsi' => 'This field is required, limit is 300 character!',
                'isShown' => 'This field is required',
            ]);
        }

        if($request->isShown){
            $length = $this->getShownableCarousel();
            if(sizeof($length) >= 4) {
                throw ValidationException::withMessages([
                    'carousel' => 'Cannot more than 4!'
                ]);
            }
        }
        // dd($request->file_upload);
        $result = $this->fs->store($request);
    }

    public function update(Request $request){
        $validator = Validator::make($request->all(), [
            'titleResearch' => 'required',
            'deskripsi' => 'required|max:300',
            'isShown' => 'required',
        ]);

        if($validator->fails()){
            throw ValidationException::withMessages([
                'titleResearch' => 'This field is required',
                'deskripsi' => 'This field is required, limit is 300 character',
                'isShown' => 'This field is required',
            ]);
        }


        if($request->isShown){
            $length = $this->getShownableCarousel();
            if(sizeof($length) > 4) {
                throw ValidationException::withMessages([
                    'carousel' => 'Cannot more than 4!'
                ]);
            }
        }

        $result = $this->fs->update($request);
    }

    public function updateShownable(Request $request){
        $result = $this->fs->updateShownable($request);
    }

    public function destroy($id){
        $id = explode(',', $id);
        array_pop($id);
        $result = $this->fs->destroy($id);
    }
}
