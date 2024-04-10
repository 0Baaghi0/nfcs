import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetSuccessfulComponent } from './reset-successful.component';

describe('ResetSuccessfulComponent', () => {
  let component: ResetSuccessfulComponent;
  let fixture: ComponentFixture<ResetSuccessfulComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResetSuccessfulComponent]
    });
    fixture = TestBed.createComponent(ResetSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
