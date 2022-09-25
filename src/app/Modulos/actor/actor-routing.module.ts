import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorComponent } from './actor.component';
import { ActorListadoComponent } from './Vistas/actor-listado/actor-listado.component';
import { AltaActorComponent } from './Vistas/alta-actor/alta-actor.component';

const routes: Routes = [
  { path: '',component:ActorComponent},
      // {path:'listado',component:ActorListadoComponent},
      {path:'alta',component:AltaActorComponent},
      // {path:'**', redirectTo:"listado"}   
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActorRoutingModule { }
