/* eslint-disable no-unused-vars */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core';
import { AppLayoutComponent } from './shared';
import { PageNotFoundComponent } from './shared';

const routes: Routes = [
  
  { path: '', component: AppLayoutComponent, canActivate: [AuthGuard], children: [

    { path: '', loadChildren: () => import('./dashboard').then(m => m.DashboardModule)},

    { path: 'roles', loadChildren: () => import('./settings').then(m => m.SettingsModule)},

  ] },
  
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
