import { Action } from '@ngrx/store';
import { Gallery } from 'src/app/model/gallery';


export enum GalleryActionTypes {
    LOAD_GALLERY = '[Library Tab] LoadGallery',
    GALLERY_LOADED = '[Gallery Effect] GalleryLoaded',
}

export class LoadGallery implements Action {
    readonly type = GalleryActionTypes.LOAD_GALLERY;
}

export class GalleryLoaded implements Action {
    readonly type = GalleryActionTypes.GALLERY_LOADED;
    constructor(public payload: Gallery[]) {}
}

export type GalleryActions = LoadGallery | GalleryLoaded;
