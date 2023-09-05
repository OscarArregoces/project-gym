import { Component, OnInit } from '@angular/core';
import { Ejercicio } from 'src/app/core/models/app.model';
import { ExercieServiceService } from 'src/app/core/services/exercie-service.service';

@Component({
  selector: 'app-ver-ejercicios',
  templateUrl: './ver-ejercicios.component.html',
  styleUrls: ['./ver-ejercicios.component.scss']
})
export class VerEjerciciosComponent implements OnInit {

  public ejercicios: any;

  constructor(
    public exercieService: ExercieServiceService, 
  ){ }
  
  ngOnInit(): void {
    this.ejercicios = this.exercieService.ejercicios;
  }

  obtenerTodosLosEjercicios(): any[] {
    const todosLosEjercicios: any[] = [];
    for (const grupo in this.ejercicios) {
      todosLosEjercicios.push(...this.ejercicios[grupo].items);
    }
    return todosLosEjercicios;
  }
}
