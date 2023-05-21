import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionOpcionesDeUsoComponent } from './seccion-opciones-de-uso.component';

describe('SeccionOpcionesDeUsoComponent', () => {
  let component: SeccionOpcionesDeUsoComponent;
  let fixture: ComponentFixture<SeccionOpcionesDeUsoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeccionOpcionesDeUsoComponent]
    });
    fixture = TestBed.createComponent(SeccionOpcionesDeUsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
