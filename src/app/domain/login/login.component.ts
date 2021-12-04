import { DOCUMENT } from '@angular/common';
import { Component,Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/service/auth.service';
import { User } from './usuarios.model';
import { SystemMessagesService } from 'src/app/core/services/system-messages/system-messages.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User = new User();

  displayRegistro:boolean = false;

  constructor(
    private authService:AuthService,
    private router:Router,
    private messageService: MessageService
    ) { }

  ngOnInit(): void {
    this.isLogged();
    document.getElementById('inputUsername')?.focus()
  }

  login(){
    this.authService.login(this.user)
    .catch(error => {
      this.messageService.add({severity:'error', summary:'Error', detail:'Usuario o Contraseña incorrectos'});
    })
  }

getValue(event:any){
  return event.target.value;
}

focusPassword(){
  document.getElementById('inputPassword')?.focus();
}

focusBtnEnter(){
  document.getElementById('btnEnter')?.focus();
}

isLogged(){
  if(this.authService.userLogged()){
    this.router.navigate(['/']);
  }
}

  
}
