import { createAction, props } from '@ngrx/store';
import { Ejercicio, Routine, SavedRoutines } from 'src/app/core/models/app.model';

export const addExercie = createAction('[Counter Component] Add', props<{ ejercicio: Ejercicio }>());
export const removeExercie = createAction('[Counter Component] Remove', props<{ ejercicio: Ejercicio }>());
export const saveExercie = createAction('[Counter Component] Save');
export const addRoutine = createAction('[Counter Component] Save',props<{ savedRoutine: SavedRoutines }>());