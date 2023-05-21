import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionFFirmasComponent } from './seccion-f-firmas.component';

describe('SeccionFFirmasComponent', () => {
  let component: SeccionFFirmasComponent;
  let fixture: ComponentFixture<SeccionFFirmasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeccionFFirmasComponent]
    });
    fixture = TestBed.createComponent(SeccionFFirmasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
