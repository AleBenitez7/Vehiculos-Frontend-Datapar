import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { HomeComponent } from './domain/home/home.component';
import { LoginComponent } from './domain/login/login.component';
import { UsuariosComponent } from './domain/usuarios/usuarios.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: '', component: HomeComponent, canActivate:[AuthGuard]},
  { path: 'users', component: UsuariosComponent, canActivate:[AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
