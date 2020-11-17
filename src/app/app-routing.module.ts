import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomepageComponent } from "./components/homepage/homepage.component";
import { NewsDetailsComponent } from "./components/news-details/news-details.component";
import { NewsComponent } from "./components/news/news.component";

const routes: Routes = [
  { path: "", component: HomepageComponent },
  { path: "news", component: NewsComponent},
  {
    path: "news/newsdetails/:id",
    component: NewsDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
