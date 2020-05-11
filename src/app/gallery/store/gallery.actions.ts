import { Action } from '@ngrx/store';
import { Gallery, MovieDetail } from 'src/app/model/gallery';


export enum GalleryActionTypes {
    LOAD_GALLERY = '[Library Tab] LoadGallery',
    GALLERY_LOADED = '[Gallery Effect] GalleryLoaded',
    LOAD_MOVIE = '[Gallery Detail Button] LoadMovie',
    MOVIE_LOADED = '[Gallery Movie Effect] MovieLoaded',
}

export class LoadGallery implements Action {
    readonly type = GalleryActionTypes.LOAD_GALLERY;
}

export class GalleryLoaded implements Action {
    readonly type = GalleryActionTypes.GALLERY_LOADED;
    constructor(public payload: Gallery[]) {}
}

export class LoadMovieDetail implements Action {
    readonly type = GalleryActionTypes.LOAD_MOVIE;
    constructor(public payload: number) {}
}

export class MovieDetailLoaded implements Action {
    readonly type = GalleryActionTypes.MOVIE_LOADED;
    constructor(public payload: {id: number, movieDetail: MovieDetail}) {}
}

export type GalleryActions = LoadGallery | GalleryLoaded | LoadMovieDetail | MovieDetailLoaded;
