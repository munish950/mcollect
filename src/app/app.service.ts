import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Gallery, MovieDetail } from './model/gallery';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    url = 'http://localhost:2145/filmography/';
    constructor( private http: HttpClient) {}

    getMoviesList(): Observable<Gallery[]> {
        return this.http.get<Gallery[]>(this.url);
    }

    getWatchlist(userId: number): Observable<Gallery[]> {
        return this.http.post<Gallery[]>(this.url + 'watchlist',
            JSON.stringify({userId: userId}));
    }

    getMovieDetails(movieId: number): Observable<MovieDetail> {
        return this.http.get<MovieDetail>(this.url + 'film/' + movieId);
    }

}
