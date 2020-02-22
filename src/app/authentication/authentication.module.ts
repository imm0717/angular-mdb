import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AuthenticationService } from './../../shared/services/authentication.service';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [LoginComponent],
  providers: [AuthenticationService],
  imports: [
    CommonModule,
    FormsModule,
    MDBBootstrapModule
  ],
  exports: [LoginComponent]
})
export class AuthenticationModule { }
