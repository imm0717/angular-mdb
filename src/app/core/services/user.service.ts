import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from "./../models";
import { HttpService } from "./http.service";
import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor(private http: HttpService, private jwt: JwtService) { }

  public refreshCredencials() {
    if (this.jwt.getToken()) {
      this.isAuthenticatedSubject.next(true);
    } else {
      this.purgeAuth();
    }

  }

  private setAuth(user: User) {
    this.jwt.saveToken(user.accessToken)
    this.isAuthenticatedSubject.next(true);
  }

  private purgeAuth() {
    this.jwt.destroyToken();
    this.isAuthenticatedSubject.next(false);
  }

  login(username: string, password: string) {
    return this.http
      .post<any>("/login", { email: username, password: password })
      .pipe(map(user => {
        this.setAuth(user)
        return user;
      }))
  }

  logout() {
    this.purgeAuth();
  }

  register(user: User) {
    return this.http.post<User>("/register", user)
      .pipe(map(userdata => {
        this.setAuth(userdata);
      }))
  }


}
