import { AuthState } from './auth.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const authFeatureSelector = createFeatureSelector<AuthState>('auth');

export const isLoggedIn = createSelector(
    authFeatureSelector,
    (auth) => {
        if (auth && auth.hasOwnProperty('user') && auth.user.hasOwnProperty('id')) {
            return true;
        } else {
            return false;
        }
    }
);

export const isLoggedOut = createSelector(
    isLoggedIn,
    (auth) => !auth
);
