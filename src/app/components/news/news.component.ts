import { Component, OnInit } from "@angular/core";
import { Article } from "src/app/models/articles";
import { ReadjsonService } from "src/app/service/readjson.service";
import { isAfter } from "date-fns";

@Component({
  selector: "app-news",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.scss"],
})
export class NewsComponent implements OnInit {
  public Articles: Article[];
  public numerPerPage: number = 12;
  public SelectedPage: number = 1;
  public PageinatorStart: number = 0;
  public PageinatorEnd: number = this.numerPerPage;
  constructor(private JsonService: ReadjsonService) {}

  ngOnInit() {
    this.JsonService.getData().subscribe((res) => {
      this.Articles = res.articles.sort((a, b) => {
        if (isAfter(new Date(b.publishedAt), new Date(a.publishedAt))) {
          return 1;
        } else {
          return -1;
        }
      });
    });
  }

  public changePage(page: number) {
    this.SelectedPage = page;
    this.PageinatorEnd = this.numerPerPage * page;
    this.PageinatorStart = this.PageinatorEnd - this.numerPerPage;
  }

  get pagesNumbers(): number[] {
    if (this.Articles && this.Articles.length > this.numerPerPage) {
      let _pages = Math.ceil(this.Articles.length / this.numerPerPage);
      let _pagesArr = [];
      for (let index = 1; index <= _pages; index++) {
        _pagesArr.push(index);
      }
      return _pagesArr;
    }
    return [];
  }
}
