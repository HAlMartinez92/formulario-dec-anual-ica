import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionPagoVoluntarioComponent } from './seccion-pago-voluntario.component';

describe('SeccionPagoVoluntarioComponent', () => {
  let component: SeccionPagoVoluntarioComponent;
  let fixture: ComponentFixture<SeccionPagoVoluntarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeccionPagoVoluntarioComponent]
    });
    fixture = TestBed.createComponent(SeccionPagoVoluntarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
