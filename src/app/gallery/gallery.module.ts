import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { ArticleCardComponent } from './article-card/article-card.component';

const routes: Routes = [
  {path: '', component: GalleryComponent}
];

@NgModule({
  declarations: [GalleryComponent, ArticleCardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule
  ]
})
export class GalleryModule { }
