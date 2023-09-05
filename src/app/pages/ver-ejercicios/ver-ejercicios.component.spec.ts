import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerEjerciciosComponent } from './ver-ejercicios.component';

describe('VerEjerciciosComponent', () => {
  let component: VerEjerciciosComponent;
  let fixture: ComponentFixture<VerEjerciciosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerEjerciciosComponent]
    });
    fixture = TestBed.createComponent(VerEjerciciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
