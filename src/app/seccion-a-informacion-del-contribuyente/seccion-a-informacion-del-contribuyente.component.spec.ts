import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionAInformacionDelContribuyenteComponent } from './seccion-a-informacion-del-contribuyente.component';

describe('SeccionAInformacionDelContribuyenteComponent', () => {
  let component: SeccionAInformacionDelContribuyenteComponent;
  let fixture: ComponentFixture<SeccionAInformacionDelContribuyenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeccionAInformacionDelContribuyenteComponent]
    });
    fixture = TestBed.createComponent(SeccionAInformacionDelContribuyenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
