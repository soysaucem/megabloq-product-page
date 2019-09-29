import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickTrackingComponent } from './click-tracking.component';

describe('ClickTrackingComponent', () => {
  let component: ClickTrackingComponent;
  let fixture: ComponentFixture<ClickTrackingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickTrackingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
