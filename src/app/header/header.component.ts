import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AuthState } from '../auth/store/auth.state';
import { Observable } from 'rxjs';
import { isLoggedIn, isLoggedOut } from '../auth/store/auth.selectors';
import { AuthLogout } from '../auth/store/auth.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;

  constructor(private store: Store<AuthState>, private router: Router) { }

  ngOnInit() {
    this.isLoggedIn$ = this.store.pipe(
      select(isLoggedIn)
    );

    this.isLoggedOut$ = this.store.pipe(
      select(isLoggedOut)
    );
    // this.isLoggedIn$.subscribe(data => console.log('LOG IN', data));

    // this.isLoggedOut$.subscribe(data => console.log('LOG OUT', data));

  }

  logout() {
    this.store.dispatch(new AuthLogout);
    this.router.navigateByUrl('/auth');
  }

}
