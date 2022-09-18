import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
export class PeliculasRoutingModule { }
