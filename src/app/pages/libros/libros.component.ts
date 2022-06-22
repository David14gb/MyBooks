import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

          public libros: Libro[];
  constructor() { 

        this.libros = [
          new Libro(1, 1, "Thor el libro", "Tapa dura", "Thor", 50, "https://www.enter.co/wp-content/uploads/2017/10/thor-the-dark-world-1024x767.jpg"),
          new Libro(2, 2, "Spiderman el libro", "Tapa blanda", "Spiderman", 40, "https://www.cinemascomics.com/wp-content/uploads/2022/03/Spider-Man-No-Way-Home-traje-final.jpg"),
          new Libro(3, 3, "Marvel el libro", "Kindle", "Marvel", 30, "https://www.zonanegativa.com/imagenes/2019/05/WTF_Destacada_2.jpg"),
          new Libro(1, 1, "Thor el libro", "Tapa dura", "Thor", 50, "https://www.enter.co/wp-content/uploads/2017/10/thor-the-dark-world-1024x767.jpg"),
          new Libro(2, 2, "Spiderman el libro", "Tapa blanda", "Spiderman", 40, "https://www.cinemascomics.com/wp-content/uploads/2022/03/Spider-Man-No-Way-Home-traje-final.jpg"),
          new Libro(1, 1, "Thor el libro", "Tapa dura", "Thor", 50, "https://www.enter.co/wp-content/uploads/2017/10/thor-the-dark-world-1024x767.jpg"),
          new Libro(2, 2, "Spiderman el libro", "Tapa blanda", "Spiderman", 40, "https://www.cinemascomics.com/wp-content/uploads/2022/03/Spider-Man-No-Way-Home-traje-final.jpg"),
          new Libro(1, 1, "Thor el libro", "Tapa dura", "Thor", 50, "https://www.enter.co/wp-content/uploads/2017/10/thor-the-dark-world-1024x767.jpg"),
          new Libro(2, 2, "Spiderman el libro", "Tapa blanda", "Spiderman", 40, "https://www.cinemascomics.com/wp-content/uploads/2022/03/Spider-Man-No-Way-Home-traje-final.jpg"),
          new Libro(1, 1, "Thor el libro", "Tapa dura", "Thor", 50, "https://www.enter.co/wp-content/uploads/2017/10/thor-the-dark-world-1024x767.jpg"),
          new Libro(2, 2, "Spiderman el libro", "Tapa blanda", "Spiderman", 40, "https://www.cinemascomics.com/wp-content/uploads/2022/03/Spider-Man-No-Way-Home-traje-final.jpg"),
          new Libro(3, 3, "Marvel el libro", "Kindle", "Marvel", 30, "https://www.zonanegativa.com/imagenes/2019/05/WTF_Destacada_2.jpg"),
          new Libro(1, 1, "Thor el libro", "Tapa dura", "Thor", 50, "https://www.enter.co/wp-content/uploads/2017/10/thor-the-dark-world-1024x767.jpg"),
          new Libro(2, 2, "Spiderman el libro", "Tapa blanda", "Spiderman", 40, "https://www.cinemascomics.com/wp-content/uploads/2022/03/Spider-Man-No-Way-Home-traje-final.jpg"),
          new Libro(3, 3, "Marvel el libro", "Kindle", "Marvel", 30, "https://www.zonanegativa.com/imagenes/2019/05/WTF_Destacada_2.jpg"),
          
        ]
  }

  ngOnInit(): void {
  }
  public anadir(idl:HTMLInputElement, idu:HTMLInputElement, titulo:HTMLInputElement, tipolibro:HTMLInputElement, autor:HTMLInputElement, precio:HTMLInputElement, photo:HTMLInputElement){
  
      this.libros.push(new Libro(idl.valueAsNumber, idu.valueAsNumber, titulo.value, tipolibro.value, autor.value, precio.valueAsNumber, photo.value))
  }

}
