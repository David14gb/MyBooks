import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { LibrosService } from 'src/app/share/libros.service';
import { UsuarioService } from 'src/app/share/usuario.service';

@Component({
  selector: 'app-anadir',
  templateUrl: './anadir.component.html',
  styleUrls: ['./anadir.component.css']
})
export class AnadirComponent implements OnInit {

  constructor(public anadirLibros:LibrosService, public usuarioService:UsuarioService) { }

  public add(titulo:HTMLInputElement, tipo:HTMLInputElement, autor:HTMLInputElement, precio:HTMLInputElement, foto:HTMLInputElement){
  
    let libro1:Libro = new Libro(0, this.usuarioService.usuario.id_usuario, titulo.value, tipo.value, autor.value, precio.valueAsNumber, foto.value)
    // this.usuarioService.usuario1.id_usuario
    console.log("libro1");
    console.log(libro1);
    console.log("this.usuarioService.usuario.id_usuario");
    console.log(this.usuarioService.usuario.id_usuario);
    
    this.anadirLibros.add(libro1).subscribe((data:Libro)=>
    {
      console.log("Data del anadir component");
      
      console.log(data);
      
      // this.anadirLibros.push(data)
    })

  }

  ngOnInit(): void {
  }

}
