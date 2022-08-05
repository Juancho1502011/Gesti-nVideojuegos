import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {map, Observable} from "rxjs";
import {environment} from "../../../environments/environment";

import {GeneroInterface} from "./interface/genero.interface";
import {GeneroCreateInterface} from "./interface/genero-create.interface";

@Injectable({
  providedIn: 'any'
})
export class GenerosService {

  constructor(
    private readonly httpClient: HttpClient
  ) {
  }

  mostrarTodos(){
    const url = environment.urlJPC + "/categorias";
    return this.httpClient
      .get(url, )
      .pipe(
        map(
          (resultadoEnData: Object) => resultadoEnData as GeneroInterface[]
        )
      )
  }

  buscarUno(idGenero: number) {
    const url = environment.urlJPC + "/categorias/" + idGenero;
      return this.httpClient
        .get(url)
        .pipe(
          map(
            (resultadoEnData: Object) => resultadoEnData as GeneroInterface
          )
        )
  }

  actualizarPorId(idUsuario: number, datosActualizar: GeneroCreateInterface): Observable<GeneroInterface> {
    const url = environment.urlJPC + '/categorias/' + idUsuario;
    return this.httpClient.put(url, datosActualizar)
      .pipe(map((resultadoEnData) => resultadoEnData as GeneroInterface))
  }
  insertarGenero(datos: GeneroCreateInterface): Observable<GeneroInterface> {
    const url = environment.urlJPC + '/categorias' ;
    return this.httpClient.post(url, datos)
      .pipe(map((resultadoEnData) => resultadoEnData as GeneroInterface))
  }
  eliminarGenero(idUsuario: number): Observable<GeneroInterface> {
    const url = environment.urlJPC + '/categorias/'+idUsuario ;
    return this.httpClient.delete(url)
      .pipe(map((resultadoEnData) => resultadoEnData as GeneroInterface))
  }
}
