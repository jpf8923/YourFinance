import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DisplayPurchasesComponent } from './display-purchases.component';

describe('DisplayPurchasesComponent', () => {
  let component: DisplayPurchasesComponent;
  let fixture: ComponentFixture<DisplayPurchasesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayPurchasesComponent]
    });
    fixture = TestBed.createComponent(DisplayPurchasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
