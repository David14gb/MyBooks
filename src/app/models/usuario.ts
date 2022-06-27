export class Usuario {
    public id_usuario:number
    constructor(public nombre:string, public apellidos:string,
                public correo:string, public foto:string, public password:string){

        this.nombre = nombre;
        this.apellidos = apellidos;
        this.correo = correo;
        this.foto = foto;
        this.password = password
    }

}
