import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosListComponent } from './usuarios-list/usuarios-list.component';
import { UsuariosEditComponent } from './usuarios-edit/usuarios-edit.component';


const routes: Routes = [
  { path: '', component: UsuariosListComponent },
  { path: 'nuevo', component: UsuariosEditComponent },
  { path: ':login', component: UsuariosEditComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
