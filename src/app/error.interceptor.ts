import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Store } from '@ngrx/store';
import { ErrorState } from './store/error.state';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { AddGlobalError } from './store/error.actions';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(
        private store: Store<ErrorState>
    ) {}

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        return next.handle(request)
            .pipe(
                catchError(
                    (error: HttpErrorResponse) => {
                        this.store.dispatch(new AddGlobalError(error.name));
                        return throwError(error);
                    }
                )
            );
    }
}
