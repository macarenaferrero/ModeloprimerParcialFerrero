import { enumTipoPeliculas } from "../utils/enumTipoPelicula";

export class Pelicula {
    id: number|undefined;
    nombre: string|undefined;
    fecha_estreno: string|undefined;
    tipo:enumTipoPeliculas|undefined;
    cantidad_publico:number|undefined;
    foto_pelicula:string|undefined;

     constructor(id: number|undefined,nombre: string|undefined, tipo: enumTipoPeliculas|undefined, cantidad_publico: number|undefined, 
        fecha_estreno: string|undefined, foto_pelicula: string|undefined) {
         this.id = id;
         this.nombre = nombre;
         this.tipo = tipo;
         this.fecha_estreno = fecha_estreno;
         this.cantidad_publico = cantidad_publico;
         this.foto_pelicula = foto_pelicula;
     }
}
