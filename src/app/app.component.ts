import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './core';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-mdb';
  currentCredential : String;
  constructor(private router: Router, private authService: UserService){
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  ngOnInit(){
    this.authService.refreshCredencials();
  }
}
