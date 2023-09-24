import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAccStatusComponent } from './display-acc-status.component';

describe('DisplayAccStatusComponent', () => {
  let component: DisplayAccStatusComponent;
  let fixture: ComponentFixture<DisplayAccStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayAccStatusComponent]
    });
    fixture = TestBed.createComponent(DisplayAccStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
