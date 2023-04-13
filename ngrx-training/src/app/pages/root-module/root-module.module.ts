import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './root/root.component';
import { RootRoutingModule } from './root-routing.module';
import { NoPageSelectedComponent } from './no-page-selected/no-page-selected.component';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    RootComponent,
    NoPageSelectedComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    RootRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
  ]
})
export class RootModuleModule { }
