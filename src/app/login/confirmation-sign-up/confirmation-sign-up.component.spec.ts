import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationSignUpComponent } from './confirmation-sign-up.component';

describe('ConfirmationSignUpComponent', () => {
  let component: ConfirmationSignUpComponent;
  let fixture: ComponentFixture<ConfirmationSignUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmationSignUpComponent]
    });
    fixture = TestBed.createComponent(ConfirmationSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
