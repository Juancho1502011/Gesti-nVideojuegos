import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {GeneroInterface} from "../../services/http/interface/genero.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {GenerosService} from "../../services/http/generos.service";
import {VideojuegoInterface} from "../../services/http/interface/videojuego.interface";
import {VideojuegosService} from "../../services/http/videojuegos.service";

@Component({
  selector: 'app-ruta-insertar-videojuego',
  templateUrl: './ruta-insertar-videojuego.component.html',
  styleUrls: ['./ruta-insertar-videojuego.component.css']
})
export class RutaInsertarVideojuegoComponent implements OnInit {

  formGroup ?: FormGroup;
  videojuego?:VideojuegoInterface;

  constructor(private readonly formBuilder: FormBuilder,
              private readonly activatedRoute: ActivatedRoute,
              private readonly videojuegoService: VideojuegosService,
              private readonly router:Router
  ) {

  }

  ngOnInit(): void {
    const parametrosConsulta$ = this.activatedRoute
      .params;
    parametrosConsulta$
      .subscribe(
        {
          next : (queryParams)=>{
            return this.videojuegoService.buscarUno(+queryParams['id']).subscribe(
              {
                next: (datos:VideojuegoInterface) => {
                  this.videojuego=datos;
                  this.prepararformulario()
                },
                error: (error) => {
                  this.prepararformulario()
                  console.error({error});
                }
              }
            )
          },
          error: (error) => {
            console.error({error});
          },
          complete: ()=>{
          }
        }
      )
  }

  prepararformulario(){
    this.formGroup = this.formBuilder.group(
      {
        nombre: new FormControl (
          {
            value: this.videojuego ? this.videojuego.nombre : '',
            disabled:false
          },
          [
            Validators.required,
          ]
        ),
        ventas: new FormControl(
          {
            value: this.videojuego ? this.videojuego.ventas : '',
            disabled:false
          },
          [
            Validators.required,
          ]
        ),
        precio: new FormControl(
          {
            value: this.videojuego ? this.videojuego.precio : '',
            disabled:false
          },
          [
            Validators.required,
          ]
        ),
        plataforma: new FormControl(
          {
            value: this.videojuego ? this.videojuego.plataforma : '',
            disabled:false
          },
          [
            Validators.required,
          ]
        ),
        online: new FormControl(
          {
            value: this.videojuego ? this.videojuego.online: '',
            disabled:false
          },
          [
            Validators.required,
          ]
        ),
      }
    );
  }

  actualizarVideojuego(){
    // @ts-ignore

    this.activatedRoute.queryParams.subscribe(
      {
      next:(queryparams)=>{
        var categoriaId=queryparams['genero']
        var datos ={
          nombre:this.formGroup?.get('nombre')?.value,
          ventas:this.formGroup?.get('ventas')?.value,
          precio:this.formGroup?.get('precio')?.value,
          plataforma:this.formGroup?.get('plataforma')?.value,
          online:this.formGroup?.get('online')?.value,
          categoria_id:categoriaId
        }
        if(this.videojuego){
          this.videojuegoService.actualizarPorId(this.videojuego.id,datos).subscribe({
            next:()=>{
              console.log(categoriaId)
              this.router.navigate(['/generos/',categoriaId])
            },
            error:(error)=>{
              console.error(error)
            }
          })
        }
        else{
          this.videojuegoService.insertarVideojuego(datos).subscribe({
            next:()=>{
              console.log(categoriaId)
              this.router.navigate(['/generos/',categoriaId])
            },
            error:(error)=>{
              console.error(error)
            }
          })
        }
      }
      }
    )

  }
}
