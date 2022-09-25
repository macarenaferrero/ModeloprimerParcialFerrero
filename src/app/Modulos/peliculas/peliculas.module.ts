import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeliculasRoutingModule } from './peliculas-routing.module';
import { PeliculasComponent } from './peliculas.component';
import { AltaPeliculaComponent } from 'src/app/Modulos/peliculas/Vistas/alta-pelicula/alta-pelicula.component';
import { PeliculaListadoComponent } from 'src/app/Modulos/peliculas/Vistas/pelicula-listado/pelicula-listado.component';
import { FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    PeliculasComponent,
    AltaPeliculaComponent,
    PeliculaListadoComponent,
  ],
  imports: [
    CommonModule,
    PeliculasRoutingModule,
    FormsModule,
  ],
  exports:[
  ]
})
export class PeliculasModule { }
