import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

import { AppService } from '../app.service';
import { Gallery } from '../model/gallery';
import { LoadGallery } from './store/gallery.actions';
import { Store, select } from '@ngrx/store';
import { GalleryState } from './store/gallery.state';
import { map, tap, filter } from 'rxjs/operators';
import { getGallery } from './store/gallery.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styles: [`
    .search_list {
      width: 90%;
      text-align: center;
      margin: 5px;
    }
    .filter_btn {
      width: 10%;
      float: left;
    }
  `]
})
export class GalleryComponent implements OnInit, OnDestroy {
  galleryList$: Observable<Gallery[]>;
  // galleryList$: Gallery[];
  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);
  private _mobileQueryListener: () => void;
  mobileQuery: MediaQueryList;

  constructor(private appService: AppService,
  private store: Store<GalleryState>,
  changeDetectorRef: ChangeDetectorRef,
  media: MediaMatcher
  ) {
      this.mobileQuery = media.matchMedia('(max-width: 600px)');
      this._mobileQueryListener = () => changeDetectorRef.detectChanges();
      this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.galleryList$ = this.store.pipe(
        select(getGallery),
        tap(
          data => {
            if (!data.movies.length) {
              this.store.dispatch(new LoadGallery);
            }
          }
        ),
        map(
          moviesData => {
            return moviesData.movies;
          }
        )
      );

    // this.store.dispatch(new LoadGallery);
    /*
    this.appService.getMoviesList().subscribe(
      data => {
        this.galleryList$ = data;
      }
    );
    */

  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }


}
