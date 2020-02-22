import { AuthenticationService } from '../../../shared/services/authentication.service';
import { Component, OnInit } from "@angular/core";
import { User } from "../../../shared/models/user.model";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  providers: [AuthenticationService]
  
})
export class LoginComponent implements OnInit {
  private loginData: User;
  
  constructor(private authService: AuthenticationService) {
    this.loginData = new User();
  }

  showLoginData() {
    console.log(this.loginData);
  }

  login(){
    this.authService.login(this.loginData.email, this.loginData.password);
  }

  ngOnInit() {
    (this.authService.isAuth()) ? console.log('Logued') : console.log('Unlogued');
  }
}
