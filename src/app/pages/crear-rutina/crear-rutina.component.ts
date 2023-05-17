import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';
import { saveExercie } from 'src/app/state/actions/counter.actions';

import { ExercieServiceService } from 'src/app/core/services/exercie-service.service';
import { Dias, Ejercicio, AppState, ExercieSaved } from 'src/app/core/models/app.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-rutina',
  templateUrl: './crear-rutina.component.html',
  styleUrls: ['./crear-rutina.component.scss']
})
export class CrearRutinaComponent implements OnInit {

  public ejercicios: Ejercicio[] = [];
  public ejerciciosSaved!: ExercieSaved;
  public ejerciciosStore!: AppState;
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
    "titulo": new FormControl('', [Validators.required, Validators.maxLength(40)]),
    "dias": new FormControl('', Validators.required),
    "ejercicios": new FormControl(''),
  })


  constructor(
    public exercieService: ExercieServiceService,
    private store: Store<{ count: AppState }>,
    private router: Router
  ) { }

  ngOnInit() {
    this.ejerciciosSaved = JSON.parse(localStorage.getItem('saved') as string);
    this.store.select('count').subscribe((ejercicios) => this.ejerciciosStore = ejercicios);
  }


  handleSutmit() {
    const { titulo, dias } = this.form.value;

    let saved = {
      titulo,
      dias,
      rutinas: [
        this.ejerciciosStore.ejercicios
      ]
    }

    if (this.ejerciciosStore.ejercicios.length <= 0) return alert('Selecciona al menos un ejercicio');

    if (this.ejerciciosSaved.rutinas.length === 0) localStorage.setItem('saved', JSON.stringify(saved));

    if (this.ejerciciosSaved.rutinas.length > 0) {
      this.ejerciciosSaved.rutinas.push(this.ejerciciosStore.ejercicios)
      localStorage.setItem('saved', JSON.stringify(this.ejerciciosSaved))
    };


    this.router.navigateByUrl('');

  }

  onDropdownChange() {
    let ejercicio: any = this.form.controls.ejercicios.value;
    this.ejercicios = this.exercieService.ejercicios[ejercicio].items;

  }
}


