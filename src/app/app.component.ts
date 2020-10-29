import { Component } from "@angular/core";
import { ReadjsonService } from "./service/readjson.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "linkdevworkshop";
  public data;
  constructor(private s: ReadjsonService) {
    this.s.getData().subscribe((res) => (this.data = res));
  }
  get getData() {
    if (this.data && this.data.articles) return this.data.articles[1].id;
    return;
  }
}
