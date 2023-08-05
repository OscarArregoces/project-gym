import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState, SavedRoutines } from 'src/app/core/models/app.model';
import { addRoutine } from 'src/app/state/actions/counter.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public savedRoutines!: SavedRoutines;
  constructor(
    private router: Router,
    private store: Store<{ count: AppState }>,

  ) { }
  ngOnInit(): void {
    this.savedRoutines = JSON.parse(localStorage.getItem('savedRoutines')!)
    this.store.dispatch(addRoutine({ savedRoutine: this.savedRoutines }))

    if (!this.savedRoutines) {
      this.savedRoutines = { rutines: [] }
    }
  }

  handleButton() {
    this.router.navigateByUrl('crear-rutina')
  }
}
