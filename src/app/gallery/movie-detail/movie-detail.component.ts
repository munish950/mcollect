import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { tap, map } from 'rxjs/operators';

import { LoadMovieDetail } from '../store/gallery.actions';
import { MovieDetail } from 'src/app/model/gallery';
import { ActivatedRoute } from '@angular/router';
import { getMovie } from '../store/gallery.selectors';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movieId: number;
  movieDetails$: Observable<MovieDetail>;

  constructor(
    private store: Store<MovieDetail>,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    /*
    this.activateRoute.params.subscribe(
      urlData => {
        this.movieId = Number(urlData.id);
      }
    );*/
    console.log(this.activateRoute.snapshot.params.id);
    this.movieId = this.activateRoute.snapshot.params.id;

    this.movieDetails$ = this.store.pipe(
      select(getMovie),
      tap(movie => {
          if (!movie[this.movieId]) {
            this.store.dispatch(new LoadMovieDetail(this.movieId));
          }
        }
      ),
      map(
        movieInfo => {
          if (movieInfo[this.movieId]) {
            return movieInfo[this.movieId];
          }
        }
      )
    );
    /*
    .subscribe({
      next: (moviefo) => {
        if (moviefo[this.movieId]) {
          this.movieDetails = moviefo[this.movieId];
        }
        console.log('DATA', this.movieDetails);
      },
      error: (err: any) => {
        console.log(err);
      }
    });
    */

  }

}
