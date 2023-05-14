import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardExercieComponent } from './card-exercie.component';

describe('CardExercieComponent', () => {
  let component: CardExercieComponent;
  let fixture: ComponentFixture<CardExercieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardExercieComponent]
    });
    fixture = TestBed.createComponent(CardExercieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
