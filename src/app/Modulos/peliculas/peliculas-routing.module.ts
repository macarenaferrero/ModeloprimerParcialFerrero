import { EventEmitter, Input, NgModule, Output } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pelicula } from 'src/app/Entidades/pelicula';
import { PeliculasComponent } from './peliculas.component';
import { AltaPeliculaComponent } from './Vistas/alta-pelicula/alta-pelicula.component';
import { PeliculaListadoComponent } from './Vistas/pelicula-listado/pelicula-listado.component';

const routes: Routes = [
  { path: '', component:PeliculasComponent
    // children:[
    //   {path:'listado',component:PeliculaListadoComponent},
    //   {path:'alta',component:AltaPeliculaComponent},
    //   {path:'**', redirectTo:"listado"}
    // ]
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeliculasRoutingModule { 

  @Input()  listadoPeliculas:Pelicula[]=[];
  @Output() onPeliculaSelccionada:EventEmitter<Pelicula>= new EventEmitter();

  mostrarDetallePelicula(pelicula:Pelicula){
    this.onPeliculaSelccionada.emit(pelicula);
  }

}
