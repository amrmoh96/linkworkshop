import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsSearchformComponent } from './news-searchform.component';

describe('NewsSearchformComponent', () => {
  let component: NewsSearchformComponent;
  let fixture: ComponentFixture<NewsSearchformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsSearchformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsSearchformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
