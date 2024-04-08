import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateLettersComponent } from './generate-letters.component';

describe('GenerateLettersComponent', () => {
  let component: GenerateLettersComponent;
  let fixture: ComponentFixture<GenerateLettersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenerateLettersComponent]
    });
    fixture = TestBed.createComponent(GenerateLettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
