import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckPrintingComponent } from './check-printing.component';

describe('CheckPrintingComponent', () => {
  let component: CheckPrintingComponent;
  let fixture: ComponentFixture<CheckPrintingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckPrintingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckPrintingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
