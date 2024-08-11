<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OurResearchs extends Model
{
    protected $table = 'our_researchs';
    protected $fillable = [
        'title',
        'deskripsi',
        'sampulpath',
        'sampulname',
        'tanggal_mulai'
    ];
    use HasFactory;
}
