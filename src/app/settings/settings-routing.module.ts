import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { RoleListComponent } from './role-list/role-list.component'

const routes = [
  // { path: '', redirectTo: 'roles', pathMatch: 'full'},
  { path: '', component: RoleListComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
