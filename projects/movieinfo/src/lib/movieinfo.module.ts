import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { MovieinfoComponent } from './movieinfo.component';
import { QuickViewComponent } from './quick-view/quick-view.component';

@NgModule({
  declarations: [
    MovieinfoComponent,
    QuickViewComponent
  ],
  imports: [
    MaterialModule,
    CommonModule
  ],
  exports: [
    MovieinfoComponent,
    QuickViewComponent
  ]
})
export class MovieinfoModule { }
