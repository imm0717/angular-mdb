import { NavigationModule } from './../main-layout/navigation/navigation.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MDBBootstrapModule,
    DashboardRoutingModule,
    NavigationModule
  ]
})
export class DashboardModule { }
