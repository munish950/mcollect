import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { GalleryComponent } from './gallery.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { galleryReducer } from './store/gallery.reducer';
import { GalleryEffects } from './store/gallery.effects';
import { MovieListComponent } from './movie-list/movie-list.component';

const routes: Routes = [
  {path: '', component: GalleryComponent}
];

@NgModule({
  declarations: [GalleryComponent, MovieCardComponent, MovieListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    EffectsModule.forFeature([GalleryEffects]),
    StoreModule.forFeature('gallery', galleryReducer)
  ]
})
export class GalleryModule { }
