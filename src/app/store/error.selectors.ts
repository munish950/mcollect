import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ErrorState } from './error.state';

const errorFeatureSelector = createFeatureSelector<ErrorState>('error');

export const errorSelector = createSelector(
    errorFeatureSelector,
    error => error.error
);
