import { Component, Input, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, Ejercicio } from 'src/app/core/models/app.model';
import { addExercie, removeExercie } from 'src/app/state/actions/counter.actions';

@Component({
  selector: 'app-card-exercie',
  templateUrl: './card-exercie.component.html',
  styleUrls: ['./card-exercie.component.scss']
})
export class CardExercieComponent implements OnInit {


  @Input() ejercicio!: Ejercicio

  public status: boolean = true; // NO EXISTE
  private ejercicios!: AppState;

  constructor(
    private store: Store<{ count: AppState }>
  ) { }

  ngOnInit(): void {
    this.store.select('count').subscribe(ejercicios => this.ejercicios = ejercicios);
    this.verificatedExercie();
  }
  verificatedExercie() {
    this.ejercicios.ejercicios.forEach((ejercicio: Ejercicio) => {
      if (ejercicio.id === this.ejercicio.id && ejercicio.type === this.ejercicio.type) {
        this.status = ejercicio.status || false;
      }
    });

  }

  addExercie(): void {
    let newEjercicio: Ejercicio = { ...this.ejercicio, status: false };
    this.status = false;
    this.store.dispatch(addExercie({ ejercicio: newEjercicio }))
  }

  removeExercie(): void {
    this.status = true;

    this.store.dispatch(removeExercie({ ejercicio: this.ejercicio }))
  }

}
