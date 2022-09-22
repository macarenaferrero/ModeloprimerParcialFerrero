import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActorModule } from './Modulos/actor/actor.module';
import { PeliculasModule } from './Modulos/peliculas/peliculas.module';
import { BusquedaComponent } from './Vistas/busqueda/busqueda.component';
import { ErrorComponent } from './Vistas/error/error.component';
import { BienvenidoComponent } from './Vistas/bienvenido/bienvenido.component';
import { TablaPeliculasComponent } from './Vistas/tabla-peliculas/tabla-peliculas.component';
@NgModule({
  declarations: [
    AppComponent,
    BusquedaComponent,
    ErrorComponent,
    BienvenidoComponent,
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
