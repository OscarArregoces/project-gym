import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';
import { saveExercie } from 'src/app/state/actions/counter.actions';

import { ExercieServiceService } from 'src/app/core/services/exercie-service.service';
import { Dias, Ejercicio, AppState, SavedRoutines, Routine } from 'src/app/core/models/app.model';
import { Router } from '@angular/router';
import * as moment from 'moment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-rutina',
  templateUrl: './crear-rutina.component.html',
  styleUrls: ['./crear-rutina.component.scss']
})
export class CrearRutinaComponent implements OnInit {

  public ejercicios: Ejercicio[] = [];
  public savedRoutines!: SavedRoutines;
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

  public currentDate!: string;

  public form = new FormGroup({
    "titulo": new FormControl('', [Validators.required, Validators.maxLength(20)]),
    "dias": new FormControl('', Validators.required),
    "ejercicios": new FormControl(''),
  })


  constructor(
    public exercieService: ExercieServiceService,
    private store: Store<{ count: AppState }>,
    private router: Router
  ) { }

  ngOnInit() {
    moment.locale('es');
    this.savedRoutines = JSON.parse(localStorage.getItem('savedRoutines') as string);
    this.store.select('count').subscribe((ejercicios) => this.ejerciciosStore = ejercicios);
    this.getCurrentDate();
  }
  getCurrentDate(): string {
    const today = moment();
    const format = 'dddd Do MMMM YYYY, h:mm:ss a'
    const cadenaFormateada = this.formatearFechaHora(today.format(format));
    return cadenaFormateada;
  }


  handleSutmit() {
    let countId = 0
    const { titulo, dias } = this.form.value;

    if (!this.savedRoutines) {
      this.savedRoutines = {
        "rutines": []
      }
    }
    if (this.savedRoutines.rutines[this.savedRoutines.rutines.length - 1] === undefined) {
      countId = 0;
    } else {
      countId = this.savedRoutines.rutines[this.savedRoutines.rutines.length - 1].id;
    }



    let currentRutine: Routine = {
      id: countId + 1,
      titulo,
      dias,
      fecha: this.getCurrentDate(),
      rutina: [
        this.ejerciciosStore.ejercicios
      ]
    }

    if (this.ejerciciosStore.ejercicios.length <= 0){
       Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Selecciona al menos un ejercicio',
      });

      return
    } 

    this.savedRoutines.rutines.push(currentRutine)
    localStorage.setItem('savedRoutines', JSON.stringify(this.savedRoutines))
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Creado correctamente',
      showConfirmButton: false,
      timer: 1000
    })
    setTimeout(() => {
      this.router.navigateByUrl('');
    }, 1000);
  }

  onDropdownChange() {
    let ejercicio: any = this.form.controls.ejercicios.value;
    this.ejercicios = this.exercieService.ejercicios[ejercicio].items;
  }

  capitalizarPalabra(word: any) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }

  // Función para formatear la fecha y hora
  formatearFechaHora(cadena: any) {
    // Convertir la cadena a palabras capitalizadas
    const cadenaCapitalizada = cadena.replace(/\w+/g, this.capitalizarPalabra);

    // Ajustar el formato específico para el día
    const cadenaFormateada = cadenaCapitalizada.replace(" 2º ", " 2º ");

    // Convertir am a AM y pm a PM
    return cadenaFormateada.replace(/\b(am|pm)\b/gi, (match: any) => match.toUpperCase());
  }

}


