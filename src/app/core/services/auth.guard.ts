/* eslint-disable no-unused-vars */
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  private isAuth: boolean = false;
  constructor(private router: Router, private authService: UserService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    console.log('Starting Authorization Process')

    this.authService.isAuthenticated.pipe(take(1)).subscribe(
      next => this.isAuth = next,
      () => this.isAuth = false
    )

    if (!this.isAuth) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

}
