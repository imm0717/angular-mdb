import { map, take } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
    providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {

    constructor(private router: Router, private authService: AuthenticationService) {

    }
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
            let isAuthenticated: boolean = false;
        this.authService.isAuthenticated.subscribe(
            authenticated => {
                console.log(`NoAuthGuard Suscribe authenticated: ${authenticated}`)
                isAuthenticated = authenticated
            },
            () => false,
            () => false
        );

        console.log(`NoAuthGuard Suscribe isAuthenticated: ${isAuthenticated}`)
        
        if (isAuthenticated){
            return this.router.parseUrl('/dashboard');

        }
        return true;
    }

}
