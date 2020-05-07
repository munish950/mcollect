import { Action } from '@ngrx/store';
import { Gallery } from 'src/app/model/gallery';


export enum WatchlistActionTypes {
    LOAD_WATCHLIST = '[Watchlist Tab] Load Watchlist',
    WATCHLIST_LOADED = '[Watchlist Effect] Watchlist Loaded'
}

export class LoadWatchlist implements Action {
    readonly type = WatchlistActionTypes.LOAD_WATCHLIST;
    constructor(public payload: number) {}
}

export class WatchlistLoaded implements Action {
    readonly type = WatchlistActionTypes.WATCHLIST_LOADED;
    constructor(public payload: Gallery[]) {}
}

export type WatchlistActions = LoadWatchlist | WatchlistLoaded;

