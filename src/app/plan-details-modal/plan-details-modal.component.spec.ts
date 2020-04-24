import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanDetailsModalComponent } from './plan-details-modal.component';

describe('PlanDetailsModalComponent', () => {
  let component: PlanDetailsModalComponent;
  let fixture: ComponentFixture<PlanDetailsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanDetailsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
