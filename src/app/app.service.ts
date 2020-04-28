import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    constructor( private http: HttpClient) {}
    url = 'http://localhost:2145/filmography/';

    getMoviesList() {
        return this.http.get(this.url);
    }

}
