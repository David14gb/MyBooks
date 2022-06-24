export class Usuario {
    private id_usuario:number
    constructor(public nombre:string, public apellido:string,
                public correo:string, public url:string, public password:string){

        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.url = url;
        this.password = password
    }

}
