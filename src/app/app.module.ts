import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';



import { FooterComponent } from './components/shared/footer/footer.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { NewsCardComponent } from './components/shared/news-card/news-card.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SliderComponent } from './components/homepage/slider/slider.component';
import { SideMenuComponent } from './components/shared/side-menu/side-menu.component';
import { FormateDatePipe } from './pipes/formate-date.pipe';
import { NewsComponent } from './components/news/news.component';
import { BreedCrumbComponent } from './components/shared/breed-crumb/breed-crumb.component';
import { NewsDetailsComponent } from './components/news-details/news-details.component';
import { NewsSearchformComponent } from './components/shared/news-searchform/news-searchform.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NewsCardComponent,
    HomepageComponent,
    SliderComponent,
    SideMenuComponent,
    FormateDatePipe,
    NewsComponent,
    BreedCrumbComponent,
    NewsDetailsComponent,
    NewsSearchformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
