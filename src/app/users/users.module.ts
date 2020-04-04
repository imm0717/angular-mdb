import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { UserService } from '../core';
import { LoginComponent } from "./login/login.component";
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { UsersRoutingModule } from './users-routing.module';



@NgModule({
  declarations: [LoginComponent, ProfileComponent, RegisterComponent],
  providers: [UserService],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    MDBBootstrapModule
  ],
  exports: [LoginComponent,ProfileComponent, RegisterComponent]
})
export class UsersModule { }
