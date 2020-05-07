import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { WatchlistState } from './watchlist.state';
import { WatchlistActionTypes, WatchlistLoaded } from './watchlist.actions';
import { AppService } from 'src/app/app.service';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { concatMap, map } from 'rxjs/operators';

@Injectable()
export class WatchlistEffects {
    constructor(
        private store: Store<WatchlistState>,
        private appService: AppService,
        private action$: Actions
    ) {}

    @Effect()
    watchlist$ = this.action$.pipe(
        ofType(WatchlistActionTypes.LOAD_WATCHLIST),
        concatMap(
            action => this.appService.getWatchlist(action['payload'])
                .pipe(
                    map(
                        galleryData => new WatchlistLoaded(galleryData)
                    )
                )
        )
    );

}
