import {Component, OnInit, ViewChild} from '@angular/core';
import {GeneroInterface} from "../../services/http/interface/genero.interface";
import {GenerosService} from "../../services/http/generos.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {Table} from "primeng/table";
import {VideojuegosService} from "../../services/http/videojuegos.service";

@Component({
  selector: 'app-ruta-genero-detalle',
  templateUrl: './ruta-genero-detalle.component.html',
  styleUrls: ['./ruta-genero-detalle.component.css']
})
export class RutaGeneroDetalleComponent implements OnInit {

  genero:GeneroInterface={} as GeneroInterface
  formGroup !: FormGroup
  @ViewChild('dt1')
  dt: Table | undefined;

  constructor(
    private readonly generoService : GenerosService,
    private readonly videoJuegoService: VideojuegosService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) { }



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
                this.leerConsulta();
                },
              error: (error) => {
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

  leerConsulta(){
    this.activatedRoute.queryParams.subscribe(
      {
        next:(queryParams)=>{
          this.formGroup = new FormGroup(
            {
              buscar: new FormControl (
                {
                  value: queryParams['search'],
                  disabled:false
                }
              )
            }
          );
          setTimeout(()=>{
            return this.dt?.filterGlobal(queryParams['search'],'contains')
          },100)
        }
      }
    )
  }

  actualizarVideojuego(id:number){
    this.router.navigate(['/insertarVideojuego',id],{queryParams:{genero:this.genero.id}})
  }
  insertarVideojuego(){
    this.router.navigate(['/insertarVideojuego','none'],{queryParams:{genero:this.genero.id}})
  }
  buscar(){
    var query=this.formGroup.get('buscar')?.value
    this.dt?.filterGlobal(query,'contains')
    this.router.navigate([],{relativeTo: this.activatedRoute,queryParams:{search:query}})
  }
  eliminarVideojuego(id:number){
    this.videoJuegoService.eliminarVideojuego(id).subscribe({
        next:()=>{
          this.ngOnInit()
        }
      }
    )
  }
  applyFilterGlobal($event: any, stringVal: any) {
    this.dt!.filterGlobal(($event.target as HTMLInputElement).value, 'contains');
  }
}
