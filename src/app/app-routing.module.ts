import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  //{ path: 'dashboard', component: HomeComponent, canActivate: [AuthGuard] },
  //{ path: 'auth', loadChildren: './users/users.module#UsersModule' },
  //{ path: 'auth', loadChildren: './users/users.module#UsersModule' },
  // otherwise redirect to home
 // { path: '**', redirectTo: '/home' },
 { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
