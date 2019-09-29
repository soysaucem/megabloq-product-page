import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterHeadComponent } from './master-head.component';

describe('MasterHeadComponent', () => {
  let component: MasterHeadComponent;
  let fixture: ComponentFixture<MasterHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
