import { createSelector, createFeatureSelector } from '@ngrx/store';
import { GalleryState } from './gallery.state';

const featureGallerySelector = createFeatureSelector<GalleryState>('gallery');

export const getGallery = createSelector(
    featureGallerySelector,
    gallery => gallery
);
