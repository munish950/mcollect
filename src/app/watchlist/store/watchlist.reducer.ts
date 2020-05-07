import { initialWatchlistState } from './watchlist.state';
import { WatchlistActionTypes, WatchlistActions, WatchlistLoaded } from './watchlist.actions';
import { WatchlistState } from '../store/watchlist.state';

export function watchlistReducer (
    state = initialWatchlistState,
    action: WatchlistActions
): WatchlistState {
    switch (action.type) {
        case WatchlistActionTypes.WATCHLIST_LOADED: {
            return {
                ...state,
                watchlist: action.payload
            };
        }
        default:
            return state;
    }
}
