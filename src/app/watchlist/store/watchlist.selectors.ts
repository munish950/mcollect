import { createSelector, createFeatureSelector } from '@ngrx/store';
import { WatchlistState } from './watchlist.state';

const featureWatchlistSelector = createFeatureSelector<WatchlistState>('watchlist');

export const getWatchlist = createSelector(
    featureWatchlistSelector,
    watchlist => watchlist
);
