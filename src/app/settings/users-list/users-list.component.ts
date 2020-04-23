import { Observable, Subscription } from 'rxjs';
import { UserService, User } from 'src/app/core';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit, OnDestroy {

  private userSubscription: Subscription
  private userList: User[];

  constructor(private userService: UserService) { }

  deleteUser(userId: number){
    if (Number.isInteger(userId)){
      this.userList.slice(userId, -1)
    }
  }

  ngOnInit() {
    /* this.userSubscription = this.userService.getUsers().subscribe(
      data => this.userList = data
    ) */
    //this.userList = this.userService.getUsers()
  }

  ngOnDestroy(){
    //this.userSubscription.unsubscribe()

  }

}
