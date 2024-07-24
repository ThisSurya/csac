<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\UserServices;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
class ManageUserController extends Controller
{
    var $user;

    public function __construct()
    {
        $this->user = new UserServices;
    }

    public function index(){
        return Inertia::render('Admin/User/Index');
    }

    public function getData(){
        $key = request('searchquery');
        $data = $this->user->getData($key);
        return $data;
    }

    public function create(){
        return Inertia::render('Admin/User/Create');
    }

    public function edit($id){
        $data = $this->user->getDataByID($id);
        return Inertia::render('Admin/User/Edit', ['id' => $data]);
    }

    public function delete($id){
        $id = explode(",", $id);
        $new_id = array_pop($id);
        $result = $this->user->destroy($new_id);
    }

    public function store(Request $request){

        $position_id = $request->input('position_id.id');
        $validate = Validator::make($request->all(), [
            'username' => 'required',
            'email' => 'required',
            'password' => ['required', Rules\Password::defaults()],
            'isAdmin' => 'required',
        ]);

        if($validate->fails()){
            throw ValidationException::withMessages([
                'username' => 'The field is requried!',
                'email' => 'The field is required!',
                'password' => 'The field is required! and length > 8!',
                'isAdmin' => 'The field must be true or false!',
            ]);
        }

        $result = $this->user->store($request);

        if($result != true){
            dd($result);
        }else{
            return redirect()->to('user');
        }
    }

    public function update(Request $request){
        $validate = Validator::make($request->all(), [
            'username' => 'required',
            'email' => 'required',
            'password' => ['required', Rules\Password::defaults()],
            'isAdmin' => 'required',
        ]);

        if($validate->fails()){
            throw ValidationException::withMessages([
                'title' => 'The field is requried!',
                'email' => 'The field is required!',
                'password' => 'The field is required!',
                'isAdmin' => 'The field must be true or false!',
            ]);
        }

        $result = $this->user->update($request);
        if($result != true){
            dd($result);
        }else{
            return redirect()->to('user');
        }
    }

    public function delete_user($id){
        $id = explode(",", $id);
        $new_id = array_pop($id);
        // dd($id);
        $this->user->destroy($id);
    }
}
