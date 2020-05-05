import { AuthState } from './auth.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const authFeatureSelector = createFeatureSelector<AuthState>('auth');

export const selectProfile = createSelector(
    authFeatureSelector,
    (auth) => {
        if (auth && auth.hasOwnProperty('user') && auth.user.hasOwnProperty('id')) {
            return auth.user;
        }
    }
);

export const isLoggedIn = createSelector(
    selectProfile,
    auth => !!auth
);

export const isLoggedOut = createSelector(
    isLoggedIn,
    (auth) => !auth
);
