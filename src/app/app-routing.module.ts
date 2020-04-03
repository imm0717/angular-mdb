import { HomeComponent } from './dashboard/home/home.component';
import { AuthGuard } from './shared/helpers/auth.guard';
import { NoAuthGuard } from './shared/helpers/no-auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './users/login/login.component';

const routes: Routes = [
 // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: HomeComponent, canActivate: [AuthGuard] },
  //{ path: 'auth', loadChildren: './users/users.module#UsersModule' },
  //{ path: 'auth', loadChildren: './users/users.module#UsersModule' },
  // otherwise redirect to home
  { path: '**', redirectTo: '/dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
