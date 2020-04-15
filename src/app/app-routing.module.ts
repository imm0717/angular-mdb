/* eslint-disable no-unused-vars */
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AuthGuard } from './core'
import { PageNotFoundComponent } from './shared/pages/page-not-found/page-not-found.component'

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'dashboard', component: HomeComponent, canActivate: [AuthGuard] },
  // { path: 'auth', loadChildren: './users/users.module#UsersModule' },
  // { path: 'auth', loadChildren: './users/users.module#UsersModule' },
  // otherwise redirect to home
  { path: '', component: HomeComponent, canActivate: [AuthGuard], children: [

    { path: 'roles', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)},

  ]  },
  
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
