import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
// import { Usuario } from 'src/app/models/usuario';
import { LibrosService } from 'src/app/share/libros.service';
import { UsuarioService } from 'src/app/share/usuario.service';


@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  public libros: Libro[];
  // public usuario: Usuario
  // , public usuarioService:UsuarioService
  constructor(public mostrar:LibrosService, public usuarioService: UsuarioService) { 
    // this.libros = this.mostrar.getAll()
    // this.usuario = this.usuarioService.usuario
  }

  public condicional(id:HTMLInputElement){
    console.log("id.value");
    console.log(id.value);
    if(id.value){
      this.mostrar.getOne(this.usuarioService.usuario.id_usuario,id.valueAsNumber).subscribe((data:Libro[]) =>
      {
        this.libros = [];
        for(let i =0; i< data.length; i++){
          if(data[i].id_libro==id.valueAsNumber) {
            this.libros.push(data[i])
          } 
        console.log("data");
        console.log(data);
        }
      })
    }else{

      this.libros = []
      
      this.mostrar.getAll(this.usuarioService.usuario.id_usuario).subscribe((data:Libro[])=>
      {
        for(let i=0; i<data.length; i++){
        this.libros.push(data[i])
        }
      })
      
      

    // }else{
    //   this.mostrar.getAll(id.valueAsNumber)
    }
  }

  public borrar(id:number){

    console.log(id);
    this.mostrar.delete(id).subscribe((data)=>
    {
      console.log("Delete libros component");
      console.log(data);
      
    })
  }

  ngOnInit(): void {
  }
  // public anadir(idl:HTMLInputElement, idu:HTMLInputElement, titulo:HTMLInputElement, tipolibro:HTMLInputElement, autor:HTMLInputElement, precio:HTMLInputElement, photo:HTMLInputElement){
  
  //     this.libros.push(new Libro(idl.valueAsNumber, idu.valueAsNumber, titulo.value, tipolibro.value, autor.value, precio.valueAsNumber, photo.value))
  // }

}