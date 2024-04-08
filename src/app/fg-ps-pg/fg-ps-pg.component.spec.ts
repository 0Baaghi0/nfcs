import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FgPsPgComponent } from './fg-ps-pg.component';

describe('FgPsPgComponent', () => {
  let component: FgPsPgComponent;
  let fixture: ComponentFixture<FgPsPgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FgPsPgComponent]
    });
    fixture = TestBed.createComponent(FgPsPgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
