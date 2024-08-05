<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FeatureResearchs extends Model
{
    use HasFactory;
    protected $table = 'feature_researchs';
    protected $fillable = [
        'title_research',
        'sampulpath',
        'sampulname',
        'deskripsi',
        'is_shown'
    ];
}
