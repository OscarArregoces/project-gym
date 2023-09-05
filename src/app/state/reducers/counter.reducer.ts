import { createReducer, on } from '@ngrx/store';
import { addExercie, addExercies, addRoutine, removeExercie, resetExercie } from '../actions/counter.actions';
import { AppState, Ejercicio } from 'src/app/core/models/app.model';


export const initialState: AppState = {
  ejercicios: [],
  savedRoutines: {
    rutines: []
  }
}

export const counterReducer = createReducer(
  initialState,
  on(addExercie, (state, { ejercicio }) => {
    const exist: boolean = state.ejercicios.some((exercie: Ejercicio) => exercie.id === ejercicio.id && exercie.type === ejercicio.type);
    if (!exist) return { ...state, ejercicios: [...state.ejercicios, ejercicio] }

    return state
  }),

  on(addExercies, (state, { ejercicios }) => {
    if (!ejercicios) return state
    return { ...state, ejercicios }
  }),

  on(removeExercie, (state, { ejercicio }) => ({ ...state, ejercicios: state.ejercicios.filter((exercie: Ejercicio) => exercie.id === ejercicio.id && exercie.type === ejercicio.type) })),

  on(addRoutine, (state, { savedRoutines }) => ({ ...state, savedRoutines })),

  on(resetExercie, (state, { ejercicios }) => {
    return { ...state, ejercicios }
  }),


)
