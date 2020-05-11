import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { concatMap, map } from 'rxjs/operators';
import { AppService } from 'src/app/app.service';
import { GalleryActionTypes, GalleryLoaded, LoadMovieDetail, MovieDetailLoaded } from './gallery.actions';

@Injectable()
export class GalleryEffects {
    constructor(
        private action$: Actions,
        private appService: AppService,
    ) {}

    @Effect()
    loadGallery$ = this.action$.pipe(
        ofType(GalleryActionTypes.LOAD_GALLERY),
        concatMap(
            action => this.appService.getMoviesList()
                .pipe(
                    map(
                        galleryData => new GalleryLoaded(galleryData)
                    )
                )
        )
    );

    @Effect()
    loadMovie$ = this.action$.pipe(
        ofType<LoadMovieDetail>(GalleryActionTypes.LOAD_MOVIE),
        concatMap(
            action => this.appService.getMovieDetails(action.payload)
                .pipe(
                    map(
                        movieData => new MovieDetailLoaded({id: action.payload, movieDetail: movieData})
                    )
                )
        )
    );
}
