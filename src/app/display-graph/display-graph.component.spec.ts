import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayGraphComponent } from './display-graph.component';

describe('DisplayGraphComponent', () => {
  let component: DisplayGraphComponent;
  let fixture: ComponentFixture<DisplayGraphComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayGraphComponent]
    });
    fixture = TestBed.createComponent(DisplayGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
