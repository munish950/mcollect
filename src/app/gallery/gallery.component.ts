import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Gallery } from '../model/gallery';
import { LoadGallery } from './store/gallery.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  // galleryList$: Observable<Gallery[]>;
  galleryList$: Gallery[];

  constructor(private appService: AppService, private store: Store<any>) { }

  ngOnInit() {
    this.store.dispatch(new LoadGallery);
    /*
    this.appService.getMoviesList().subscribe(
      data => {
        this.galleryList$ = data;
      }
    );
    */
  }

}
