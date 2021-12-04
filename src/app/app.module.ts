import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {MenubarModule} from 'primeng/menubar';
import { LoginModule } from './domain/login/login.module';
import { HomeModule } from './domain/home/home.module';
import { AuthService } from './service/auth.service';
import { UsuariosModule } from './domain/usuarios/usuarios.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MenubarModule,
    SharedModule,
    ButtonModule,
    LoginModule,
    HomeModule,
    UsuariosModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
