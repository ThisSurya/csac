<?php

namespace App\Services;

use App\Models\Background;
use Illuminate\Support\Facades\Storage;

class BackgroundServices
{
    public function getImage(){
        return Background::where('id', 1)->get();
    }

    public function store($request)
    {
        $datas = Background::find(1);
        try {
            if ($datas) {
                Storage::delete($datas->sampulname);
            } else {
                $datas = new Background();
            }
            if ($request->hasFile('file_upload')) {
                $image = $request->file_upload->store('background_public');
                $image2 = str_replace('/storage/background_public/', '/background/', Storage::url($image));

                $result = [
                    'sampulname' => $image,
                    'sampulpath' => $image2
                ];
                $datas->fill($result);
                $datas->save();
            }
            return true;
        } catch (\Exception $e) {
            return false;
        }
    }
}
