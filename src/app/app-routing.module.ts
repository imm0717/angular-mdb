import { HomeComponent } from './dashboard/home/home.component';
import { AuthGuard } from './../shared/helpers/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: HomeComponent, canActivate: [AuthGuard] },
  //{ path: 'auth', loadChildren: './users/users.module#UsersModule' },
  //{ path: 'auth', loadChildren: './users/users.module#UsersModule' },
  // otherwise redirect to home
  //{ path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
