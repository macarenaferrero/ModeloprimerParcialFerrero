import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActorRoutingModule } from './actor-routing.module';
import { ActorComponent } from './actor.component';
import { AltaActorComponent } from 'src/app/Modulos/actor/Vistas/alta-actor/alta-actor.component';
import { ActorListadoComponent } from 'src/app/Modulos/actor/Vistas/actor-listado/actor-listado.component';


@NgModule({
  declarations: [
    ActorComponent,
    AltaActorComponent,
    ActorListadoComponent,
  ],
  imports: [
    CommonModule,
    ActorRoutingModule
  ]
  // exports:[
  //   ActorListadoComponent,
  //   AltaActorComponent,
  //   ActorComponent
  // ]
})
export class ActorModule { }
