import { User } from './../../../shared/models/user.model';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/shared/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [AuthenticationService]
})
export class RegisterComponent implements OnInit {

  private registerData: User;

  constructor(private authService: AuthenticationService, private router: Router) {
    this.registerData = new User();
   }

  ngOnInit() {
  }

  register(){
    this.authService.register(this.registerData).subscribe(
      data => {
        this.router.navigate([''])
      },
      error => console.log(error)
    )
  }

}
