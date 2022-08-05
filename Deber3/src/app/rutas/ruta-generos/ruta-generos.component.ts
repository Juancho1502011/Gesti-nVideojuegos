import {Component, OnInit, ViewChild} from '@angular/core';
import {GeneroInterface} from "../../services/http/interface/genero.interface";
import {GenerosService} from "../../services/http/generos.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Table} from "primeng/table";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-ruta-generos',
  templateUrl: './ruta-generos.component.html',
  styleUrls: ['./ruta-generos.component.css']
})
export class RutaGenerosComponent implements OnInit {

  formGroup !: FormGroup
  arreglos:GeneroInterface[] = [];
  @ViewChild('dt1')
  dt: Table | undefined;
  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly generoService : GenerosService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) { }



  ngOnInit(): void {
      this.generoService
        .mostrarTodos ()
        .subscribe({
          next: (datos:GeneroInterface[]) => {
              this.arreglos=datos;
              this.leerConsulta()

          },
          error: (error) => {
            console.error({error});
          }
        })
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

  mostrarDetalle(id:number){
    this.router.navigate(['/generos',id])
  }
  actualizarGenero(id:number){
    this.router.navigate(['/insertarGenero',id])
  }
  insertarGenero(){
    this.router.navigate(['/insertarGenero','none'])
  }
  buscar(){
    var query=this.formGroup.get('buscar')?.value
    this.dt?.filterGlobal(query,'contains')
    this.router.navigate(['/generos'],{queryParams:{search:query}})
  }
  eliminarGenero(id:number){
    this.generoService.eliminarGenero(id).subscribe({
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
