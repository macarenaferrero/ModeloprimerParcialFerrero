import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActorRoutingModule } from './actor-routing.module';
import { ActorComponent } from './actor.component';
import { AltaActorComponent } from 'src/app/Modulos/actor/Vistas/alta-actor/alta-actor.component';
import { ActorListadoComponent } from 'src/app/Modulos/actor/Vistas/actor-listado/actor-listado.component';
import { PaisesComponent } from 'src/app/Vistas/paises/paises.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { PaisesService } from 'src/app/Servicios/Paises/paises.service';

@NgModule({
  declarations: [
    ActorComponent,
    AltaActorComponent,
    ActorListadoComponent,
    PaisesComponent,

  ],
  imports: [
    CommonModule,
    ActorRoutingModule,
    HttpClientModule
  ],
  providers: [PaisesService],
  // exports:[
  //   ActorListadoComponent,
  //   AltaActorComponent,
  //   ActorComponent
  // ]
})
export class ActorModule { }
