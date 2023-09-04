import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState, Routine, SavedRoutines } from 'src/app/core/models/app.model';
import { addRoutine } from 'src/app/state/actions/counter.actions';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-card-rutine',
  templateUrl: './card-rutine.component.html',
  styleUrls: ['./card-rutine.component.scss']
})
export class CardRutineComponent implements OnInit {
  @Input() rutine!: Routine;
  public routineStore!: AppState;
  public savedRoutines!: SavedRoutines;
  constructor(
    private router: Router,
    private store: Store<{ count: AppState }>
  ) { }


  ngOnInit(): void {
    this.savedRoutines = JSON.parse(localStorage.getItem('savedRoutines')!);
    if (!this.savedRoutines) {
      this.savedRoutines = { rutines: [] }
    }
    // console.log(this.rutine);
  }

  handleClickShow() {
    this.router.navigateByUrl(`ver-rutina/${this.rutine.id}`);
  }
  handleClickEdit() {
    this.router.navigateByUrl(`editar-rutina/${this.rutine.id}`);
   }

  handleClickDelete(idRoutine: number) {
    const newSavedRoutine = this.savedRoutines.rutines.filter((routine: Routine) => routine.id != idRoutine);
    console.log(newSavedRoutine)

    let data: SavedRoutines = {
      rutines: newSavedRoutine
    }
    if (newSavedRoutine.length > 0) {
      localStorage.setItem('savedRoutines', JSON.stringify(data));
    } else {
      localStorage.removeItem('savedRoutines');
    }

    this.store.dispatch(addRoutine({ savedRoutines: data }));

    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Eliminado',
      showConfirmButton: false,
      timer: 1500
    })
  }
}
