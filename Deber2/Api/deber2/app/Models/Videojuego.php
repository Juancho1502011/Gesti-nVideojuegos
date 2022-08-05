<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Videojuego extends Model
{   
    public $timestamps = false;

    use HasFactory;

    protected $fillable = ['nombre','ventas','precio','plataforma','online','categoria_id'];

    public function categoria()
    {
        return $this->belongsTo(Categoria::class);
    }
}
