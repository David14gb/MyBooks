import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/share/usuario.service';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})
export class FormularioRegistroComponent implements OnInit {

  public usuario:Usuario;
  public repetirPassword:string
  constructor(public apiService:UsuarioService) { 
    this.usuario = new Usuario(null, null, null, null, null)
  }
  
  ngOnInit(): void {
  }

  registrarse(){
    console.log("hola");
    if(this.usuario.password == this.repetirPassword){
        let usuarioNuevo = new Usuario(this.usuario.nombre, this.usuario.apellidos, this.usuario.correo, this.usuario.foto, this.usuario.password)
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
