import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { GalleryComponent } from './gallery.component';
import { Routes, RouterModule } from '@angular/router';
// import { MaterialModule } from '../material.module';
import { galleryReducer } from './store/gallery.reducer';
import { GalleryEffects } from './store/gallery.effects';
import { MovieinfoModule, MaterialModule } from 'movieinfo';

const routes: Routes = [
  {path: '', component: GalleryComponent}
];

@NgModule({
  declarations: [GalleryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    MovieinfoModule,
    EffectsModule.forFeature([GalleryEffects]),
    StoreModule.forFeature('gallery', galleryReducer)
  ]
})
export class GalleryModule { }
