import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BreadCrumbDto } from 'src/app/models/breadCrumb';

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
      
      this.activatedRoute.queryParams.subscribe((Param) => {
        let path = '';
        for (let index = 0; index < urls.length; index++) {
          const element = urls[index];
          path += element.path;
          if (index < urls.length) {
            path += "/";
          }

          let param;
          if (index == 0) {
            param = {
              rid: Param.rid,
            };
          }
          if (index == 1) {
            param = {
              rid: Param.rid,
              coid: Param.coid,
            };
          }
          if (index >= 2) {
            param = {
              rid: Param.rid,
              coid: Param.coid,
              cid: Param.cid,
            };
          }
          element.path = element.path.replace(/_/g, " ");
          const breadcrumb: BreadCrumbDto = {
            label: decodeURIComponent(element.path),
            url: path,
            queryParams: param,
          };
          this.BreedCrumbs.push(breadcrumb);
        }
      });
    });
  }
}
