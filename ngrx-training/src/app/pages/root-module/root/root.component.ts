import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.sass']
})
export class RootComponent {

  constructor(
    private _router: Router,
    private _activeRoute: ActivatedRoute
    ) { }

  routes = [
    {
      title: 'User',
      route: 'user'
    },
    {
      title: 'Admin',
      route: 'admin'
    }
  ]

  navigate(route:string, drawer:any){
    console.log(route)
    this._router.navigate([ route ],{ relativeTo: this._activeRoute });
    drawer.toggle()
  }
}
