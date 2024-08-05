<?php

namespace App\Http\Controllers;

use App\Models\Activities;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use App\Models\Fileuploads;
use App\Services\ActivityServices;
use App\Services\FileUploadServices;
use Illuminate\Support\Facades\Storage;

use Illuminate\Support\Facades\Auth;
use DateTime;

class ActivityController extends Controller
{
    var $activity;
    var $fileupload;
    public function __construct()
    {
        $this->fileupload = new FileUploadServices;
        $this->activity = new ActivityServices;
    }

    public function index()
    {
        $request = Activities::take(3)->get();
        return Inertia::render('Admin/Activity/Index', ['activity' => $request]);
    }

    public function getImage()
    {
        $key = request('image');
        $request = Fileuploads::where('activities_id', $key)->get();
        return $request;
    }

    public function detailPage($id)
    {
        $request = Activities::where('id', $id)->get();
        $documentation = Fileuploads::where('activities_id', $id)->get();
        return Inertia::render('Activity/Detail', ['request' => $request, 'documentations' => $documentation]);
    }

    public function getData()
    {
        $key = request('searchquery');
        $request = $this->activity->getData($key);
        return $request;
    }

    public function getDataByDate()
    {
        date_default_timezone_set('Asia/Makassar');
        $now = date('Y-m-d');
        $key = request('dateoperand');

        $request = $this->activity->getDataByDate($key, $now);
        return $request;
    }

    public function getDate()
    {
        date_default_timezone_set('Asia/Makassar');
        $now = date('Y-m-d');
        $key = request('dateoperand');

        $request = $this->activity->getDataOnlyDate($key, $now);
        return $request;
    }

    public function getDataByID()
    {
        $key = request('key');
        $request = $this->activity->getDataByID($key);
        return $request;
    }

    public function create()
    {
        return Inertia::render('Admin/Activity/Create');
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'content' => 'required',
            'research_type' => 'required',
            'summary_content' => 'required|max:50',
            'tgl' => 'required',
            'file_upload.*' => 'required|max:2048|mimes:jpeg,png,jpg,gif,svg',
            'sampul.*' => 'required|max:2048|mimes:jpeg,png,jpg,gif,svg'
        ]);
        $tanggal = new DateTime($request->tgl);
        $tanggal = $tanggal->format('Y-m-d');

        if ($validator->fails()) {
            throw ValidationException::withMessages([
                'title' => 'The field is required!',
                'summary_content' => ' max 200 character!',
                'research_type' => 'The field is required!',
                'content' => 'The field is required!',
                'tgl' => 'This field is required',
                'file_upload' => 'Limit size is 2 mb and supported type: jpeg,png,jpg,gif,svg',
                'sampul' => 'Limit size is 2 mb and supported type: jpeg,png,jpg,gif,svg'
            ]);
        }

        $result = $this->activity->store($request, $tanggal);


        if ($result != true) {
            dd('ada error');
        } else {
            return redirect()->to(route('activity'));
        }
    }

    public function edit($id)
    {
        $request = $this->activity->getDataByID($id);
        return Inertia::render('Admin/Activity/Edit', ['id' => $request]);
    }

    public function update(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'content' => 'required',
            'research_type' => 'required',
            'summary_content' => 'required|max:50',
            'tgl' => 'required',
            'file_upload.*' => 'required|max:2048|mimes:jpeg,png,jpg,gif,svg',
            'sampul.*' => 'required|max:2048|mimes:jpeg,png,jpg,gif,svg'
        ]);

        $tanggal = new DateTime($request->tgl);
        $tanggal = $tanggal->format('Y-m-d');

        if ($validator->fails()) {
            throw ValidationException::withMessages([
                'title' => 'The field is required!',
                'summary_content' => ' max 200 character!',
                'research_type' => 'The field is required!',
                'content' => 'The field is required!',
                'tgl' => 'This field is required',
                'file_upload' => 'Limit size is 2 mb and supported type: jpeg,png,jpg,gif,svg',
                'sampul' => 'Limit size is 2 mb and supported type: jpeg,png,jpg,gif,svg'
            ]);
        }

        $result = $this->activity->update($request, $tanggal);
        if ($result != true) {
            dd($request);
        } else {
            return redirect()->to(route('activity'));
        }
    }

    public function delete($id)
    {
        $id = explode(",", $id);
        $new_id = array_pop($id);
        $activity = $this->activity->delete($id);
    }
}
