import { enumTipoPeliculas } from "../utils/enumTipoPelicula";

export class Pelicula {
    id: number|undefined;
    nombre: number|undefined;
    fecha_estreno: number|undefined;
    tipo:enumTipoPeliculas|undefined;
    cantidad_publico:number|undefined;
    foto_pelicula:string|undefined;
}
