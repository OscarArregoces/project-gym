export interface AppState {
    ejercicios: Ejercicio[]
}

export interface ExercieSaved {
    titulo: string,
    dias: any,
    rutinas: any
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
