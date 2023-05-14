import { Component, Input } from '@angular/core';
import { Ejercicio } from 'src/app/core/models/app.model';

@Component({
  selector: 'app-card-exercie',
  templateUrl: './card-exercie.component.html',
  styleUrls: ['./card-exercie.component.scss']
})
export class CardExercieComponent {

  @Input() ejercicio!: Ejercicio

}
