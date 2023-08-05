import { Component, Input } from '@angular/core';
import { Ejercicio } from 'src/app/core/models/app.model';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss']
})
export class CardDetailComponent {

  @Input() ejercicio!: Ejercicio;


  ngOnInit(): void {
    // console.log(this.ejercicio)
  }

}
