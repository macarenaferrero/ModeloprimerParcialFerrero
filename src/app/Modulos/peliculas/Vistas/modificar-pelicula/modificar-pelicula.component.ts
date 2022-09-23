import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Pelicula } from 'src/app/Entidades/pelicula';
import { enumTipoPeliculas } from 'src/app/utils/enumTipoPelicula';

@Component({
  selector: 'app-modificar-pelicula',
  templateUrl: './modificar-pelicula.component.html',
  styleUrls: ['./modificar-pelicula.component.css']
})
export class ModificarPeliculaComponent implements OnInit {

  @Input() peliculaDetalle?:Pelicula;
  @Output() onPeliculaAModificar:EventEmitter<Pelicula>= new EventEmitter();

  formModificar:FormGroup;
  public opcionestipos = Object.values(enumTipoPeliculas);
  constructor(private fb:FormBuilder) { 
    this.formModificar = fb.group({
      nombre:[""],
      estreno:[""],
      publico:[""],
      tipo:[""],
      })
  }
  ngOnInit(): void {
  }
  modificarPelicula(peliculaAEditar:Pelicula){
    if(peliculaAEditar != undefined){
      peliculaAEditar.cantidad_publico = this.formModificar.value.cantidad_publico;
      peliculaAEditar.nombre = this.formModificar.value.nombre;
      peliculaAEditar.fecha_estreno = this.formModificar.value.fecha_estreno;
      peliculaAEditar.tipo = this.formModificar.value.tipo;
    }
  }
}
