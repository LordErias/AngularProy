import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Employee, EmployeeState } from '../../store/worker.reducer';
import { addEmployee, getEmployees, deleteEmployee } from '../../store/workers.actions';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {
  
  currentId = 1;

  employees: Employee[] = []
  employees$ = this.store$.select('employee')
  constructor(private store$: Store<EmployeeState>) {}

  ngOnInit(): void {
    this.getEmployees();
    
  }
  
  getEmployees():void {
    this.store$.dispatch(getEmployees())
  }
  addEmployee(): void {
    this.store$.dispatch(addEmployee({id: this.currentId, first_name: 'pepe'}))
    this.currentId = this.currentId +1;

  }
  deleteEmployee(id:number): void{
    this.store$.dispatch(deleteEmployee(id))
  }
}
