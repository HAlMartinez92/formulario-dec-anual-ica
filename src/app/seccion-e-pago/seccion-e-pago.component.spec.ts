import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionEPagoComponent } from './seccion-e-pago.component';

describe('SeccionEPagoComponent', () => {
  let component: SeccionEPagoComponent;
  let fixture: ComponentFixture<SeccionEPagoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeccionEPagoComponent]
    });
    fixture = TestBed.createComponent(SeccionEPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
