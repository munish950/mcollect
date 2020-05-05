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
import { ProfileComponent } from './profile/profile.component';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './store/auth.effects';

const routes: Routes = [
  {path: '', component: AuthComponent},
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  declarations: [
    AuthComponent, ProfileComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('auth', authReducer),
    EffectsModule.forFeature([AuthEffects])
  ],
  providers: [AuthService],
})
export class AuthModule { }
