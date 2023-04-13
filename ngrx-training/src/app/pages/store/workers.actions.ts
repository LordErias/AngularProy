import { createAction, props } from "@ngrx/store";
import { Employee } from "./worker.reducer";

export enum EmpActTypes {
    getEmployees='[User Component] Get Employees',
    getEmployeesSuccess='[User Component] Get Employees Success',
    addEmployee='[Maintenance Component] Add Employee',
    addEmployeeSuccess='[Maintenance Component] Add Employee success',
    edtiEmployee='[Maintenance Component] Edit Employee',
    deleteEmployee='[Maintenance Component] Delete Employee'
}

export const getEmployees = createAction(EmpActTypes.getEmployees);

// triggered by get employee action
export const getEmployeesSuccess = createAction(
    EmpActTypes.getEmployeesSuccess,
    (employees: Employee[]) => ({employees}) 
    );

export const addEmployee = createAction(
    // type "name"
    EmpActTypes.addEmployee,
    // aqui digo que tiene de entrada un objeto de typo employee 
    (employee: Employee) => ({ employee })
    );
export const addEmployeeSuccess = createAction(
    EmpActTypes.addEmployeeSuccess,
    (employee: Employee) => ({ employee })
)

export const editEmployee = createAction(
    EmpActTypes.edtiEmployee, 
    (employee: Employee) => ({ employee })
    );

export const deleteEmployee = createAction(
    EmpActTypes.deleteEmployee, 
    (id: number)=> ({ id })
    );

