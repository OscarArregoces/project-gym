import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ExercieServiceService } from 'src/app/core/services/exercie-service.service';
import { Dias, Ejercicio } from 'src/app/core/models/app.model';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from 'src/app/state/actions/counter.actions';

@Component({
  selector: 'app-crear-rutina',
  templateUrl: './crear-rutina.component.html',
  styleUrls: ['./crear-rutina.component.scss']
})
export class CrearRutinaComponent {

  public ejercicios: Ejercicio[] = [];
  public dias: Dias[] = [
    { "dia": 'Lunes' },
    { "dia": 'Martes' },
    { "dia": 'Miercoles' },
    { "dia": 'Jueves' },
    { "dia": 'Viernes' },
    { "dia": 'Sabado' },
    { "dia": 'Domingo' },
  ]

  public tipoEjercicio: string[] = [
    'Abdomen',
    'Biceps',
    'Espalda',
    'Hombros',
    'Pectoral',
    'Piernas',
    'Trapesio',
    'Triceps',
  ]

  public form = new FormGroup({
    "titulo": new FormControl('', Validators.required),
    "dias": new FormControl('', Validators.required),
    "ejercicios": new FormControl('', Validators.required),
  })

  count$: Observable<number>;

  constructor(
    public exercieService: ExercieServiceService,
    private store: Store<{ count: number }>
  ) {
    this.count$ = store.select('count');
  }



  handleSutmit() {
    console.log(this.form.controls.ejercicios.value)
  }

  onDropdownChange() {
    switch (this.form.controls.ejercicios.value) {
      case 'Abdomen':
        this.ejercicios = this.exercieService.ejercicios.Abdomen.items;
        break;
      case 'Biceps':
        this.ejercicios = this.exercieService.ejercicios.Biceps.items;
        break;
      case 'Espalda':
        this.ejercicios = this.exercieService.ejercicios.Espalda.items;
        break;
      case 'Hombros':
        this.ejercicios = this.exercieService.ejercicios.Hombros.items;
        break;
      case 'Pectoral':
        this.ejercicios = this.exercieService.ejercicios.Pectoral.items;
        break;
      case 'Piernas':
        this.ejercicios = this.exercieService.ejercicios.Piernas.items;
        break;
      case 'Trapesio':
        this.ejercicios = this.exercieService.ejercicios.Trapesio.items;
        break;
      case 'Triceps':
        this.ejercicios = this.exercieService.ejercicios.Triceps.items;
        break;
    }
  }


  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}


