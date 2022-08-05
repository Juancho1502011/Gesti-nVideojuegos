<?php

namespace App\Http\Controllers;

use App\Models\Videojuego;
use Illuminate\Http\Request;

class VideojuegoController extends Controller
{
    public function index()
    {
        return Videojuego::all();
    }

    public function show(Videojuego $videojuego)
    {
        return $videojuego;
    }

    public function store(Request $request)
    {
        $videojuego = Videojuego::create($request->all());

        return response()->json($videojuego, 201);
    }

    public function update(Request $request, Videojuego $videojuego)
    {
        $videojuego->update($request->all());

        return response()->json($videojuego, 200);
    }

    public function delete(Videojuego $videojuego)
    {
        $videojuego->delete();

        return response()->json(null, 204);
    }
}
