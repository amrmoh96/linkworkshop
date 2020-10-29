import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/articles';
import { ReadjsonService } from 'src/app/service/readjson.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit {
  public Article:Article;
  constructor(private JsonService:ReadjsonService, private ActivatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.ActivatedRoute.params.subscribe(P => {
      this.JsonService.getData().subscribe(res => {
        this.Article = res.articles.find(A => A.id == Number(P.id))
      })
    })
  }

}
