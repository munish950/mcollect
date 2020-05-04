import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { AuthComponent } from './auth.component';
import { MaterialModule } from '../material.module';
import { AuthService } from './auth.service';
import { authReducer } from './store/auth.reducer';

const routes: Routes = [
  {path: '', component: AuthComponent}
];

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('auth', authReducer)
  ],
  providers: [AuthService],
})
export class AuthModule { }
