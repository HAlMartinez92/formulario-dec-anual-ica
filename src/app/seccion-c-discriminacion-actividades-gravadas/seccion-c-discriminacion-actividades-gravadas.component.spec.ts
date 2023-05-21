import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionCDiscriminacionActividadesGravadasComponent } from './seccion-c-discriminacion-actividades-gravadas.component';

describe('SeccionCDiscriminacionActividadesGravadasComponent', () => {
  let component: SeccionCDiscriminacionActividadesGravadasComponent;
  let fixture: ComponentFixture<SeccionCDiscriminacionActividadesGravadasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeccionCDiscriminacionActividadesGravadasComponent]
    });
    fixture = TestBed.createComponent(SeccionCDiscriminacionActividadesGravadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
