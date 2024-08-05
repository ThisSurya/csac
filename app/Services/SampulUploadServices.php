<?php

namespace App\Services;

use App\Models\Fileupload;
use App\Models\FileUploads;
use Illuminate\Support\Facades\Storage;

class SampulUploadServices
{
    public function store($array_image, $id)
    {
        try {
            foreach ($array_image as $images) {
                foreach ($images as $image){
                    $upload = $image->store('sampul_public');
                    FileUploads::create([
                        'name' => $upload,
                        'activities_id' => $id,
                        'pathurl' => Storage::url($upload)
                    ]);
                }
            }
            return true;
        } catch (\Exception $e) {
            return false;
        }
    }

    public function update($array_image, $id)
    {
        try {
            $data_2delete = FileUploads::where('activities_id', $id)->get();

            foreach ($data_2delete as $data) {
                Storage::delete($data->name);
            }

            $images = FileUploads::where('activities_id', $id);
            $images->delete();

            foreach ($array_image as $images) {
                foreach($images as $image){
                    $upload = $image->store('public');
                    FileUploads::create([
                        'name' => $upload,
                        'activities_id' => $id,
                        'pathurl' => Storage::url($upload)
                    ]);
                }
            }

            return true;
        } catch (\Exception $e) {
            return false;
        }
    }

    public function destroy_image($id)
    {
        try {
            $data = FileUploads::whereIn('activities_id', $id);
            $data_2delete = FileUploads::where('activities_id', $id)->get();
            $data->delete();
            foreach ($data_2delete as $data) {
                Storage::delete($data->name);
            }
            return true;
        } catch (\Exception $e) {
            return false;
        }
    }
}
