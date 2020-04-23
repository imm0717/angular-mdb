import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { RoleListComponent } from './role-list/role-list.component';
import { UsersListComponent } from './users-list/users-list.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations: [RoleListComponent, UsersListComponent, SettingsComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
