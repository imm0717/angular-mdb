import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { UserService, User } from 'src/app/core';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  private loginData: User;

  constructor(private authService: UserService, private router: Router, private route: ActivatedRoute) {
    this.loginData = {
      username: '',
      password: '',
      email: '',
      accessToken: '',
      credential: null
    }
  }

  ngOnInit() {

  }

  showLoginData() {
    //console.log(this.loginData);
  }

  login() {

    this.authService.login(this.loginData.email, this.loginData.password).subscribe(
      data => {
        this.router.navigate(['/home']);
      },
      () => console.log('Complete')
    );
  }

  redirect() {
    this.router.navigate(['/home'], { relativeTo: this.route });
  }
}
