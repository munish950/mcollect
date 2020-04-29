import { Component, OnInit, Input } from '@angular/core';
import { Gallery } from 'src/app/model/gallery';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css']
})
export class ArticleCardComponent implements OnInit {
  @Input()
  articleData: Gallery;
  
  constructor() { }

  ngOnInit() {
  }

}
