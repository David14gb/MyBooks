import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnadirComponent } from './pages/anadir/anadir.component';
import { HomeComponent } from './pages/home/home.component';
import { LibrosComponent } from './pages/libros/libros.component';
import { ModificarComponent } from './pages/modificar/modificar.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { RegistroComponent } from './pages/registro/registro.component';


const routes: Routes = [

  {path: "", component: HomeComponent},
  {path: "registro", component:RegistroComponent},
  {path: "perfil", component:PerfilComponent},
  {path: "libro", component:LibrosComponent},
  {path: "anadir", component:AnadirComponent},
  {path: "modificar", component:ModificarComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
