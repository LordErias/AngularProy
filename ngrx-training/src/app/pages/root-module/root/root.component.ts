import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { EmployeeState } from '../../store/worker.reducer';
import { getEmployees } from '../../store/workers.actions';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.sass']
})
export class RootComponent implements OnInit{

  constructor(
    private _router: Router,
    private _activeRoute: ActivatedRoute,
    private store$: Store<EmployeeState>
    ) { }


  ngOnInit(): void {
    this.store$.dispatch(getEmployees())
  }
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
