import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';

const routes: Routes = [
  {
    path:'', component: AdminComponent
  },
  {
    path:'maintenance', component: MaintenanceComponent
  },
  {
    path:'**', redirectTo:''
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
