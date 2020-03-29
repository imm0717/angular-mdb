import { User } from './../models/user.model';
import { JwtService } from './jwt.service';
import { Injectable } from "@angular/core";
import { Http } from './http.service';
import { map, delay } from 'rxjs/operators';
import { ReplaySubject, Observable, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: "root"
})
export class AuthenticationService {

  private isAuthenticatedSubject: BehaviorSubject<boolean>;
  public isAuthenticated: Observable<boolean>;
  public isAuth: boolean = false;

  constructor(private http: Http, private jwt: JwtService) {
    this.isAuthenticatedSubject = new BehaviorSubject<boolean>(true);
    this.isAuthenticated = this.isAuthenticatedSubject.asObservable();
    console.log('Auth Service creation');
    console.log(this.jwt.getToken());
    
   }

  public get currentCredentialValue() {
    return this.isAuthenticatedSubject.value;
  }

  public refreshCredencials(){
    if (this.jwt.getToken()){
      this.isAuthenticatedSubject.next(true);
      this.isAuth = true;
    }else{
      this.purgeAuth();
    }
      
  }

  private setAuth(user: User) {
    this.jwt.saveToken(user.accessToken)
    this.isAuthenticatedSubject.next(true);
    this.isAuth = true;
  }

  private purgeAuth() {
    this.jwt.destroyToken();
    this.isAuthenticatedSubject.next(false);
    this.isAuth = false;
  }

  login(username: string, password: string) {
    
    return this.http
      .post<any>("/login", { email: username, password: password })
      .pipe(map(user => {
        
        console.log(`User: ${JSON.stringify(user)}`);
        
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
