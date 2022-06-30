
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Libro } from 'src/app/models/libro';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() librosPadre:Libro;
  @Input() posicionEven:boolean;
  @Output() eventoLibro = new EventEmitter<number>();

  public libros: Libro[];

  constructor() { }
  borrar(id:number){
    
    
    this.eventoLibro.emit(this.librosPadre.id_libro);
    console.log(this.librosPadre.id_libro);
  }


  ngOnInit(): void {
  }

}
