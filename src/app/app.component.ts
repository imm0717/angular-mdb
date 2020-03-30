import { AuthenticationService } from './shared/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { AuthCredential } from 'src/app/shared/models/credential.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-mdb';
  currentCredential : String;

  constructor(private router: Router, private authService: AuthenticationService){
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  ngOnInit(){
    console.log('AppComponent');
    this.authService.refreshCredencials();
  }
}
