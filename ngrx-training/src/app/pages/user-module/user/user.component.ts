import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Employee, EmployeeState } from '../../store/worker.reducer';
import { addEmployee, getEmployees, deleteEmployee, editEmployee } from '../../store/workers.actions';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {
  
  isAdmin: boolean = false;
  employees: Employee[] = []
  employees$ = this.store$.select('employee')

  constructor(private store$: Store<EmployeeState>, private _router: Router, private _activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.getEmployees();
    this.isAdmin = this.setAdmin();
  }
  
  setAdmin(): boolean {
    return this._router.url.split('/').some(el => el == 'admin')
  };

  getEmployees():void {
    this.store$.dispatch(getEmployees())
  }
  addEmployee(): void {
    if (this.isAdmin) {
      this._router.navigate(['add'], {relativeTo: this._activeRoute})
    }
  }
  deleteEmployee(id:number): void{
    if (this.isAdmin) {
      this.store$.dispatch(deleteEmployee(id))
    }
  }
  
  editEmployee(id: number): void{
    if (this.isAdmin) {
      this._router.navigate(['edit', id], {relativeTo: this._activeRoute});
    }
  }
}
