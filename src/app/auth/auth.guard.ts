import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AuthState } from './store/auth.state';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { isLoggedIn } from './store/auth.selectors';


@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private store: Store<AuthState>, private router: Router) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> {
        return this.store.pipe(
            select(isLoggedIn),
            tap(loggedIn => {
                if (!loggedIn) {
                    this.router.navigateByUrl('/auth');
                }
            })
        );
    }
}
