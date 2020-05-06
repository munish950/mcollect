import { Component, OnInit } from '@angular/core';
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
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  // galleryList$: Observable<Gallery[]>;
  galleryList$: Gallery[];

  constructor(private appService: AppService, private store: Store<GalleryState>) { }

  ngOnInit() {
  this.store.pipe(
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
    ).subscribe(
      data => this.galleryList$ = data
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

}
