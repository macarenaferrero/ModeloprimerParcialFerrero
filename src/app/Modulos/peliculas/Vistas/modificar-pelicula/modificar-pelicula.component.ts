import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from 'src/app/Entidades/pelicula';
import { enumTipoPeliculas } from 'src/app/utils/enumTipoPelicula';

@Component({
  selector: 'app-modificar-pelicula',
  templateUrl: './modificar-pelicula.component.html',
  styleUrls: ['./modificar-pelicula.component.css']
})
export class ModificarPeliculaComponent implements OnInit {

  @Input() peliculaDetalle:any | Pelicula;
  @Output() onPeliculaAModificar:EventEmitter<Pelicula>= new EventEmitter();
  nuevaPelicula = Pelicula;
  
  public opcionestipos = Object.values(enumTipoPeliculas);
  constructor() { 
   
  }
  ngOnInit(): void {
  }
  modificarPelicula(peliculaModificada:Pelicula){
    this.onPeliculaAModificar.emit(peliculaModificada);
  }
}
