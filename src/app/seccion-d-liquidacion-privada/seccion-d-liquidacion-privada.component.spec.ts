import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionDLiquidacionPrivadaComponent } from './seccion-d-liquidacion-privada.component';

describe('SeccionDLiquidacionPrivadaComponent', () => {
  let component: SeccionDLiquidacionPrivadaComponent;
  let fixture: ComponentFixture<SeccionDLiquidacionPrivadaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeccionDLiquidacionPrivadaComponent]
    });
    fixture = TestBed.createComponent(SeccionDLiquidacionPrivadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
