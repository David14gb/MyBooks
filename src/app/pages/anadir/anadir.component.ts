import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { LibrosService } from 'src/app/share/libros.service';

@Component({
  selector: 'app-anadir',
  templateUrl: './anadir.component.html',
  styleUrls: ['./anadir.component.css']
})
export class AnadirComponent implements OnInit {

  constructor(public anadirLibros:LibrosService) { }

  public add(idl:HTMLInputElement, idu:HTMLInputElement, titulo:HTMLInputElement, tipolibro:HTMLInputElement, autor:HTMLInputElement, precio:HTMLInputElement, photo:HTMLInputElement){
  
    let libro1:Libro = new Libro(idl.valueAsNumber, idu.valueAsNumber, titulo.value, tipolibro.value, autor.value, precio.valueAsNumber, photo.value)
    // console.log(libro1);
    this.anadirLibros.add(libro1)

  }

  ngOnInit(): void {
  }

}
