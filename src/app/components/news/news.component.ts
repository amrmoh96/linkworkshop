import { Component, OnInit } from "@angular/core";
import { Article } from "src/app/models/articles";
import { ReadjsonService } from "src/app/service/readjson.service";
import { Category } from "src/app/models/category";

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
  public Categories: Category[];
  constructor(private JsonService: ReadjsonService) {}

  ngOnInit() {
    this.JsonService.getData().subscribe((res) => {
      this.Categories = res.sourceCategory;
      this.Articles = res.articles;
      this.Articles = this.sort({ type: "desc" });
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

  sort($event): Article[] {
    let _articles: Article[];
    if ($event.type == "desc") {
      _articles = this.Articles.sort((a, b) => {
        if (a.title > b.title) {
          return 1;
        } else {
          return -1;
        }
      });
    } else {
      _articles = this.Articles.sort((a, b) => {
        if (a.title > b.title) {
          return -1;
        } else {
          return 1;
        }
      });
    }
    return _articles;
  }
}
