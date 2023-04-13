import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { AdminRoutingModule } from './admin-routing.module';
import { UserComponent } from '../user-module/user/user.component';
import { UserModuleModule } from '../user-module/user-module.module';



@NgModule({
  declarations: [
    AdminComponent,
    MaintenanceComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    UserModuleModule
  ]
})
export class AdminModuleModule { }
