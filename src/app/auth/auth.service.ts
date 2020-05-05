import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, UpdateUser } from './user.model';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
    url = 'http://localhost:2145/filmography/auth/';
    constructor(private http: HttpClient ) {}

    login(email: string, password: string): Observable<User> {
        return this.http.post<User>(this.url,
            JSON.stringify({
                email: email,
                password: password,
            })
        );
    }

    updateProfile(profileData: {
        userId: number,
        profile: {
            name: string;
            dob: string;
            country: string;
            language: string;
        }
    }): Observable<{code: number, msg: string}> {
        return this.http.post<{code: number, msg: string}>(this.url + 'update_profile',
            JSON.stringify(profileData)
        );
    }
}
