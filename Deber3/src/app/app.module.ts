import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaGenerosComponent } from './rutas/ruta-generos/ruta-generos.component';
import {TableModule} from "primeng/table";
import {HttpClientModule} from "@angular/common/http";
import {MultiSelectModule} from "primeng/multiselect";
import {PaginatorModule} from "primeng/paginator";
import { RutaGeneroDetalleComponent } from './rutas/ruta-genero-detalle/ruta-genero-detalle.component';
import { RutaInsertarGeneroComponent } from './rutas/ruta-insertar-genero/ruta-insertar-genero.component';
import {ReactiveFormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import { RutaInsertarVideojuegoComponent } from './rutas/ruta-insertar-videojuego/ruta-insertar-videojuego.component';

@NgModule({
  declarations: [
    AppComponent,
    RutaGenerosComponent,
    RutaGeneroDetalleComponent,
    RutaInsertarGeneroComponent,
    RutaInsertarVideojuegoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    HttpClientModule,
    MultiSelectModule,
    PaginatorModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
