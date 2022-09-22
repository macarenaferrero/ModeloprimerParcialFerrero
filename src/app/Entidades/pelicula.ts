import { enumTipoPeliculas } from "../utils/enumTipoPelicula";

export class Pelicula {
    id: number|undefined;
    nombre: string|undefined;
    fecha_estreno: string|undefined;
    tipo:enumTipoPeliculas|undefined;
    cantidad_publico:number|undefined;
    foto_pelicula:string|undefined;

    constructor(id: number,nombre: string, tipo: enumTipoPeliculas, cantidad_publico: number, 
        fecha_estreno: string, foto_pelicula: string) {
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.fecha_estreno = fecha_estreno;
        this.cantidad_publico = cantidad_publico;
        this.foto_pelicula = foto_pelicula;
    }
}
