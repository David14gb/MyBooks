import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
// import { Usuario } from 'src/app/models/usuario';
import { LibrosService } from 'src/app/share/libros.service';
import { UsuarioService } from 'src/app/share/usuario.service';


@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  public libros: Libro[];
  // public usuario: Usuario
  // , public usuarioService:UsuarioService
  constructor(public mostrar:LibrosService, public usuarioService: UsuarioService) { 
    // this.libros = this.mostrar.getAll()
    // this.usuario = this.usuarioService.usuario
  }

  public condicional(id:HTMLInputElement){
    console.log("id.value");
    console.log(id.value);
    if(id.value){
      this.mostrar.getOne(this.usuarioService.usuario.id_usuario,id.valueAsNumber).subscribe((data:Libro[]) =>
      {
        console.log("data");
        console.log(data);
        
        this.libros = data;
        
      })
    }else{


      
      this.mostrar.getAll(this.usuarioService.usuario.id_usuario).subscribe((data:Libro[])=>
      {
        this.libros = data
      })
      
      

    // }else{
    //   this.mostrar.getAll(id.valueAsNumber)
    }
  }

  public borrar(id:number){

    // this.idBorrado = id;
    console.log(id);
    // console.log(this.idBorrado);
    
    console.log("this.libros");
    console.log(this.libros);
    let filtro = this.libros.filter(filtrar => filtrar.id_libro == id)
    
    console.log("filtro");
    console.log(filtro);
    
    let borrar
    borrar = this.libros.indexOf(filtro[0])
    this.libros.splice(borrar,1);

    // let filter = this.libros.filter( filtrado=>{ 
    // for(let i=0; i<this.libros.length; i++){
    //   let borrar
    //   if(this.libros[i].id_libro == id){
    //     borrar = this.libros.indexOf(this.libros[i])

    //     this.libros.splice(borrar,1);
    //   }})
    
    this.mostrar.delete(id).subscribe((data)=>
    {
      console.log("Delete libros component");
      console.log(data);
      
    })
  }

  ngOnInit(): void {
  }

}