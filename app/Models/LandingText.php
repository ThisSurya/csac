<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LandingText extends Model
{
    use HasFactory;
    protected $fillable = [
        'deskripsi',
        'section',
    ];
}
