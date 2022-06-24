import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/share/usuario.service';

@Component({
  selector: 'app-formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrls: ['./formulario-login.component.css']
})
export class FormularioLoginComponent implements OnInit {

  public usuario: Usuario
  constructor(public apiServicve:UsuarioService) { }

  ngOnInit(): void {
  }
  
  iniciarSesion(correo:HTMLInputElement, contraseña:HTMLInputElement){
    let inicioSesion = new Usuario ("", "", correo.value, "", contraseña.value)
    this.apiServicve.login(inicioSesion).subscribe((data:Usuario[]) => 
    {
      this.usuario = data[0]
    })
    console.log("Inicio Sesión correcto");
    

  }

}
