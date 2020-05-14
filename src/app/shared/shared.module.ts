import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { MaterialModule } from 'movieinfo';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [
    SearchComponent,
    DialogComponent
  ],
  entryComponents: [DialogComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    SearchComponent,
    DialogComponent
  ]
})
export class SharedModule { }
