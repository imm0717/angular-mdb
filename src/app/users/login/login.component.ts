import { map, catchError } from 'rxjs/operators';
import { AuthenticationService } from '../../shared/services/authentication.service';
import { Component, OnInit } from "@angular/core";
import { User } from "../../shared/models/user.model";
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  private loginData: User;

  constructor(private authService: AuthenticationService, private router: Router, private route: ActivatedRoute) {
    this.loginData = new User();
  }
  ngOnInit() {

  }

  showLoginData() {
    console.log(this.loginData);
  }

  login() {
    this.authService.login(this.loginData.email, this.loginData.password).subscribe(
      data => {
        this.router.navigate(['/dashboard']);
      },
      () => console.log('Complete')
    );
  }

  redirect(){
    this.router.navigate(['/dashboard'], { relativeTo: this.route});
  }
}
