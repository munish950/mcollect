import { Component, OnInit, Input, ViewChild, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'lib-quick-view',
  templateUrl: './quick-view.component.html',
  styleUrls: ['./quick-view.component.css']
})
export class QuickViewComponent implements OnInit {
  @Input()
  moviesList = [];

  constructor(private route: Router) { }

  ngOnInit() {
  }

  onNavigate(id: string) {
    this.route.navigateByUrl('/gallery/' + id);
  }

}
