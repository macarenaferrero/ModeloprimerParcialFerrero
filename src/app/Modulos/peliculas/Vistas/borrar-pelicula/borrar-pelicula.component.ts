import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from 'src/app/Entidades/pelicula';

@Component({
  selector: 'app-borrar-pelicula',
  templateUrl: './borrar-pelicula.component.html',
  styleUrls: ['./borrar-pelicula.component.css']
})
export class BorrarPeliculaComponent implements OnInit {

  @Input() peliculaDetalle?: Pelicula;
  @Output() onPeliculaABorrar:EventEmitter<Pelicula>= new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  BorrarPelicula(pelicula:Pelicula){
    this.onPeliculaABorrar.emit(pelicula);
  }
}
