import { Action } from '@ngrx/store';
import { User } from '../user.model';

export enum AuthActionTypes {
    LOGIN = '[Login Page] Login',
    LOGOUT = 'LOGOUT'
}

export class AuthLogin implements Action {
    readonly type = AuthActionTypes.LOGIN;
    constructor(public payload: User) {}
}

export class AuthLogout implements Action {
    readonly type = AuthActionTypes.LOGOUT;
}

export type AuthActions = AuthLogin | AuthLogout;
