import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/share/usuario.service';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})
export class FormularioRegistroComponent implements OnInit {

  constructor(public usuario:UsuarioService) { }

  ngOnInit(): void {
  }

  registrarse(nombre:HTMLInputElement, apellido:HTMLInputElement, 
            email:HTMLInputElement, url:HTMLInputElement, 
            contraseña:HTMLInputElement, repetircontra:HTMLInputElement){
    if(contraseña == repetircontra){
        let usuarioNuevo = new Usuario(nombre.value, apellido.value, email.value, url.value, contraseña.value)
        this.usuario.register(usuarioNuevo)
    }else{
      console.log("Las contraseñas no coincicen");
      
    }
  }
}
