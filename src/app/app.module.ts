import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActorModule } from './Modulos/actor/actor.module';
import { PeliculasModule } from './Modulos/peliculas/peliculas.module';
import { BusquedaComponent } from './Vistas/busqueda/busqueda.component';
import { ErrorComponent } from './Vistas/error/error.component';
import { BienvenidoComponent } from './Vistas/bienvenido/bienvenido.component';
import { BorrarPeliculaComponent } from './Modulos/peliculas/Vistas/borrar-pelicula/borrar-pelicula.component';
import { TablaPeliculasComponent } from './Modulos/peliculas/Vistas/tabla-pelicula/tabla-pelicula.component';
@NgModule({
  declarations: [
    AppComponent,
    BusquedaComponent,
    ErrorComponent,
    BienvenidoComponent,
    BorrarPeliculaComponent,
    TablaPeliculasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ActorModule,
    PeliculasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
