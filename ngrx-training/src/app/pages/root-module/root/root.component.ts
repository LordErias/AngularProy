import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.sass']
})
export class RootComponent {

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute
    ) { }

  routes = [
    {
      title: 'User',
      route: 'user'
    },
    {
      title: 'Admin',
      route: '/admin'
    }
  ]

  navigate(route:string, drawer:any){
    this.router.navigate([ route ],{ relativeTo: this.activeRoute });
    drawer.toggle()
  }
}
