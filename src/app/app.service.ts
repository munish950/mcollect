import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Gallery } from './model/gallery';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    url = 'http://localhost:2145/filmography/';
    constructor( private http: HttpClient) {}

    getMoviesList(): Observable<Gallery[]> {
        return this.http.get<Gallery[]>(this.url);
    }

}