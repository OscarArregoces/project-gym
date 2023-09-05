import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CrearRutinaComponent } from './pages/crear-rutina/crear-rutina.component';
import { VerRutinaComponent } from './pages/ver-rutina/ver-rutina.component';
import { EditarRutinaComponent } from './pages/editar-rutina/editar-rutina.component';
import { VerEjerciciosComponent } from './pages/ver-ejercicios/ver-ejercicios.component';
import { DevInfoComponent } from './pages/dev-info/dev-info.component';


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
    path: 'editar-rutina/:idRoutine',
    component: EditarRutinaComponent
  },
  {
    path: 'ejercicios',
    component: VerEjerciciosComponent
  },
  {
    path: 'dev-info',
    component: DevInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
