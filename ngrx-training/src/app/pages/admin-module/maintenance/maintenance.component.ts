import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee, EmployeeState } from '../../store/worker.reducer';
import { addEmployee, editEmployee } from '../../store/workers.actions';
import { Store } from '@ngrx/store';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import * as selectors from '../../store/worker.selector'

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.sass']
})
export class MaintenanceComponent implements OnInit {

  id: any = undefined;
  isEdit: boolean = false;

  skillSetOpts = [
    'UI',
    'Web API',
    'Cloud',
    'Database',
    'Support'
  ]

  employeeForm = this._fb.group({
    first_name: ['', [Validators.required, Validators.maxLength(20), Validators.pattern('[a-zA-Z ]*')]],
    middle_name: ['',[Validators.maxLength(20), Validators.pattern('[a-zA-Z ]*')]],
    last_name: ['', [Validators.required, Validators.maxLength(20), Validators.pattern('[a-zA-Z ]*')]],
    age: ['', [Validators.required, Validators.pattern('[0-9]*'), Validators.maxLength(3)]],
    gender: ['', [Validators.required]],
    skill_set: this.buildSkillSet()
  })

  constructor(
    private _activeRoute: ActivatedRoute, 
    private store$: Store<EmployeeState>, 
    private _router:Router,
    private _fb: FormBuilder
    ) {}

  ngOnInit():void {
    this.id = this.getId();
    this.isEdit = this.id != undefined;
    if (this.isEdit) {
      console.log('is edit')
      this.store$.select(selectors.employeeByIdSelector(this.id))
        .subscribe((item) => {
          if (item != undefined) {
            console.log('selector works')
            this.employeeForm.patchValue(item)
          }
        })
    }
  }
  buildSkillSet(): FormArray {
    const values = this.skillSetOpts.map(v => new FormControl(false));
    return this._fb.array(values)
  }
  
  

  newFormControl(name: string): FormControl {
    return this._fb.control([name])
  }

  getId(): number {
    return this._activeRoute.snapshot.params['id']
  }

  addEmployee(employee: Employee): void {
    employee.id = this.newId
    this.store$.dispatch(addEmployee(employee))
    this.backAdmin();
  }
  editEmployee(employee:Employee): void {
    employee.id = this.id;
    this.store$.dispatch(editEmployee(employee))
    this.backAdmin();
  }

  save():void{
    const employee = this.cleanSkills(this.employeeForm.value);

    if (this.isEdit) {
      this.editEmployee(employee)
    } else {
      this.addEmployee(employee)
    }
  }

  cleanSkills(employee: any): Employee{
    employee.skill_set = employee.skill_set.map((v:any ,i:number ) => v ? this.skillSetOpts[i]: null)
    return  employee
  }

  backAdmin(): void {
    this._router.navigateByUrl('root/admin')
  }

  get skillFormArray(): FormArray{
    return this.employeeForm.get('skill_set') as FormArray;
  }
  get newId():number {
    return Date.now()
  }
}
