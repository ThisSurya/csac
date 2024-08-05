<?php

namespace App\Services;

use App\Models\Partnerships;
use Illuminate\Support\Facades\Storage;

class PartnershipServices
{
    public function getData($key)
    {
        $data = Partnerships::query()->when($key, function ($query, $key) {
            $query->where('name', 'like', "%{$key}%");
        })->get();

        return $data;
    }

    public function getDataShownable()
    {
        $data = Partnerships::where('is_shown', 1)->get();
        return $data;
    }

    public function updateShown($data)
    {
        try {
            $partnership = Partnerships::where('id', $data->data_user);
            $old = $partnership->get();
            $partnership->update([
                'is_shown' => !$old[0]->is_shown,
            ]);
            return true;
        } catch (\Exception $e) {
            return false;
        }
    }

    public function getDataByID($key)
    {
        $data = Partnerships::where('id', $key)->get();
        return $data;
    }

    public function store($data)
    {
        try {
            $image = '';
            $check = 0;
            if ($data->isShown) {
                $check = 1;
            }
            if ($data->hasFile('file_upload')) {
                $image = $data->file_upload->store('partner_public');
                $image2 = str_replace('/storage/partner_public/', '', Storage::url($image));
            }
            $fs = Partnerships::create([
                'name' => $data->name,
                'deskripsi' => $data->deskripsi,
                'sampulpath' => '/partner/' . $image2,
                'sampulname' => $image,
                'is_shown' => $check,
            ]);

            return true;
        } catch (\Exception $e) {
            throw $e;
        }
    }

    public function update($data)
    {
        try {
            $fs = Partnerships::where('id', $data->id);
            $check = 0;
            if ($data->isShown) {
                $check = 1;
            }
            if ($data->hasFile('file_upload')) {
                $olddata = $fs->get();
                Storage::delete($olddata[0]->sampulname);
                $image = $data->file_upload->store('partner_public');
                $image2 = str_replace('/storage/partner_public/', '', Storage::url($image));

                $fs->update([
                    'name' => $data->name,
                    'deskripsi' => $data->deskripsi,
                    'sampulpath' => '/partner/' . $image2,
                    'sampulname' => $image,
                    'is_shown' => $check,
                ]);
            } else {
                $fs->update([
                    'name' => $data->name,
                    'deskripsi' => $data->deskripsi,
                    'is_shown' => $check,
                ]);
            }

            return $fs;
        } catch (\Exception $e) {
            throw $e;
        }
    }

    public function destroy($id)
    {
        try {
            $fs = Partnerships::whereIn('id', $id);
            $array_image = $fs->get();
            $fs->delete();
            foreach ($array_image as $image) {
                Storage::delete($image->sampulname);
            }
            return $fs;
        } catch (\Exception $e) {
            throw $e;
        }
    }
}
