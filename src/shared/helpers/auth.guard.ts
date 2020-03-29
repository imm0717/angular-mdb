import { take, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthenticationService) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      const cantActivate = this.authService.currentCredentialValue;
    
    /* let isAuthenticated: boolean;
    this.authService.isAuthenticated.subscribe(
      authenticated => {
        console.log(`Suscribe authenticated: ${authenticated}`)
        isAuthenticated = authenticated
      }
    ) */

    console.log(`isAuthenticated: ${cantActivate}`);

    if (cantActivate)
      return true;
    

    return this.router.parseUrl("/login");
  }

}
