import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { GalleryComponent } from './gallery.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { ArticleCardComponent } from './article-card/article-card.component';
import { galleryReducer } from './store/gallery.reducer';
import { GalleryEffects } from './store/gallery.effects';

const routes: Routes = [
  {path: '', component: GalleryComponent}
];

@NgModule({
  declarations: [GalleryComponent, ArticleCardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    EffectsModule.forFeature([GalleryEffects]),
    StoreModule.forFeature('gallery', galleryReducer)
  ]
})
export class GalleryModule { }
