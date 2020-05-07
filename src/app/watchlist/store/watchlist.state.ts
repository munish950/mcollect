import { Gallery } from 'src/app/model/gallery';

export interface WatchlistState {
    watchlist: Gallery[] | [];
}

export const initialWatchlistState = {
    watchlist: []
};
