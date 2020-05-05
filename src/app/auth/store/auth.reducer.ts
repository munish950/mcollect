import { initialAuthState, AuthState } from './auth.state';
import { AuthActions, AuthActionTypes } from './auth.actions';

export function authReducer(
    state = initialAuthState,
    action: AuthActions
    ): AuthState {
    const userProfile = state.user;
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
        case AuthActionTypes.PROFILE_UPDATED: {
            return {
                ...state,
                user: {
                    ...userProfile,
                    ...action.payload,
                }
            };
        }
        default:
            return state;
    }
}

