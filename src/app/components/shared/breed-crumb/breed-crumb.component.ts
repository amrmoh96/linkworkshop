import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BreadCrumbDto } from "src/app/models/breadCrumb";

@Component({
  selector: "breed-crumb",
  templateUrl: "./breed-crumb.component.html",
  styleUrls: ["./breed-crumb.component.scss"],
})
export class BreedCrumbComponent implements OnInit {
  public BreedCrumbs: BreadCrumbDto[] = new Array<BreadCrumbDto>();
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.BuildBreedCrumb();
  }

  BuildBreedCrumb() {
    this.activatedRoute.url.subscribe((urls) => {
      this.BreedCrumbs = new Array();
      console.log(urls);

      let path = "";
      for (let index = 0; index < urls.length; index++) {
        const element = urls[index];
        if (isNaN(Number(element))) {
          path += element.path;
          if (index < urls.length) {
            path += "/";
          }
          const breadcrumb: BreadCrumbDto = {
            label: element.path,
            url: path,
            queryParams: "",
          };
          this.BreedCrumbs.push(breadcrumb);
        }
      }
    });
  }
}
