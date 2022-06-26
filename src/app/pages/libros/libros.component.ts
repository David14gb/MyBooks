import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
// import { Usuario } from 'src/app/models/usuario';
import { LibrosService } from 'src/app/share/libros.service';
// import { UsuarioService } from 'src/app/share/usuario.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  public libros: Libro[];
  // public usuario: Usuario
  // , public usuarioService:UsuarioService
  constructor(public mostrar:LibrosService) { 
    // this.libros = this.mostrar.getAll()
    // this.usuario = this.usuarioService.usuario
  }

  public condicional(id:HTMLInputElement){
    console.log(id.value);
    if(id.value){
      this.libros = []
      // this.mostrar.getOne(id.valueAsNumber)
      this.mostrar.getAll(id.valueAsNumber).subscribe((data:Libro[])=>
      {
        for(let i=0; i<data.length; i++){
        this.libros.push(data[i])
        }
      })
      console.log("mostrargetall");
      console.log(this.mostrar.getAll(id.valueAsNumber));
      

    // }else{
    //   this.mostrar.getAll(id.valueAsNumber)
    }
  }

  public borrar(id){

    console.log(id);
    this.mostrar.delete(id)
  }

  ngOnInit(): void {
  }
  // public anadir(idl:HTMLInputElement, idu:HTMLInputElement, titulo:HTMLInputElement, tipolibro:HTMLInputElement, autor:HTMLInputElement, precio:HTMLInputElement, photo:HTMLInputElement){
  
  //     this.libros.push(new Libro(idl.valueAsNumber, idu.valueAsNumber, titulo.value, tipolibro.value, autor.value, precio.valueAsNumber, photo.value))
  // }

}