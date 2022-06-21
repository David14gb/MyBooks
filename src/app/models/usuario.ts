export class Usuario {
    constructor(public id_usuario:number, public nombre:string, public apellido:string,
                public correo:string, public url:string, public password:string){

        this.id_usuario = id_usuario;
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.url = url;
        this.password = password
    }

}
