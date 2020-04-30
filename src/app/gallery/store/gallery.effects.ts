import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { concatMap, map } from 'rxjs/operators';
import { AppService } from 'src/app/app.service';
import { GalleryActionTypes, GalleryLoaded } from './gallery.actions';

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
        ),

    );
}
