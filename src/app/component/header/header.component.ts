import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/share/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public logueado:boolean

  constructor(public apiService:UsuarioService) {
    this.logueado = this.apiService.logueado
   }

  ngOnInit(): void {
  }

 

}
