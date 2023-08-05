import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {  Routine, SavedRoutines } from 'src/app/core/models/app.model';

@Component({
  selector: 'app-ver-rutina',
  templateUrl: './ver-rutina.component.html',
  styleUrls: ['./ver-rutina.component.scss']
})
export class VerRutinaComponent implements OnInit {

  public routine!: Routine | undefined;
  public routinesDay!: string;
  public savedRoutines!: SavedRoutines;
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const idRoutine = +this.route.snapshot.paramMap.get('idRoutine')!;

    this.savedRoutines = JSON.parse(localStorage.getItem('savedRoutines')!);

    if (!this.savedRoutines) {
      this.savedRoutines = { rutines: [] }
    }

    this.routine = this.savedRoutines.rutines.find((routine: Routine) => routine.id === idRoutine);

    if(this.routine === undefined){
      this.router.navigateByUrl('')
    }
    this.getDaysParsed()
  }

  getDaysParsed() {
    if(this.routine != undefined){
      const diasNombres = this.routine.dias.map((elemento: any) => elemento.dia);
      const cadenaDeDias = diasNombres.join(', ');
      this.routinesDay = cadenaDeDias;
    }
  }

}
