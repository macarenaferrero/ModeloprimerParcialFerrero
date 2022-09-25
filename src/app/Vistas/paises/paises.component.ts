import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Actor } from 'src/app/Entidades/actor';
import { Pais } from 'src/app/Entidades/pais';
import { ActorComponent } from 'src/app/Modulos/actor/actor.component';
import { PaisesService } from 'src/app/Servicios/Paises/paises.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {
  actor:any|Actor;
  paises:Array<any>=[];
  paisSelesccionado:any|Pais;

  @Output()  eventoPaisSeleccionado : EventEmitter<Pais> = new EventEmitter<Pais>();

  constructor(public paisService:PaisesService) { }

  ngOnInit(): void {
  }

  cargarPais(){
    this.paises=[];
    this.paisService.getPaises().subscribe(
      (data:any) => {
        for (let index = 0; index < data.length; index++) {
          const unPais = data[index];
          let nombre = unPais.name.common;
          let foto = unPais.flags.png;
          let paisNuevo: Pais = {
            nombre:nombre,
            foto:foto
          }
          this.paises.push(paisNuevo);
        }
       this.paises= this.paises.slice(0,5);
      }
    );
  }

  emitirPais(pais:Pais)
 {
    this.eventoPaisSeleccionado.emit(pais);
 }
}
