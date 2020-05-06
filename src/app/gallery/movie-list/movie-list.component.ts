import { Component, OnInit, Input } from '@angular/core';
import { Gallery } from 'src/app/model/gallery';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  @Input()
  moviesList: Gallery[];

  constructor() { }

  ngOnInit() {
  }

}
