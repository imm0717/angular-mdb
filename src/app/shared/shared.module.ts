import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component'
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { AppHeaderComponent } from './layout/app-header/app-header.component'

@NgModule({
  declarations: [PageNotFoundComponent, AppLayoutComponent, AppHeaderComponent],
  imports: [
    HttpClientModule,
    RouterModule,
    CommonModule,
    MDBBootstrapModule.forRoot(),
    
  ],
  exports: [
    PageNotFoundComponent,
    HttpClientModule,
    RouterModule,
    CommonModule,
    MDBBootstrapModule,
    AppLayoutComponent
  ]
})
export class SharedModule { }
