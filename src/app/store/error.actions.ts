import { Action } from '@ngrx/store';


export enum ErrorActionTypes {
    ADD_ERROR = '[Http Error] Add Error'
}

export class AddGlobalError implements Action {
    readonly type = ErrorActionTypes.ADD_ERROR;
    constructor(public payload: any) {}
}

export type ErrorActions = AddGlobalError;
