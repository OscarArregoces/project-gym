import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerRutinaComponent } from './ver-rutina.component';

describe('VerRutinaComponent', () => {
  let component: VerRutinaComponent;
  let fixture: ComponentFixture<VerRutinaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerRutinaComponent]
    });
    fixture = TestBed.createComponent(VerRutinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
