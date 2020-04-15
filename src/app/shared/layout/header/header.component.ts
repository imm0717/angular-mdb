import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }
  
  logout(){
    console.log(this.route)
    /* this.authService.logout();
    this.router.navigate([''], { relativeTo: this.route}); */

  }
}
