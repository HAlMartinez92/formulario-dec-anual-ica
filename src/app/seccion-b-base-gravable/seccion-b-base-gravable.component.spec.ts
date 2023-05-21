import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionBBaseGravableComponent } from './seccion-b-base-gravable.component';

describe('SeccionBBaseGravableComponent', () => {
  let component: SeccionBBaseGravableComponent;
  let fixture: ComponentFixture<SeccionBBaseGravableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeccionBBaseGravableComponent]
    });
    fixture = TestBed.createComponent(SeccionBBaseGravableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
