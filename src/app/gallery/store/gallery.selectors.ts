import { createSelector, createFeatureSelector } from '@ngrx/store';
import { GalleryState } from './gallery.state';

const featureGallerySelector = createFeatureSelector<GalleryState>('gallery');

const getGallery = createSelector(
    featureGallerySelector,
    gallery => gallery
);
