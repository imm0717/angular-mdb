import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HeaderComponent } from './layout'
import { RouterModule } from '@angular/router'
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component'
import { MDBBootstrapModule } from 'angular-bootstrap-md'

@NgModule({
  declarations: [HeaderComponent, PageNotFoundComponent],
  imports: [
    HttpClientModule,
    RouterModule,
    CommonModule,
    MDBBootstrapModule.forRoot(),
    
  ],
  exports: [
    HeaderComponent,
    PageNotFoundComponent,
    HttpClientModule,
    RouterModule,
    CommonModule,
    MDBBootstrapModule
  ]
})
export class SharedModule { }
