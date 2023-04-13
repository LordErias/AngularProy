import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootComponent } from './root/root.component';
import { NoPageSelectedComponent } from './no-page-selected/no-page-selected.component';

const routes: Routes = [
  {
    path: 'root', component:RootComponent,
    children: [
      {
        path:'', component:NoPageSelectedComponent
      },
      {
        path: 'user', 
        loadChildren:() => import('../user-module/user-module.module')
                            .then(m => m.UserModuleModule) 
      },
      {
        path:'**', redirectTo:''
      }
    ]
  },
  {path: '**', redirectTo:'root'}
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class RootRoutingModule { }
