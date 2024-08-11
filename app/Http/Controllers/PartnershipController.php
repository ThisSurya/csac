<?php

namespace App\Http\Controllers;

use App\Services\PartnershipServices;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use App\Models\Partnerships;
class PartnershipController extends Controller
{
    var $partnership;

    public function __construct()
    {
        $this->partnership = new PartnershipServices;
    }

    public function index()
    {
        return Inertia::render('Admin/Partnership/Index');
    }

    public function getShownableCarousel()
    {
        $data = $this->partnership->getDataShownable();
        return $data;
    }

    public function create()
    {
        return Inertia::render('Admin/Partnership/Create');
    }

    public function edit($id)
    {
        $data = $this->partnership->getDataByID($id);
        return Inertia::render('Admin/Partnership/Edit', [
            'id' => $data
        ]);
    }

    public function getData()
    {
        $key = request('searchquery');
        $data = $this->partnership->getData($key);
        return $data;
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'deskripsi' => 'required',
        ]);
        if ($validator->fails()) {
            throw ValidationException::withMessages([
                'name' => 'This field is required',
                'deskripsi' => 'This field is required',
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

        $result = $this->partnership->store($request);
    }

    public function update(Request $request)
    {
        $fs = Partnerships::where('id', $request->id);
        $olddata = $fs->get();

        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'deskripsi' => 'required',
        ]);

        if ($validator->fails()) {
            throw ValidationException::withMessages([
                'name' => 'This field is required',
                'deskripsi' => 'This field is required',
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

        $result = $this->partnership->update($request);
    }

    public function updateShownable(Request $request)
    {
        $result = $this->partnership->updateShown($request);
    }

    public function destroy($id)
    {
        $id = explode(',', $id);
        array_pop($id);
        $result = $this->partnership->destroy($id);
    }
}
