import { Injectable } from '@angular/core';
import { Libro } from '../models/libro';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  private libros:Libro[] = [
    new Libro(1, 1, "Thor el libro", "Tapa dura", "Thor", 50, "https://www.enter.co/wp-content/uploads/2017/10/thor-the-dark-world-1024x767.jpg"),
    new Libro(2, 2, "Spiderman el libro", "Tapa blanda", "Spiderman", 40, "https://www.cinemascomics.com/wp-content/uploads/2022/03/Spider-Man-No-Way-Home-traje-final.jpg"),
    new Libro(3, 3, "Marvel el libro", "Kindle", "Marvel", 30, "https://www.zonanegativa.com/imagenes/2019/05/WTF_Destacada_2.jpg"),
    new Libro(4, 4, "Thor el libro", "Tapa dura", "Thor", 50, "https://www.enter.co/wp-content/uploads/2017/10/thor-the-dark-world-1024x767.jpg"),
    new Libro(5, 5, "Spiderman el libro", "Tapa blanda", "Spiderman", 40, "https://www.cinemascomics.com/wp-content/uploads/2022/03/Spider-Man-No-Way-Home-traje-final.jpg"),
    new Libro(6, 6, "Marvel el libro", "Kindle", "Marvel", 30, "https://www.zonanegativa.com/imagenes/2019/05/WTF_Destacada_2.jpg")
  ];

  constructor() { };

  public getLibros():Libro[]{ //Es lo mismo que el getAll()

    return this.libros
  }
  public setLibros(libros:Libro[]):void{
    this.libros = libros
  }

// Métodos

  public getAll():Libro[]{

    console.log("Libro en GetAll Service");
    return this.libros
    
  };
  public getOne(id_libro:number):Libro{

    let result:Libro = null;
    for(let i=0; i<this.libros.length;i++){
      if(this.libros[i].id_libro == id_libro){
      result = this.libros[i]
      }
    }

    console.log("Libro en GetOne Service");
    return result
  }
  public add(libro:Libro):void{
    
    console.log("Libro en Add Service");
    console.log(libro);
    
    this.libros.push(libro)
  };
  public edit(libro:Libro):boolean{

    console.log(libro);
    
    for(let i=0; i<this.libros.length;i++){
      if(this.libros[i].id_libro == libro.id_libro){
        libro.id_usuario ? this.libros[i].id_usuario = libro.id_usuario : this.libros[i].id_usuario;
        libro.titulo ? this.libros[i].titulo = libro.titulo : this.libros[i].titulo;
        libro.tipoLibro ?  this.libros[i].tipoLibro = libro.tipoLibro : this.libros[i].tipoLibro;
        libro.autor ? this.libros[i].autor = libro.autor : this.libros[i].autor;
        libro.precio ? this.libros[i].precio = libro.precio : this.libros[i].precio;
        libro.photo ? this.libros[i].photo = libro.photo : this.libros[i].photo
      }
    }
    
    console.log("Libro en Edit Service");
    return true
  }
  public delete(id_libro:number):boolean{
    let result:boolean = false;
    for(let i=0; i<this.libros.length;i++){
      if(id_libro == this.libros[i].id_libro){
        this.libros.splice(i, 1)

        console.log(this.libros);
        
        console.log("Libro en Delete Service");
        return result = true
      }else{
        console.log("Libro en Delete Service Parte False");
        // return result = false
      }
    }
    
  }

}
