import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Gallery } from '../model/gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  // galleryList$: Observable<Gallery[]>;
  galleryList$: Gallery[];

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getMoviesList().subscribe(
      data => {
        this.galleryList$ = data;
      }
    );
  }

}
