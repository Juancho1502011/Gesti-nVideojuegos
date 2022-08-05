import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {map, Observable} from "rxjs";
import {GeneroInterface} from "./interface/genero.interface";
import {GeneroCreateInterface} from "./interface/genero-create.interface";
import {VideojuegoInterface} from "./interface/videojuego.interface";
import {VideojuegoCreateInterface} from "./interface/videojuego-create.interface";

@Injectable({
  providedIn: 'any'
})
export class VideojuegosService {

  constructor(
    private readonly httpClient: HttpClient
  ) {
  }

  mostrarTodos(){
    const url = environment.urlJPC + "/videojuegos";
    return this.httpClient
      .get(url, )
      .pipe(
        map(
          (resultadoEnData: Object) => resultadoEnData as VideojuegoInterface[]
        )
      )
  }

  buscarUno(idGenero: number) {
    const url = environment.urlJPC + "/videojuegos/" + idGenero;
    return this.httpClient
      .get(url)
      .pipe(
        map(
          (resultadoEnData: Object) => resultadoEnData as VideojuegoInterface
        )
      )
  }

  actualizarPorId(idUsuario: number, datosActualizar: VideojuegoCreateInterface): Observable<VideojuegoInterface> {
    const url = environment.urlJPC + '/videojuegos/' + idUsuario;
    return this.httpClient.put(url, datosActualizar)
      .pipe(map((resultadoEnData) => resultadoEnData as VideojuegoInterface))
  }
  insertarVideojuego(datos: VideojuegoCreateInterface): Observable<VideojuegoInterface> {
    const url = environment.urlJPC + '/videojuegos' ;
    return this.httpClient.post(url, datos)
      .pipe(map((resultadoEnData) => resultadoEnData as VideojuegoInterface))
  }
  eliminarVideojuego(idUsuario: number): Observable<VideojuegoInterface> {
    const url = environment.urlJPC + '/videojuegos/'+idUsuario ;
    return this.httpClient.delete(url)
      .pipe(map((resultadoEnData) => resultadoEnData as VideojuegoInterface))
  }
}
