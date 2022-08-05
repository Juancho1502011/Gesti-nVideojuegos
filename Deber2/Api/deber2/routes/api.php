<?php

use App\Models\Categoria;
use App\Http\Controllers\CategoriaController;
use App\Http\Controllers\VideojuegoController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::get('categorias', CategoriaController::class.'@index');
Route::get('categorias/{categoria}', CategoriaController::class.'@show');
Route::post('categorias', CategoriaController::class.'@store');
Route::put('categorias/{categoria}', CategoriaController::class.'@update');
Route::delete('categorias/{categoria}', CategoriaController::class.'@delete');

Route::get('videojuegos', VideojuegoController::class.'@index');
Route::get('videojuegos/{videojuego}', VideojuegoController::class.'@show');
Route::post('videojuegos', VideojuegoController::class.'@store');
Route::put('videojuegos/{videojuego}', VideojuegoController::class.'@update');
Route::delete('videojuegos/{videojuego}', VideojuegoController::class.'@delete');

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
