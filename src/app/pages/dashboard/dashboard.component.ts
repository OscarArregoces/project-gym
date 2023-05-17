import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public ejercicios!:any [];

  constructor(
    private router: Router
  ){}
  ngOnInit(): void {
    let saved = JSON.parse(localStorage.getItem('saved') as string)


    if(saved) this.ejercicios = saved.rutinas;

    console.log(saved)
  }

  handleButton(){
    this.router.navigateByUrl('crear-rutina')
  }
}
