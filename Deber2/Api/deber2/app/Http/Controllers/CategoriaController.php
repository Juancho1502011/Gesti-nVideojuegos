<?php

namespace App\Http\Controllers;

use App\Models\Categoria;
use App\Models\Videojuego;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CategoriaController extends Controller
{
    public function index()
    {
        return Categoria::with('videojuegos')->get();
    }

    public function show(Categoria $categoria)
    {
        return Categoria::with('videojuegos')->find($categoria->id);
    }

    public function store(Request $request)
    {
        $categoria = Categoria::create($request->all());

        return response()->json($categoria, 201);
    }

    public function update(Request $request, Categoria $categoria)
    {
        $categoria->update($request->all());

        return response()->json($categoria, 200);
    }

    public function delete(Categoria $categoria)
    {
        $categoria->delete();

        return response()->json(null, 204);
    }
}
