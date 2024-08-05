<?php

namespace App\Services;

use App\Models\FeatureResearchs;
use Illuminate\Support\Facades\Storage;

class FeatureResearchServices{
    public function getData($key){
        $data = FeatureResearchs::query()->when($key, function($query, $key){
            $query->where('title_research', 'like', "%{$key}%");
        })->get();

        return $data;
    }

    public function getDataByID($key){
        $data = FeatureResearchs::where('id', $key)->get();
        return $data;
    }

    public function getDataShownable(){
        $data = FeatureResearchs::where('is_shown', 1)->get();
        return $data;
    }

    public function store($data){
        try{
            $image = '';
            $check = 0;
            if($data->isShown){
                $check = 1;
            }
            if($data->hasFile('file_upload')){
                $image = $data->file_upload->store('sampul_public');
                $image2 = str_replace("/storage/sampul_public/", "/sampul/", Storage::url($image));
            }
            $fs = FeatureResearchs::create([
                'title_research' => $data->titleResearch,
                'deskripsi' => $data->deskripsi,
                'sampulname' => $image,
                'sampulpath' => $image2,
                'is_shown' => $check,
            ]);

            return true;
        }catch(\Exception $e){
            throw $e;
        }
    }

    public function update($data){
        try{
            $fs = FeatureResearchs::where('id', $data->id);
            $check = 0;
            if($data->isShown){
                $check = 1;
            }
            if($data->hasFile('file_upload')){
                $olddata = $fs->get();
                Storage::delete($olddata[0]->sampulname);
                $image = $data->file_upload->store('sampul_public');
                $image2 = str_replace("/storage/sampul_public/", "/sampul/", Storage::url($image));
                $fs->update([
                    'title_research' => $data->titleResearch,
                    'deskripsi' => $data->deskripsi,
                    'sampulpath' => $image2,
                    'sampulname' => $image,
                    'is_shown' => $check,
                ]);
            }else{
                $fs->update([
                    'title_research' => $data->titleResearch,
                    'deskripsi' => $data->deskripsi,
                    'is_shown' => $check,
                ]);
            }

            return $fs;
        }catch(\Exception $e){
            throw $e;
        }
    }

    public function destroy($id){
        try{
            $fs = FeatureResearchs::whereIn('id', $id);
            $array_image = $fs->get();
            $fs->delete();
            foreach($array_image as $image){
                Storage::delete($image->sampulname);
            }
            return $fs;
        }catch(\Exception $e){
            throw $e;
        }
    }

    public function updateShownable($data){
        try{
            $fs = FeatureResearchs::where('id', $data->id);
            $old = $fs->get();
            $fs->update([
                'is_shown' => !$old[0]->is_shown,
            ]);
            return true;
        }
        catch(\Exception $e){
            return false;
        }
    }
}
