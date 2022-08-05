<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categoria extends Model
{
    public $timestamps = false;

    use HasFactory;


    protected $fillable = ['nombre','anio','juego','ga','clasificacion'];

    public function videojuegos()
    {
        return $this->hasMany(Videojuego::class);
    }
}
