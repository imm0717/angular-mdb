import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RoleListComponent } from './role-list/role-list.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes = [
  {
    path: '', children: [
      { path: 'roles', component: RoleListComponent },
      { path: 'users', component: UsersListComponent }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
