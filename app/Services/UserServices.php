<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Support\Facades\Auth;

class UserServices
{
    public function getData($key)
    {
        $data = User::query()->when($key, function ($query, $key) {
            $query->where('name', 'like', "%{$key}%")->join('positions', 'users.position_id', '=', 'positions.id');
        })->whereNot('users.id', Auth::id())->take(10)->get();
        return $data;
    }

    public function getDataByID($id)
    {
        $data = User::where('id', $id)->get();
        return $data;
    }

    public function store($data){
        try{
            User::create([
                'name' => $data->username,
                'email' => $data->email,
                'nim' => $data->nim,
                'password' => $data->password,
                'isAdmin' => $data->isAdmin,
            ]);

            return true;
        }catch(\Exception $e){
            return false;
        }
    }

    public function update($data){
        try{
            $user = User::where('id', $data->id_user);
            $user->update([
                'name' => $data->username,
                'email' => $data->email,
                'nim' => $data->nim,
                'password' => $data->password,
                'isadmin' => $data->isAdmin,
            ]);

            return true;
        }catch(\Exception $e){
            return false;
        }
    }

    public function destroy($id)
    {
        try {
            $data = User::whereIn('id', $id);
            $data->delete();
            return true;
        } catch (\Exception $e) {
            return false;
        }
    }
}
