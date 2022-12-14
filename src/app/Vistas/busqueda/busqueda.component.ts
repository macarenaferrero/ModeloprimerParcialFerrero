import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/Entidades/pelicula';
import { enumTipoPeliculas } from 'src/app/utils/enumTipoPelicula';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  peliculas: Pelicula[]=[
    {id: 1, nombre: 'Sonic', tipo: enumTipoPeliculas.PelicularComedia, fecha_estreno:'18/02/2020', cantidad_publico:2500, foto_pelicula:'https://es.web.img2.acsta.net/pictures/19/11/12/12/25/0815514.jpg'},
    {id: 2, nombre: 'Thor ', tipo: enumTipoPeliculas.PelicularOtros, fecha_estreno:'07/06/2004', cantidad_publico:1000, foto_pelicula:'https://lumiere-a.akamaihd.net/v1/images/56015l02_bigsal_argentina_intpayoff_4x5_b6776139.jpeg'},
    {id: 3, nombre: 'Avatar', tipo: enumTipoPeliculas.PelicularAmor, fecha_estreno:'16/12/2007', cantidad_publico:5860, foto_pelicula:'https://www.ecartelera.com/carteles/4200/4261/002_p.jpg'},
    {id: 4, nombre: '1917', tipo: enumTipoPeliculas.PelicularTerror, fecha_estreno:'21/05/2010', cantidad_publico:1089, foto_pelicula:'https://es.web.img3.acsta.net/pictures/20/01/09/15/10/0234685.jpg'}

  ];
  
  peliculaDetalle?:Pelicula;
  elent:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  mostrarDetallePelicula(peliculaRecibida:Pelicula){
    this.peliculaDetalle= peliculaRecibida;
    this.elent = true;
  }

  peliculaAVer(){
    this.elent = false;
  }

  peliculaABorrar(pelicula:Pelicula){   
    const result = this.peliculas.filter((obj) => {
      return obj.id != pelicula.id;
    })
    
    this.peliculas = result;
    this.elent = false;
    //verifico los datos por consola
    console.log(pelicula);
    console.log("lo borra");
    console.log(this.peliculas);
    console.log('Resultado ',result);
  }

  peliculaAModificar(pelicula:Pelicula){
   this.peliculas.forEach(element => {
      if (element.id === pelicula.id) {
          element.nombre === pelicula.nombre;
          element.cantidad_publico === pelicula.cantidad_publico;
          element.fecha_estreno === pelicula.fecha_estreno;
          element.tipo === pelicula.tipo;
      }
    });
    this.elent = false;
  }
  
}
