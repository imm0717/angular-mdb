import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  specialPage: boolean;

  constructor(private authService: AuthenticationService, private router: Router) {
    this.specialPage = true
   }

  logout(){
    this.authService.logout()
    this.router.navigate(['/login']);
  }

  ngOnInit() {
    this.authService.isAuthenticated.subscribe(
      authenticated => {
        //console.log(authenticated);
        if (!authenticated)
          this.router.navigateByUrl('/login')
      }
    )
  }

}
