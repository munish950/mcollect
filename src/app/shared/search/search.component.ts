import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { map, switchMap, tap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Gallery } from 'src/app/model/gallery';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  searchResult$: Observable<Gallery[]>;
  hasResult = true;

  constructor(
    private appService: AppService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.searchForm = this.fb.group({
      term: ['']
    });

   this.searchForm.controls.term.valueChanges
    .subscribe(
      searchTerm => {
        this.hasResult = true;
        if (searchTerm) {
          searchTerm = searchTerm.trim();
          if (searchTerm.length > 1 ) {
            this.searchResult$ = this.appService.searchMovie(searchTerm)
            .pipe(
              tap(
                data => {
                  if (!data) {
                    this.hasResult = false;
                  }
                }
              ),
              catchError(err => {
                this.hasResult = false;
                console.log('err', err);
                return of([]);
              })
            );
          }
        }
      }
    );
  }

}
