import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { MovieinfoComponent } from './movieinfo.component';
import { QuickViewComponent } from './quick-view/quick-view.component';
import { DetailViewComponent } from './detail-view/detail-view.component';

@NgModule({
  declarations: [
    MovieinfoComponent,
    QuickViewComponent,
    DetailViewComponent
  ],
  imports: [
    MaterialModule,
    CommonModule
  ],
  exports: [
    MovieinfoComponent,
    QuickViewComponent,
    DetailViewComponent
  ]
})
export class MovieinfoModule { }
