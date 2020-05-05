import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AuthService } from '../auth.service';
import { AuthActionTypes, UserProfileUpdated } from './auth.actions';
import { switchMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class AuthEffects {
    constructor(
        private actions$: Actions,
        private authService: AuthService
    ) {}

    @Effect()
    updateProfile$ = this.actions$.pipe(
        ofType(AuthActionTypes.UPDATE_PROFILE),
        switchMap(
            action => this.authService.updateProfile(action)
                .pipe(
                    map(
                        response => {
                            if (response.code === 200 && response.msg === 'OK') {
                                console.log('SUCCESS', action['payload']['profile']);
                                //
                                return new UserProfileUpdated(action['payload']['profile']);
                            } else {
                                throw new Error(response.msg);
                            }
                        }
                    ),
                    catchError(
                        error => {
                            console.log(error);
                            return of([]);
                        }
                    )
                )
        )
    );

}
