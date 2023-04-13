import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';



@NgModule({
  declarations: [
    AdminComponent,
    MaintenanceComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModuleModule { }
