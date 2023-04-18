import { createSelector } from "@ngrx/store";
import { EmployeeState } from "./worker.reducer";


export const allEmployees = (state: EmployeeState) => state.employee

export const employeeByIdSelector = (id:number) => createSelector(
    allEmployees, (allEmp) => {
        console.log(allEmp)
        if(allEmp){
            console.log( allEmp.findIndex( emp => emp.id == id))
            let index = allEmp.findIndex( emp => emp.id == id)
            return allEmp[index]
        }else {
            return {}
        }
    }

)