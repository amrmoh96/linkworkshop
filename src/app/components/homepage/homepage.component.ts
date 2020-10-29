import { Component, OnInit } from '@angular/core';
import { isAfter } from 'date-fns';
import { Article } from 'src/app/models/articles';
import { ReadjsonService } from 'src/app/service/readjson.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  public homeArticles:Article[];
  constructor(private JsonService:ReadjsonService) { }

  ngOnInit() {
    this.JsonService.getData().subscribe(res => {
      this.homeArticles = res.articles.filter(A => A.showOnHomepage);
      this.homeArticles = this.homeArticles.sort((a,b) => {
        if (isAfter(new Date(b.publishedAt), new Date(a.publishedAt))) {
          return 1;
        } else {
          return -1;
        }
      })
    })
  }

}
