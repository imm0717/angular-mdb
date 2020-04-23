import { Router } from '@angular/router';
import { UserService } from './../../../core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  constructor( private authService: UserService, private router: Router) { }

  ngOnInit() {
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/login'])
  }

}
