export class Libro {
    public id_libro:number
    public id_usuario:number
    public titulo:string
    public tipoLibro:string
    public autor:string
    public precio:number
    public photo:string
    constructor(id_libro:number=0, id_usuario:number=0, titulo:string,
                tipoLibro:string, autor:string, precio:number, photo:string){
                
        this.id_libro = id_libro;
        this.id_usuario = id_usuario;
        this.titulo = titulo;
        this.tipoLibro = tipoLibro;
        this.autor = autor;
        this.precio = precio;
        this.photo = photo
    }
}