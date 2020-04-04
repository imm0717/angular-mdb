import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService, User } from 'src/app/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {

  private registerData: User;

  constructor(private authService: UserService, private router: Router) {
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
