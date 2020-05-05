import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthState } from '../store/auth.state';
import { selectProfile } from '../store/auth.selectors';
import { User } from '../user.model';
import { UserProfileUpdate } from '../store/auth.actions';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  isFormValid = false;
  profileForm: FormGroup;
  name: string;
  dob: string;
  country: string;
  language: string;
  userId: number;
  formInitialValues = {
    name: '',
    dob: '',
    country: '',
    language: ''
  };

  constructor(
    private store: Store<AuthState>,
    private fb: FormBuilder
    ) { }

  ngOnInit() {
    this.store.pipe(
      select(selectProfile)
    ).subscribe(
      (profileData: User) => {
        console.log('profileData', profileData);
        /*
        this.name = profileData.name;
        this.dob = profileData.dob;
        this.country = profileData.country;
        this.language = profileData.language;
        */
        this.userId = profileData.id;
        this.formInitialValues.name = profileData.name;
        this.formInitialValues.dob = profileData.dob;
        this.formInitialValues.country = profileData.country;
        this.formInitialValues.language = profileData.language;
      }
    );

    this.profileForm = this.fb.group({
      name: [this.formInitialValues.name, [Validators.required]],
      dob: [this.formInitialValues.dob],
      country: [this.formInitialValues.country],
      language: [this.formInitialValues.language]
    });

  }

  submit() {
    console.log(this.userId, this.profileForm.value);
    this.store.dispatch(new UserProfileUpdate({userId: this.userId, profile: this.profileForm.value}));
  }

  cancel() {
    this.profileForm.reset(this.formInitialValues);
  }

}
