import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { LibrosService } from 'src/app/share/libros.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  public libros: Libro[];

  constructor(public mostrar:LibrosService) { 
    // this.libros = this.mostrar.getAll(id)
  }

  public condicional(id:HTMLInputElement){
    console.log(id.value);
    if(id.value){
      this.libros = []
      // this.libros[0] = this.mostrar.getOne(id.valueAsNumber)
    }else{
      // this.libros = this.mostrar.getAll(id)
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