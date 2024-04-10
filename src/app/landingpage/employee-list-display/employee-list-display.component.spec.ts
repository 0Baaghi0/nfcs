import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeListDisplayComponent } from './employee-list-display.component';

describe('EmployeeListDisplayComponent', () => {
  let component: EmployeeListDisplayComponent;
  let fixture: ComponentFixture<EmployeeListDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeListDisplayComponent]
    });
    fixture = TestBed.createComponent(EmployeeListDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
