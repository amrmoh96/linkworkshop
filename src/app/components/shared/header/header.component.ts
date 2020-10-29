import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public showSideMenu:boolean = false;
  constructor() { }

  ngOnInit() {
  }

  public toggleSideMenu(){
    this.showSideMenu = !this.showSideMenu
  }

}
