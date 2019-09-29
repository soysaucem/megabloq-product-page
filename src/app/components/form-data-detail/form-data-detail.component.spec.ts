import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDataDetailComponent } from './form-data-detail.component';

describe('FormDataDetailComponent', () => {
  let component: FormDataDetailComponent;
  let fixture: ComponentFixture<FormDataDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDataDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDataDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
