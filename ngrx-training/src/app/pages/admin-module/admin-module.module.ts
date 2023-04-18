import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { AdminRoutingModule } from './admin-routing.module';
import { UserModuleModule } from '../user-module/user-module.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from "@angular/material/input";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatRadioModule } from "@angular/material/radio";



@NgModule({
  declarations: [
    AdminComponent,
    MaintenanceComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    UserModuleModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule
  ]
})
export class AdminModuleModule { }
