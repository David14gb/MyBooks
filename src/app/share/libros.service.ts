import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro } from '../models/libro';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  private libros:Libro[] = [
    // new Libro(1, 1, "Thor el libro", "Tapa dura", "Thor", 50, "https://www.enter.co/wp-content/uploads/2017/10/thor-the-dark-world-1024x767.jpg"),
    // new Libro(2, 2, "Spiderman el libro", "Tapa blanda", "Spiderman", 40, "https://www.cinemascomics.com/wp-content/uploads/2022/03/Spider-Man-No-Way-Home-traje-final.jpg"),
    // new Libro(3, 3, "Marvel el libro", "Kindle", "Marvel", 30, "https://www.zonanegativa.com/imagenes/2019/05/WTF_Destacada_2.jpg"),
    // new Libro(4, 4, "Thor el libro", "Tapa dura", "Thor", 50, "https://www.enter.co/wp-content/uploads/2017/10/thor-the-dark-world-1024x767.jpg"),
    // new Libro(5, 5, "Spiderman el libro", "Tapa blanda", "Spiderman", 40, "https://www.cinemascomics.com/wp-content/uploads/2022/03/Spider-Man-No-Way-Home-traje-final.jpg"),
    // new Libro(6, 6, "Marvel el libro", "Kindle", "Marvel", 30, "https://www.zonanegativa.com/imagenes/2019/05/WTF_Destacada_2.jpg")
  ];
  private url:string = "http://localhost:3000/libros";

  constructor(private http: HttpClient) { };

  public getLibros():Libro[]{ //Es lo mismo que el getAll()

    return this.libros
  }
  public setLibros(libros:Libro[]):void{
    this.libros = libros
  }

// Métodos

  public getAll(id_usuario:number):Observable<Object>{

    console.log("Libro en GetAll Service id_usuario");
    console.log(id_usuario);
    
    return this.http.get(this.url +"?id_usuario=" + id_usuario)
    
  };
 
  public getOne(id_usuario:number, id_libro:number):Observable<Object>{

    // let result:Libro = null;
    for(let i=0; i<this.libros.length;i++){
      if(this.libros[i].id_libro == id_libro){
      // result = this.libros[i]
      }
    }

    console.log("Libro en GetOne Service");
    return this.http.get(this.url + "?id=" + id_libro)
    // return result
  }
  public add(libro:Libro):Observable<Object>{
    
    console.log("Libro en Add Service");
    console.log(libro);
    
    this.libros.push(libro)
    return this.http.post(this.url, libro)
  };
  public edit(libro:Libro):Observable<Object>{

    console.log(libro);
    
    for(let i=0; i<this.libros.length;i++){
      if(this.libros[i].id_libro == libro.id_libro){
        libro.id_usuario != null ? this.libros[i].id_usuario = libro.id_usuario : this.libros[i].id_usuario;
        libro.titulo != "" ? this.libros[i].titulo = libro.titulo : this.libros[i].titulo;
        libro.tipo != '' ?  this.libros[i].tipo = libro.tipo : this.libros[i].tipo;
        libro.autor != "" ? this.libros[i].autor = libro.autor : this.libros[i].autor;
        libro.precio != null ? this.libros[i].precio = libro.precio : this.libros[i].precio;
        libro.foto != "" ? this.libros[i].foto = libro.foto : this.libros[i].foto
      }
    }
    
    console.log("Libro en Edit Service");
    return this.http.put(this.url, libro)//true
  }
  public delete(id_libro:number):Observable<Object>{
    // let result:boolean = false;
    console.log("id_libro delete service");
    console.log(id_libro);
    // console.log(this.libros);
    
    // for(let i=0; i<this.libros.length;i++){
      // if(id_libro){
        
        
        
        // splice(id_libro, 1)

        // console.log(this.libros.length);
        
        console.log("Libro en Delete Service");
        return this.http.delete(this.url, {[id_libro]:Number})
      // }else{
        // console.log("Libro en Delete Service Parte False");
        // return result = false
      // }
    }
    
  // }

}
