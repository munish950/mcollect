import { initialAuthState, AuthState } from './auth.state';
import { AuthActions, AuthActionTypes } from './auth.actions';

export function authReducer(
    state = initialAuthState,
    action: AuthActions
    ): AuthState {
    switch (action.type) {
        case AuthActionTypes.LOGIN: {
            return {
                user: action.payload
            };
        }
        case AuthActionTypes.LOGOUT: {
            return {
                user: {}
            };
        }
        default:
            return state;
    }
}

