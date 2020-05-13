import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '../shared/shared.module';
import { GalleryComponent } from './gallery.component';
import { Routes, RouterModule } from '@angular/router';
import { galleryReducer } from './store/gallery.reducer';
import { GalleryEffects } from './store/gallery.effects';
import { MovieinfoModule, MaterialModule } from 'movieinfo';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

const routes: Routes = [
  { path: '', component: GalleryComponent },
  { path: ':id', component: MovieDetailComponent }
];

@NgModule({
  declarations: [GalleryComponent, MovieDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    MovieinfoModule,
    SharedModule,
    EffectsModule.forFeature([GalleryEffects]),
    StoreModule.forFeature('gallery', galleryReducer)
  ]
})
export class GalleryModule { }
