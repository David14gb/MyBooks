import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { LibrosService } from 'src/app/share/libros.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  constructor(public modificar:LibrosService) { }

  public editar(idl:HTMLInputElement, idu:HTMLInputElement, titulo:HTMLInputElement, tipolibro:HTMLInputElement, autor:HTMLInputElement, precio:HTMLInputElement, photo:HTMLInputElement){
  
    let libro1:Libro = new Libro(idl.valueAsNumber, idu.valueAsNumber, titulo.value, tipolibro.value, autor.value, precio.valueAsNumber, photo.value)
    // console.log(libro1);
    this.modificar.edit(libro1)

  }

  ngOnInit(): void {
  }

}
