import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelievingComponent } from './relieving.component';

describe('RelievingComponent', () => {
  let component: RelievingComponent;
  let fixture: ComponentFixture<RelievingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RelievingComponent]
    });
    fixture = TestBed.createComponent(RelievingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
