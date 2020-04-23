import { Credential } from './../models/credential.model';
import { Injectable } from '@angular/core';
import { ReplaySubject, Observable } from 'rxjs';
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

  private userCredential: Credential

  constructor(private http: HttpService, private jwt: JwtService) { }

  public refreshCredencials() {
    console.log('Refreshing Credentials')
    if (this.jwt.getToken()) {
      this.isAuthenticatedSubject.next(true);
    } else {
      this.purgeAuth();
    }

  }

  private setAuth(credential: Credential) {
    this.jwt.saveCredential(credential)
    this.isAuthenticatedSubject.next(true);
  }

  private purgeAuth() {
    this.jwt.destroyToken();
    this.isAuthenticatedSubject.next(false);
  }

  login(username: string, password: string) {
    return this.http
      .post<any>("/login", { email: username, password: password })
      .pipe(map(jwtToken => {
        this.userCredential = { email: username, token: jwtToken.accessToken }
        this.setAuth(this.userCredential)
        return this.userCredential;
      }))
  }

  logout() {
    this.purgeAuth();
  }

  register(user: User) {
    return this.http.post<any>("/register", user)
      .pipe(map(jwtToken => {
        this.userCredential = { email: user.email, token: jwtToken.accessToken }
        this.setAuth(this.userCredential);
      }))
  }

  getUsers(): Observable<User> {
    return this.http.get('/users')

  }


}
