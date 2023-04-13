import { Injectable } from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { addEmployee, addEmployeeSuccess, getEmployees, deleteEmployee, getEmployeesSuccess } from './workers.actions';
import { Store } from "@ngrx/store";
import { mergeMap, tap, map, catchError, concatMap } from "rxjs/operators";
import { EMPTY, Observable, of } from "rxjs";
import { Employee } from "./worker.reducer";

@Injectable()
export class WorkerEffects{

    getEmployees$ = createEffect(() => this.actions$.pipe(
        ofType(getEmployees),
        concatMap( () => this.getAllLocal()
            .pipe(
                map(emp => getEmployeesSuccess(emp))
            )
        )
    ));



    addEmployee$ = createEffect( () => this.actions$.pipe(
        ofType(addEmployee),
        concatMap(({employee}) => this.addLocal(employee))
        ), {dispatch: false}
    );

    deleteEmployee$ = createEffect( () => this.actions$.pipe(
        ofType(deleteEmployee),
        concatMap(({id}) => this.deleteLocal(id))
        ), {dispatch: false}
    );

// editEmployee

    constructor( private actions$: Actions) {}
    
    loger(text:any):void{
        console.log(text);
    }
    getAllLocal(): Observable<any>{
        let values = [], keys = Object.keys(localStorage), i = keys.length;
        while (i--) {
            let item = localStorage.getItem(keys[i]) || '{}'
            console.log(typeof(item))
            values.push( JSON.parse(item) )
        }
        this.loger(values)
        return of(values)
    }
    deleteLocal(id: number): Observable<any>{
        let empDeleted = localStorage.getItem(String(id)) || '{}';
        localStorage.removeItem(String(id))
        this.loger(empDeleted)
        return of(JSON.parse(empDeleted))
    }
    addLocal(employee: Employee): Observable<any> {
        this.loger(employee)
        localStorage.setItem(String(employee.id), JSON.stringify(employee));
        let text = localStorage.getItem(String(employee.id)) || '{}'
        return of(JSON.parse(text))
    }
}