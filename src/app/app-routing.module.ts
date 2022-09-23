import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ActorModule } from './Modulos/actor/actor.module';
import { PeliculasModule } from './Modulos/peliculas/peliculas.module';
import { BienvenidoComponent } from './Vistas/bienvenido/bienvenido.component';
import { BusquedaComponent } from './Vistas/busqueda/busqueda.component';
import { ErrorComponent } from './Vistas/error/error.component';

const routes: Routes = [
  // {path:'bienvenido',component:BienvenidoComponent},
  {path: 'peliculas', loadChildren:()=>import('./Modulos/peliculas/peliculas.module').then(m => PeliculasModule)},
  {path: 'actor', loadChildren:()=>import('./Modulos/actor/actor.module').then(m => ActorModule)},
  {path:'busqueda',component:BusquedaComponent},
  {path: '', redirectTo:'/bienvenido',pathMatch:'full'},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
