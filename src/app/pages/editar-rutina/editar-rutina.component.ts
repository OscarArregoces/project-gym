import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState, Dias, Ejercicio, Routine, SavedRoutines } from 'src/app/core/models/app.model';
import { ExercieServiceService } from 'src/app/core/services/exercie-service.service';
import { addExercies, resetExercie } from 'src/app/state/actions/counter.actions';
import Swal from 'sweetalert2';
import * as moment from 'moment';

@Component({
  selector: 'app-editar-rutina',
  templateUrl: './editar-rutina.component.html',
  styleUrls: ['./editar-rutina.component.scss']
})
export class EditarRutinaComponent implements OnInit, OnDestroy {

  public routine!: Routine | undefined;
  public routinesDay!: string;
  public savedRoutines!: SavedRoutines;

  public ejercicios: Ejercicio[] = [];
  public ejerciciosStore!: AppState;
  public dias: Dias[] = this.exercieService.dias

  public tipoEjercicio: string[] = this.exercieService.tipoEjercicio

  public currentDate!: string;
  public currentId!: number;

  public form = new FormGroup({
    "titulo": new FormControl('', [Validators.required, Validators.maxLength(20)]),
    "dias": new FormControl('', Validators.required),
    "ejercicios": new FormControl(''),
  })


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public exercieService: ExercieServiceService,
    private store: Store<{ count: AppState }>,
  ) { }


  ngOnInit(): void {
    moment.locale('es');
    this.currentId = +this.route.snapshot.paramMap.get('idRoutine')!;

    this.savedRoutines = JSON.parse(localStorage.getItem('savedRoutines')!);
    this.store.select('count').subscribe((ejercicios) => this.ejerciciosStore = ejercicios);

    if (!this.savedRoutines) {
      // this.router.navigateByUrl('')
      this.savedRoutines = { rutines: [] }
    }


    this.routine = this.savedRoutines.rutines.find((routine: Routine) => routine.id === this.currentId);


    if (this.routine === undefined) {
      this.router.navigateByUrl('')
    }

    this.form.patchValue(this.routine!)
    this.store.dispatch(addExercies({ ejercicios: this.routine?.rutina[0] }))
    this.getDaysParsed()
  }

  ngOnDestroy(): void {
    this.store.dispatch(resetExercie({ ejercicios: [] }))
  }


  getDaysParsed() {
    if (this.routine != undefined) {
      const diasNombres = this.routine.dias.map((elemento: any) => elemento.dia);
      const cadenaDeDias = diasNombres.join(', ');
      this.routinesDay = cadenaDeDias;
    }
  }

  getCurrentDate(): string {
    const today = moment();
    const format = 'dddd Do MMMM YYYY, h:mm:ss a'
    const cadenaFormateada = this.exercieService.formatearFechaHora(today.format(format));
    return cadenaFormateada;
  }


  handleSutmit() {
    const { titulo, dias } = this.form.value;

    if (!this.savedRoutines) {
      this.savedRoutines = {
        "rutines": []
      }
    }

    let currentRutine: Routine = {
      id: this.currentId,
      titulo,
      dias,
      fecha: this.getCurrentDate(),
      rutina: [
        this.ejerciciosStore.ejercicios
      ]
    }

    if (this.ejerciciosStore.ejercicios.length <= 0) {
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Selecciona al menos un ejercicio',
      });

      return
    }

    const newSavedRoutines = this.savedRoutines.rutines.filter((routine: Routine) => routine.id !== this.currentId);

    this.savedRoutines.rutines = newSavedRoutines;
    this.savedRoutines.rutines.push(currentRutine)
    localStorage.setItem('savedRoutines', JSON.stringify(this.savedRoutines))

    this.store.dispatch(resetExercie({ ejercicios: [] }));
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Editado correctamente',
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

}
