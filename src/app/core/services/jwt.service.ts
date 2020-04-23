import { Credential } from './../models';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  getToken(): Credential {
    return window.localStorage['credential'];
  }

  saveCredential(credential: Credential) {
    window.localStorage['credential'] = JSON.stringify(credential);
  }

  destroyToken() {
    window.localStorage.removeItem('credential');
  }
}
