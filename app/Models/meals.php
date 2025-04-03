<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class meals extends Model
{
    /** @use HasFactory<\Database\Factories\MealsFactory> */
    use HasFactory;

    protected $fillable = ['name', 'price', 'image_url', 'is_available'];
}
