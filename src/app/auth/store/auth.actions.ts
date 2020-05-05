import { Action } from '@ngrx/store';
import { User, UpdateUser , UserProfile} from '../user.model';

export enum AuthActionTypes {
    LOGIN = '[Login Page] Login',
    LOGOUT = 'LOGOUT',
    UPDATE_PROFILE = '[Profile Page] Update Profile',
    PROFILE_UPDATED = '[Profile Effect] Profile Updated',
}

export class AuthLogin implements Action {
    readonly type = AuthActionTypes.LOGIN;
    constructor(public payload: User) {}
}

export class AuthLogout implements Action {
    readonly type = AuthActionTypes.LOGOUT;
}

export class UserProfileUpdate implements Action {
    readonly type = AuthActionTypes.UPDATE_PROFILE;
    constructor(public payload: {
        userId: number,
        profile: {
            name: string;
            dob: string;
            country: string;
            language: string;
        }
    }) {}
}

export class UserProfileUpdated implements Action {
    readonly type = AuthActionTypes.PROFILE_UPDATED;
    constructor(public payload: any) {}
}

export type AuthActions = AuthLogin | AuthLogout | UserProfileUpdate | UserProfileUpdated;
