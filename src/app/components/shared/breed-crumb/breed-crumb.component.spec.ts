import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedCrumbComponent } from './breed-crumb.component';

describe('BreedCrumbComponent', () => {
  let component: BreedCrumbComponent;
  let fixture: ComponentFixture<BreedCrumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreedCrumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreedCrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
