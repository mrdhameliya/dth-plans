import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainScreenContentComponent } from './main-screen-content.component';

describe('MainScreenContentComponent', () => {
  let component: MainScreenContentComponent;
  let fixture: ComponentFixture<MainScreenContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainScreenContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainScreenContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
