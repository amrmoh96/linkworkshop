import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/models/articles';

@Component({
  selector: 'news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent implements OnInit {
  @Input() article:Article;
  constructor() { }

  ngOnInit() {
  }

}
