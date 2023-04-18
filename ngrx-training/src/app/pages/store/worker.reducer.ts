import { createReducer, createSelector, on } from "@ngrx/store";
import { addEmployee, addEmployeeSuccess, deleteEmployee, getEmployees, getEmployeesSuccess } from './workers.actions';

export interface EmployeeState {
    employee: Employee[];
}

export interface Employee {
    id:number;
    first_name: string;
    middle_name?: string;
    last_name?: string;
    age?: number;
    gender?: string;
    skill_set?: string[];
}

const initialState: Employee[] = [];

export const employeeReducer = createReducer( 
    initialState,

    on(getEmployeesSuccess, (state, { employees }) => [...employees]),


    on(addEmployee, (state, { employee }) => [...state, employee]),

    on(deleteEmployee, (state, {id} ) => {
        let newState = [...state];
        let index = newState.findIndex( emp => { return emp.id == id} );
        console.log(id, index)
        newState.splice(index, 1);
        return newState;
    }),
    )