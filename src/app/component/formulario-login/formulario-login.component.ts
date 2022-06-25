import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/share/usuario.service';


@Component({
  selector: 'app-formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrls: ['./formulario-login.component.css']
})
export class FormularioLoginComponent implements OnInit {

  public usuario: Usuario
  constructor(public apiServicve:UsuarioService, public router:Router) { }

  ngOnInit(): void {
  }
  
  iniciarSesion(correo:HTMLInputElement, contraseña:HTMLInputElement){
    let inicioSesion = new Usuario ("", "", correo.value, "", contraseña.value)
    this.apiServicve.login(inicioSesion).subscribe((data) => 
    {
      // console.log("data");
      // console.log(data);
      this.apiServicve.logueado = true
      this.apiServicve.usuario = data[0]
      console.log("Data[0]");
      console.log(data[0]);

      if(data[0].error == false){
        this.router.navigateByUrl('/libro')
      }
      
    })
    console.log("Inicio Sesión correcto");
    

  }

  
  // goLibros(){
  //   this.router.navigateByUrl('/libros')
  // }

}
