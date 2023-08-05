import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CrearRutinaComponent } from './pages/crear-rutina/crear-rutina.component';
import { VerRutinaComponent } from './pages/ver-rutina/ver-rutina.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'crear-rutina',
    component: CrearRutinaComponent
  },
  {
    path: 'ver-rutina/:idRoutine',
    component: VerRutinaComponent
  },
  {
    path: 'ejercicios',
    component: VerRutinaComponent
  },
  {
    path: 'dev-info',
    component: VerRutinaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
