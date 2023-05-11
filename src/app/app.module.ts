import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonModule } from 'primeng/button';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CrearRutinaComponent } from './pages/crear-rutina/crear-rutina.component';
import { VerRutinaComponent } from './pages/ver-rutina/ver-rutina.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CrearRutinaComponent,
    VerRutinaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
