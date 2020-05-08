import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-quick-view',
  templateUrl: './quick-view.component.html',
  styleUrls: ['./quick-view.component.css']
})
export class QuickViewComponent implements OnInit {
  @Input()
  moviesList = [];
  constructor() { }

  ngOnInit() {
  }

}
