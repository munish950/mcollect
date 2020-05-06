import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AuthState } from '../store/auth.state';
import { Gallery } from 'src/app/model/gallery';
import { selectProfile } from '../store/auth.selectors';
import { map, tap, filter } from 'rxjs/operators';
import { User } from '../user.model';
import { getGallery } from 'src/app/gallery/store/gallery.selectors';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {
  watchlist$: any;
  profile$: any;
  userId: number;
  watchlistData = '';

  constructor(private store: Store<AuthState>) { }

  ngOnInit() {
    this.store.pipe(
      select(selectProfile)

    ).subscribe(
      (data: User) => {
        console.log('data$', data);
      });

  }

}
