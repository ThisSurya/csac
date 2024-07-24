<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;

class Activities extends Model
{
    use HasFactory;
    use HasUuids;
    protected $table = 'activities';
    protected $fillable = [
        'title',
        'content',
        'fileupload',
        'summary_content',
        'user_id',
        'tgl',
        'id'
    ];
}
