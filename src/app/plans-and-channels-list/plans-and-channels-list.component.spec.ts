import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansAndChannelsListComponent } from './plans-and-channels-list.component';

describe('PlansAndChannelsListComponent', () => {
  let component: PlansAndChannelsListComponent;
  let fixture: ComponentFixture<PlansAndChannelsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlansAndChannelsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlansAndChannelsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
