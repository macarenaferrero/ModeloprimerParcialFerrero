export class Actor {
    idActor:number|undefined;
    nombre:string|undefined;
    apellido:string|undefined;
    email:string|undefined;
    ig:string|undefined;
    direccion:string|undefined;
    nacionalidad:string|undefined;

    constructor(idActor: number|undefined,nombre: string|undefined, apellido: string|undefined, email: string|undefined, 
        ig: string|undefined, direccion: string|undefined, nacionalidad: string|undefined) {
         this.idActor = idActor;
         this.nombre = nombre;
         this.apellido = apellido;
         this.email = email;
         this.ig = ig;
         this.direccion = direccion;
         this.nacionalidad = nacionalidad;
     }
}
