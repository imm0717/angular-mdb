import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AuthenticationService } from '../shared/services/authentication.service';
import { LoginComponent } from "./login/login.component";
import { ProfileComponent } from './profile/profile.component';
import { UsersRoutingModule } from './users-routing.module';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [LoginComponent, ProfileComponent, RegisterComponent],
  providers: [AuthenticationService],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    MDBBootstrapModule
  ],
  exports: [LoginComponent,ProfileComponent, RegisterComponent]
})
export class UsersModule { }
