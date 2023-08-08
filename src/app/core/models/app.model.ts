export interface AppState {
    ejercicios: Ejercicio[],
    savedRoutines: SavedRoutines
}

export interface Routine {
    id: number;
    titulo: any,
    dias: any,
    fecha:any,
    rutina: any,
}
export interface SavedRoutines{
    rutines: Routine[]
}

export interface Ejercicio {
    id: number,
    type: string,
    name: string,
    img: string,
    status?: boolean
}
export interface Dias {
    dia: string,
}
