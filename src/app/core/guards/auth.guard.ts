import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authServ:AuthService,
    private router:Router, 
    ){}
  canActivate(route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    
      if(!this.authServ.userLogged()){
      console.log('Token no es válido o ya expiró');
      this.router.navigate(['login']);
      return false;
      }
    return true;
  }
  
}
