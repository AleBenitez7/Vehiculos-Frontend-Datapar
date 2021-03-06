import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from './usuarios.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  api = "http:/localhost:3000/usuarios/";

  constructor(
    private httpClient:HttpClient) 
    { }

    getUsuarios(){
      return this.httpClient.get<Usuario[]>(this.api);
    }
  
    getUsuarioById(login){
      return this.httpClient.get<Usuario>(this.api + login);
    }
    
    addUsuario(usuario: Usuario){
      return this.httpClient.post<Usuario>(this.api, usuario);
    }
  
    updateUsuario(usuario: Usuario){
      return this.httpClient.put<Usuario>(this.api + usuario.login, usuario);
    }
  
    updatePerfil(usuario: Usuario){
      return this.httpClient.put<Usuario>(this.api + 'perfil/' + usuario.login, usuario);
    }
  
    deleteEmpresa(login){
      return this.httpClient.delete(this.api + login);
    }  
}
