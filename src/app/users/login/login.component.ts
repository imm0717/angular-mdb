import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { UserService } from 'src/app/core';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  private loginData = {
    password: '',
    email: '',
    rememberMe: false
  }

  constructor(private authService: UserService, private router: Router) {
  }

  ngOnInit() {

  }

  login() {

    this.authService.login(this.loginData.email, this.loginData.password).subscribe(
      () => {
        this.router.navigate(['/']);
      },
      () => console.log('Complete')
    );
  }

  redirectToRegister(){
    this.router.navigate(['/register']);
  }
}
