import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthService } from './auth.service';
import { AuthState } from './store/auth.state';
import { AuthLogin } from './store/auth.actions';
import { User } from './user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private store: Store<AuthState>) {
    this.form = fb.group({
      email: ['mytest@test.com', [Validators.required, Validators.email]],
      password: ['12345', [Validators.required]]
    });
  }

  ngOnInit() {

  }

  login() {
    const email = this.form.value.email;
    const paswd = this.form.value.password;

    this.authService.login(email, paswd).subscribe(
      (response: User) => {
        if (response) {
          this.store.dispatch(new AuthLogin(response));
          this.router.navigateByUrl('/gallery');
        }
      },
      error => {
        console.log(error);
      }
    );

  }

}
