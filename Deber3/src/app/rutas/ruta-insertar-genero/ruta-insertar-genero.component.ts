import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {GeneroInterface} from "../../services/http/interface/genero.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {GenerosService} from "../../services/http/generos.service";

@Component({
  selector: 'app-ruta-insertar-genero',
  templateUrl: './ruta-insertar-genero.component.html',
  styleUrls: ['./ruta-insertar-genero.component.css']
})
export class RutaInsertarGeneroComponent implements OnInit {

  formGroup ?: FormGroup;
  genero?:GeneroInterface;

  constructor(private readonly formBuilder: FormBuilder,
              private readonly activatedRoute: ActivatedRoute,
              private readonly generoService: GenerosService,
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
            return this.generoService.buscarUno(+queryParams['id']).subscribe(
              {
                next: (datos:GeneroInterface) => {
                  this.genero=datos;
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
            value: this.genero ? this.genero.nombre : '',
            disabled:false
          },
          [
            Validators.required,
          ]
        ),
        año: new FormControl(
          {
            value: this.genero ? this.genero.anio : '',
            disabled:false
          },
          [
            Validators.required,
          ]
        ),
        juego: new FormControl(
          {
            value: this.genero ? this.genero.juego : '',
            disabled:false
          },
          [
            Validators.required,
          ]
        ),
        ga : new FormControl(
          {
            value: this.genero ? this.genero.ga : '',
            disabled:false
          },
          [
            Validators.required,
          ]
        ),
        clasificacion: new FormControl(
          {
            value: this.genero ? this.genero.clasificacion: '',
            disabled:false
          },
          [
            Validators.required,
          ]
        ),
      }
    );
    const cambio$ = this.formGroup.valueChanges;
    cambio$.subscribe({
      next:(valor)=>{
        console.log(valor, this.formGroup);
        if(this.formGroup?.valid){
          console.log("YUPI")
        }else{
          console.log(":(")
        }
      }
    })
  }

  actualizarGenero(){
    var datos ={
      nombre:this.formGroup?.get('nombre')?.value,
      anio:this.formGroup?.get('año')?.value,
      juego:this.formGroup?.get('juego')?.value,
      ga:this.formGroup?.get('ga')?.value,
      clasificacion:this.formGroup?.get('clasificacion')?.value,
    }
    if(this.genero){
      this.generoService.actualizarPorId(this.genero.id,datos).subscribe({
        next:()=>{
          this.router.navigate(['generos'])
        },
        error:(error)=>{
          console.error(error)
        }
      })
    }
    else{
      this.generoService.insertarGenero(datos).subscribe({
        next:()=>{
          this.router.navigate(['generos'])
        },
        error:(error)=>{
          console.error(error)
      }
      })
    }
  }

}
