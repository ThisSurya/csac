<?php

namespace App\Http\Controllers;

use App\Models\OurResearchs;
use App\Services\OurResearchServices;
use DateTime;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;

class OurResearchController extends Controller
{
    var $ourr;

    public function __construct()
    {
        $this->ourr = new OurResearchServices;
    }

    public function index(){
        return Inertia::render('Admin/OurResearch/Index');
    }

    public function getData(){
        $key = request('searchquery');
        $request = $this->ourr->getData($key);
        return $request;
    }

    public function create(){
        return Inertia::render('Admin/OurResearch/Create');
    }

    public function store(Request $request){
        $validate = Validator::make($request->all(), [
            'title' => 'required',
            'deskripsi' => 'required',
            'file_upload' => 'max:2048|mimes:jpeg,png,jpg,gif,svg',
            'tanggal_mulai' => 'required'
        ]);

        if($validate->fails()){
            ValidationException::withMessages([
                'title' => 'this field is required!',
                'deskripsi' => 'this field is required!',
                'file_upload' => 'Limit size is 2 mb and supported type: jpeg,png,jpg,gif,svg',
                'tanggal_mulai' => 'this field is required!'
            ]);
        }

        $result = $this->ourr->store($request);

    }

    public function edit($id){
        $request = $this->ourr->getDataByID($id);
        return Inertia::render('Admin/OurResearch/Edit', ['id' => $request]);
    }

    public function update(Request $request){
        $validate = Validator::make($request->all(), [
            'title' => 'required',
            'deskripsi' => 'required',
            'file_upload' => 'max:2048|mimes:jpeg,png,jpg,gif,svg',
            'tanggal_mulai' => 'required'
        ]);

        if($validate->fails()){
            ValidationException::withMessages([
                'title' => 'this field is required!',
                'deskripsi' => 'this field is required!',
                'file_upload' => 'Limit size is 2 mb and supported type: jpeg,png,jpg,gif,svg',
                'tanggal_mulai' => 'this field is required!'
            ]);
        }
        $result = $this->ourr->update($request);
    }

    public function destroy($id){
        $id = explode(",", $id);
        array_pop($id);
        $this->ourr->destroy($id);
    }
}
