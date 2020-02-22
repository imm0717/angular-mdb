import { Injectable } from "@angular/core";
import { Http } from './http.service';

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  constructor(private http: Http) {}

  login(username: string, password: string) {
    //return new Promise((resolve, reject) => {
      return this.http
        .post<any>("/login", { email: username, password: password })
        .subscribe(
          next => {
            localStorage.setItem('token', next.accessToken)
            console.log(next)
          },
          error => console.log(error)
        );
    //});
  }

  logout(){
    localStorage.removeItem('token')
  }

  isAuth(){
    return localStorage.token;
  }
}
