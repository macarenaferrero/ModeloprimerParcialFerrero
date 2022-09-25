import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/Entidades/actor';
import { Pais } from 'src/app/Entidades/pais';
import { PaisesService } from 'src/app/Servicios/Paises/paises.service';

@Component({
  selector: 'app-alta-actor',
  templateUrl: './alta-actor.component.html',
  styleUrls: ['./alta-actor.component.css']
})
export class AltaActorComponent implements OnInit {
  actor:any|Actor;
  paisSeleccionado:any|Pais;
  paises:any|Pais = [];
  constructor(public paisService:PaisesService) { }

  ngOnInit(): void {
    this.paisService.getPaises().subscribe(
      data=>{
        this.paisSeleccionado=data;
      }
    )
  }

  pasoPaisADetalle(event:any)
  {
    this.paisSeleccionado=event;
  }
}
