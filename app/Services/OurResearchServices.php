<?php

namespace App\Services;

use App\Models\OurResearchs;
use DateTime;
use Illuminate\Support\Facades\Storage;

class OurResearchServices
{
    public function getData($key)
    {
        $data = OurResearchs::where('title', 'like', "%{$key}%")->get();
        return $data;
    }

    public function getDataByID($id){
        $data = OurResearchs::where('id', $id)->get();
        return $data;
    }

    public function store($data)
    {
        try {
            if ($data->hasFile('file_upload')) {
                $image = $data->file_upload->store('ourresearch_public');
                $image2 = str_replace('/storage/ourresearch_public/', '/ourresearch/', Storage::url($image));
            }
            $tanggal = new DateTime($data->tanggal_mulai);
            $tanggal = $tanggal->format('Y-m-d');
            $result = OurResearchs::create([
                'title' => $data->title,
                'deskripsi' => $data->deskripsi,
                'sampulpath' => $image2,
                'sampulname' => $image,
                'tanggal_mulai' => $tanggal
            ]);

            return $result;
        } catch (\Exception $e) {
            return false;
        }
    }

    public function update($data)
    {
        try {
            $tanggal = new DateTime($data->tanggal_mulai);
            $tanggal = $tanggal->format('Y-m-d');
            $ourr = OurResearchs::where('id', $data->id);
            if ($data->hasFile('file_upload')) {
                $olddata = $ourr->get();
                Storage::delete($olddata[0]->sampulname);
                $image = $data->file_upload->store('ourresearch_public');
                $image2 = str_replace('/storage/ourresearch_public/', '/ourresearch/', Storage::url($image));

                $result = $ourr->update([
                    'title' => $data->title,
                    'deskripsi' => $data->deskripsi,
                    'sampulpath' => $image2,
                    'sampulname' => $image,
                    'tanggal_mulai' => $tanggal
                ]);
            }else{
                $result = $ourr->update([
                    'title' => $data->title,
                    'deskripsi' => $data->deskripsi,
                    'tanggal_mulai' => $tanggal
                ]);
            }

            return $result;
        } catch (\Exception $e) {
            return false;
        }
    }

    public function destroy($data)
    {
        try {
            $ourr = OurResearchs::whereIn('id', $data);
            $array_image = $ourr->get();
            foreach($array_image as $image){
                Storage::delete($image->sampulname);
            }
            $result = $ourr->delete();
            return $result;
        } catch (\Exception $e) {
            return false;
        }
    }
}
