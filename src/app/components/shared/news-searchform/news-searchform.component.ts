import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Category } from "src/app/models/category";

@Component({
  selector: "news-searchform",
  templateUrl: "./news-searchform.component.html",
  styleUrls: ["./news-searchform.component.scss"],
})
export class NewsSearchformComponent implements OnInit {
  @Input() Categories: Category[];
  @Output() onSort = new EventEmitter();
  constructor() {}

  ngOnInit() {
    console.log(this.Categories);
  }
  Search($event) {
    console.log($event);
  }

  sort(type: string) {
    this.onSort.emit({ type: type });
  }
}
