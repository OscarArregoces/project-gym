import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ExercieServiceService } from 'src/app/core/services/exercie-service.service';
import { Dias, Ejercicio, AppState } from 'src/app/core/models/app.model';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { addExercie, removeExercie, saveExercie } from 'src/app/state/actions/counter.actions';

@Component({
  selector: 'app-crear-rutina',
  templateUrl: './crear-rutina.component.html',
  styleUrls: ['./crear-rutina.component.scss']
})
export class CrearRutinaComponent implements OnInit {

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

  count$: Observable<AppState>;

  constructor(
    public exercieService: ExercieServiceService,
    private store: Store<{ count: AppState }>
  ) {
    this.count$ = store.select('count');
  }

  ngOnInit() {
    this.store.select('count').subscribe(contador => console.log(contador))
  }


  handleSutmit() {

  }

  onDropdownChange() {
    let ejercicio: any = this.form.controls.ejercicios.value;
    this.ejercicios = this.exercieService.ejercicios[ejercicio].items;

  }
}


