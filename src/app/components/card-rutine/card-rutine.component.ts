import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppState, Routine, SavedRoutines } from 'src/app/core/models/app.model';
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
  handleClickEdit() { }

  handleClickDelete(idRoutine: number) {
    const newSavedRoutine = this.savedRoutines.rutines.filter((routine: Routine) => routine.id != idRoutine);
    
    let data:SavedRoutines = {
      rutines: newSavedRoutine
    }
    if (newSavedRoutine.length > 0) return localStorage.setItem('savedRoutines', JSON.stringify(data));

    localStorage.removeItem('savedRoutines');

    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Eliminado',
      showConfirmButton: false,
      timer: 1500
    })
  }
}


// this.store.select('count').subscribe((store: AppState) => {

//   let storeSaveRoutines: SavedRoutines = store.savedRoutines;

//   const newSavedRoutine = storeSaveRoutines.rutines.filter((routine: Routine) => routine.id != idRoutine);
//   console.log(newSavedRoutine)
//   if (newSavedRoutine.length > 0) return localStorage.setItem('savedRoutines', JSON.stringify(newSavedRoutine));

//   localStorage.removeItem('savedRoutines');
// });