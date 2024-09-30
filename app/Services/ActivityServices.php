<?php

namespace App\Services;

use App\Models\Activities;
use Exception;
use Illuminate\Support\Facades\Auth;
use App\Services\FileUploadServices;
use Illuminate\Support\Facades\Storage;

class ActivityServices
{
    var $fileupload;

    public function __construct()
    {
        $this->fileupload = new FileUploadServices;
    }

    public function store($data, $tanggal)
    {
        try {
            if ($data->hasFile('sampul')) {
                $upload = $data->file('sampul')->store('public');
            };

            $activity = Activities::create([
                'title' => $data->title,
                'content' => $data->content,
                'summary_content' => $data->summary_content,
                'research_type' => $data->research_type,
                'tgl' => $tanggal,
                'sampulname' => $upload,
                'sampulpath' => Storage::url($upload),
                'user_id' => Auth::id(),
            ]);
            if ($data->hasFile('file_upload')) {
                $result = $this->fileupload->store($data->allFiles(), $activity->id);
            };


            return $activity;
        } catch (\Exception $e) {
            return false;
        }
    }

    public function getDataByID($id)
    {
        try {
            $data = Activities::where('id', $id)->get();
            return $data;
        } catch (\Exception $e) {
            return false;
        }
    }

    public function getData($key)
    {
        $data = Activities::query()->when($key, function ($query, $key) {
            $query->where('title', 'like', "%{$key}%")->join('users', 'activities.user_id', '=', 'users.id');
        })->orderBy('tgl', 'desc')->get();
        return $data;
    }

    public function getDataByDate($operand, $date)
    {
        if ($operand == '1') {
            $data = Activities::where('tgl', '==', $date)->take(5)->orderBy('tgl', 'desc')->get();
            return $data;
        } else if ($operand == '2') {
            $data = Activities::where('tgl', '>', $date)->take(5)->orderBy('tgl', 'desc')->get();
            return $data;
        } else if ($operand == '3') {
            $data = Activities::where('tgl', '<=', $date)->take(5)->orderBy('tgl', 'desc')->get();
            return $data;
        } else {
            $data = Activities::take(10)->get();
            return $data;
        }
    }

    public function getDataOnlyDate($operand, $date)
    {
        if ($operand == '1') {
            $data = Activities::select('tgl')->where('tgl', '==', $date)->take(5)->orderBy('tgl', 'desc')->get();
            return $data;
        } else if ($operand == '2') {
            $data = Activities::select('tgl')->where('tgl', '>', $date)->take(5)->orderBy('tgl', 'desc')->get();
            return $data;
        } else if ($operand == '3') {
            $data = Activities::select('tgl')->where('tgl', '<=', $date)->take(5)->orderBy('tgl', 'desc')->get();
            return $data;
        } else {
            $data = Activities::select('tgl')->take(5)->orderBy('tgl', 'desc')->get();
            return $data;
        }
    }

    public function update($data, $tanggal)
    {
        try {
            $summary_content = $data->content;
            $activity = Activities::where('id', $data->id);

            if ($data->hasFile('sampul')) {
                $olddata = $activity->get();
                Storage::delete($olddata[0]->sampulname);
                $upload = $data->file('sampul')->store('public');
                $activity->update([
                    'title' => $data->title,
                    'content' => $data->content,
                    'summary_content' => $data->summary_content,
                    'research_type' => $data->research_type,
                    'tgl' => $tanggal,
                    'sampulname' => $upload,
                    'sampulpath' => Storage::url($upload),
                    'summary_content' => $data->summary_content
                ]);
            }else{
                $activity->update([
                    'title' => $data->title,
                    'content' => $data->content,
                    'summary_content' => $data->summary_content,
                    'research_type' => $data->research_type,
                    'tgl' => $tanggal,
                    'summary_content' => $data->summary_content
                ]);
            }

            if ($data->hasFile('file_upload')) {
                $this->fileupload->update($data->allFiles(), $data->id);
            }

            return true;
        } catch (\Exception $e) {
            return false;
        }
    }

    public function delete($id)
    {
        try {
            $activity = Activities::whereIn('id', $id);
            $this->fileupload->destroy_image($id);
            $urls = $activity->get();
            foreach ($urls as $url) {
                Storage::delete($url->sampulname);
            }
            $activity->delete();
            return true;
        } catch (\Exception $e) {
            throw $e;
        }
    }
}
