import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  constructor(public apiService:UsuarioService, public router:Router) { 
    this.usuario = new Usuario(null, null, null, null, null)
  }

  ngOnInit(): void {
  }
  
  iniciarSesion(){
    console.log("hola");
    
    // console.log(this.usuario.correo);
    // console.log(this.usuario.password);
    let inicioSesion = new Usuario (null, null, this.usuario.correo, null, this.usuario.password)
    this.apiService.login(inicioSesion).subscribe((data:any) => 
    {
      console.log(this.usuario.correo);
      console.log(this.usuario.password);
      
      // console.log("data");
      // console.log(data);
      this.apiService.usuario = data.result[0];
      console.log("Data[0]");
      console.log(data[0]);
      // console.log("apiService");
      // console.log(this.apiService);
      

      if(data.error == false){
        this.apiService.logueado = true;
        this.router.navigateByUrl('/libro')
        console.log("apiService con data error false");
        console.log(this.apiService);
        
      }
      
    })
    console.log("Inicio Sesión correcto");
    

  }

  
  // goLibros(){
  //   this.router.navigateByUrl('/libros')
  // }

}
