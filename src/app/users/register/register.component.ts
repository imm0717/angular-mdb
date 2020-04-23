import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService, User } from 'src/app/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  private registerData: User
  private registrationError = {
    message: '',
    active: false
  }

  constructor(private authService: UserService, private router: Router) {
    this.registerData = {
      id: null,
      firstname: '',
      lastname: '',
      email: '',
      password: ''
    }
  }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.registerData).subscribe(
      () => {
        this.router.navigate(['/'])
      },
      error => {
        this.registrationError.active = true
        this.registrationError.message = error.error
      }
    )
  }

}
