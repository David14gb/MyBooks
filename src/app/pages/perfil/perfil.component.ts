import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

        public usuarioOne: Usuario;
  constructor() { 

        this.usuarioOne = new Usuario(1, "Thor", "Thunder", "thor@gmail.com",
                  "https://static01.nyt.com/images/2017/11/02/arts/03thor-webmain-ES/03thor-webmain-superJumbo.jpg",
                  "thorpassword")
  }

  ngOnInit(): void {
  }
  enviar(nNombre: HTMLInputElement, nApellido: HTMLInputElement, nCorreo: HTMLInputElement, nUrl: HTMLInputElement){
    
      console.log(this.usuarioOne.nombre, this.usuarioOne.apellido,
                  this.usuarioOne.correo, this.usuarioOne.url);

      this.usuarioOne.nombre = nNombre.value; 
      this.usuarioOne.apellido = nApellido.value; 
      this.usuarioOne.correo = nCorreo.value; 
      this.usuarioOne.url = nUrl.value; 

      console.log(this.usuarioOne.nombre, this.usuarioOne.apellido,
                  this.usuarioOne.correo, this.usuarioOne.url);
  }
}
