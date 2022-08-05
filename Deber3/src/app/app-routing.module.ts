import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RutaGenerosComponent} from "./rutas/ruta-generos/ruta-generos.component";
import {RutaGeneroDetalleComponent} from "./rutas/ruta-genero-detalle/ruta-genero-detalle.component";
import {RutaInsertarGeneroComponent} from "./rutas/ruta-insertar-genero/ruta-insertar-genero.component";
import {RutaInsertarVideojuegoComponent} from "./rutas/ruta-insertar-videojuego/ruta-insertar-videojuego.component";

const routes: Routes = [
  {
    path:'generos',
    component: RutaGenerosComponent,
  },
  {
    path:'generos/:id',
    component: RutaGeneroDetalleComponent,
  },
  {
    path:'insertarGenero/:id',
    component: RutaInsertarGeneroComponent,
  },
  {
    path:'insertarVideojuego/:id',
    component: RutaInsertarVideojuegoComponent,
  },
  {
    path:'',
    component: RutaGenerosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
