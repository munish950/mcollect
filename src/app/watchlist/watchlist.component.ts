import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { WatchlistState } from './store/watchlist.state';
import { LoadWatchlist } from './store/watchlist.actions';
import { getWatchlist } from './store/watchlist.selectors';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {
  watchlist$: any;
  profile$: any;
  userId = 1;
  watchlistData = '';

  constructor(private store: Store<WatchlistState>) { }

  ngOnInit() {
    this.store.pipe(
      select(getWatchlist),
      tap(
        data => {
          if (!data.watchlist.length) {
            this.store.dispatch(new LoadWatchlist(this.userId));
          }
        }
      ),
      map(
        watchlistData => watchlistData.watchlist
      )
    ).subscribe(
      data => {
        this.watchlist$ = data;
        // console.log('this.watchlist$', this.watchlist$);
      }
    );

  }

}
