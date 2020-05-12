import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent implements OnInit {
  @Input()
  movieInfo: {
    id: number;
    name: string;
    year: number;
    rating: string;
    summary: string;
    certificate: string;
    category: string;
    image: string;
    director: string;
  };
  constructor() { }

  ngOnInit() {
  }

}
