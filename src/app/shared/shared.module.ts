import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { MaterialModule } from 'movieinfo';

@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    SearchComponent
  ]
})
export class SharedModule { }
