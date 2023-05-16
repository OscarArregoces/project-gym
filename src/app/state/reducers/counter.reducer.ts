import { createReducer, on } from '@ngrx/store';
import { addExercie, removeExercie, saveExercie } from '../actions/counter.actions';
import { state } from '@angular/animations';
import { AppState, Ejercicio } from 'src/app/core/models/app.model';


export const initialState: AppState = {
  ejercicios: [],
}

export const counterReducer = createReducer(
  initialState,
  on(addExercie, (state, { ejercicio }) => {
    const exist: boolean = state.ejercicios.some((exercie: Ejercicio) => exercie.id === ejercicio.id && exercie.type === ejercicio.type);
    if (!exist) return { ...state, ejercicios: [...state.ejercicios, ejercicio] }

    return state
  }),

  on(removeExercie, (state, { ejercicio }) => ({ ...state, ejercicios: state.ejercicios.filter((exercie: Ejercicio) => exercie.id === ejercicio.id && exercie.type === ejercicio.type) }))
  // on(saveExercie, (state) => ),
)



