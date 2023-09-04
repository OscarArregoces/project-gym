import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CrearRutinaComponent } from './pages/crear-rutina/crear-rutina.component';
import { VerRutinaComponent } from './pages/ver-rutina/ver-rutina.component';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { CardExercieComponent } from './components/card-exercie/card-exercie.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { counterReducer } from './state/reducers/counter.reducer';
import { CardRutineComponent } from './components/card-rutine/card-rutine.component';
import { CardDetailComponent } from './components/card-detail/card-detail.component';
import { EditarRutinaComponent } from './pages/editar-rutina/editar-rutina.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CrearRutinaComponent,
    VerRutinaComponent,
    CardExercieComponent,
    NavbarComponent,
    CardRutineComponent,
    CardDetailComponent,
    EditarRutinaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    FormsModule,
    ReactiveFormsModule,

    StoreModule.forRoot({ count: counterReducer }),
    StoreDevtoolsModule.instrument({ name: 'Test' }),

    BrowserAnimationsModule,
    ButtonModule,
    CardModule,
    DropdownModule,
    InputTextModule,
    MultiSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
