import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, interval} from 'rxjs'
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable <boolean> | Promise<boolean> | boolean
   {
    if(this.authService.isAuth) {
      return true;
    } else {
       return this.router.navigate(['/auth']);
    }
  }
}