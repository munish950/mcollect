import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AuthState } from '../auth/store/auth.state';
import { Observable } from 'rxjs';
import { isLoggedIn, isLoggedOut } from '../auth/store/auth.selectors';
import { AuthLogout } from '../auth/store/auth.actions';
import { Router } from '@angular/router';
import { DialogComponent } from '../shared/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ErrorState } from '../store/error.state';
import { errorSelector } from '../store/error.selectors';
import { AddGlobalError } from '../store/error.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;

  error$: Observable<any>;

  constructor(
    private store: Store<AuthState>,
    private router: Router,
    public dialog: MatDialog,
    private errorStore: Store<ErrorState>
    ) { }

  ngOnInit() {
    this.isLoggedIn$ = this.store.pipe(
      select(isLoggedIn)
    );

    this.isLoggedOut$ = this.store.pipe(
      select(isLoggedOut)
    );
    // this.isLoggedIn$.subscribe(data => console.log('LOG IN', data));

    // this.isLoggedOut$.subscribe(data => console.log('LOG OUT', data));

    this.error$ = this.errorStore.pipe(
      select(errorSelector)
    );

  }

  logout() {
    this.store.dispatch(new AuthLogout);
    this.router.navigateByUrl('/auth');
  }

  onCloseMsg() {
    this.errorStore.dispatch(new AddGlobalError(null));
  }
  /*
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
  */

}
