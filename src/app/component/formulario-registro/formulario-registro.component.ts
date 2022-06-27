import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/share/usuario.service';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})
export class FormularioRegistroComponent implements OnInit {

  public usuario:Usuario
  constructor(public apiService:UsuarioService) { }

  ngOnInit(): void {
  }

  registrarse(nombre:HTMLInputElement, apellidos:HTMLInputElement, 
            email:HTMLInputElement, url:HTMLInputElement, 
            contraseña:HTMLInputElement, repetircontra:HTMLInputElement){
    if(contraseña.value == repetircontra.value){
        let usuarioNuevo = new Usuario(nombre.value, apellidos.value, email.value, url.value, contraseña.value)
        this.apiService.register(usuarioNuevo).subscribe((data:Usuario[]) =>
        {
          console.log(data);
          
        })
        
        console.log("Usuario Registrado");
        
    }else{
      console.log("Las contraseñas no coincicen");
      
    }
  }
}
