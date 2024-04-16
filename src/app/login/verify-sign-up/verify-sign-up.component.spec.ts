import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifySignUpComponent } from './verify-sign-up.component';

describe('VerifySignUpComponent', () => {
  let component: VerifySignUpComponent;
  let fixture: ComponentFixture<VerifySignUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerifySignUpComponent]
    });
    fixture = TestBed.createComponent(VerifySignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
