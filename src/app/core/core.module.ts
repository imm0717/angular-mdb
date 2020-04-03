import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HttpErrorInterceptor } from './interceptors';
import { HttpService, JwtService, UserService, AuthGuard, NoAuthGuard } from "./services";

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    UserService,
    HttpService,
    JwtService,
    AuthGuard,
    NoAuthGuard
  ]
})
export class CoreModule { }
