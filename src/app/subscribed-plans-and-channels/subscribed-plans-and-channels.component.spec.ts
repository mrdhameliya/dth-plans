import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribedPlansAndChannelsComponent } from './subscribed-plans-and-channels.component';

describe('SubscribedPlansAndChannelsComponent', () => {
  let component: SubscribedPlansAndChannelsComponent;
  let fixture: ComponentFixture<SubscribedPlansAndChannelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscribedPlansAndChannelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribedPlansAndChannelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
