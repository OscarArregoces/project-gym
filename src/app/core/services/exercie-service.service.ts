import { Injectable } from '@angular/core';
import { Dias } from '../models/app.model';

@Injectable({
    providedIn: 'root'
})
export class ExercieServiceService {
    public ejercicios: any = {
        "Abdomen": {
            items: [
                { 'id': 1, 'type': 'Abdomen', 'name': 'Alcance y captura alternativos', 'img': 'assets/image_ejercicios/abdomen/1.jpg' },
                { 'id': 2, 'type': 'Abdomen', 'name': 'Cuartel cuarto crunch', 'img': 'assets/image_ejercicios/abdomen/2.jpg' },
                { 'id': 3, 'type': 'Abdomen', 'name': 'Curling body via block simulator', 'img': 'assets/image_ejercicios/abdomen/3.jpg' },
                { 'id': 4, 'type': 'Abdomen', 'name': 'Doble giro en el banco', 'img': 'assets/image_ejercicios/abdomen/4.jpg' },
                { 'id': 5, 'type': 'Abdomen', 'name': 'Flexion del cuerpo con manos y pies', 'img': 'assets/image_ejercicios/abdomen/5.jpg' },
                { 'id': 6, 'type': 'Abdomen', 'name': 'La oblique se levanta en los bares paralelos', 'img': 'assets/image_ejercicios/abdomen/6.jpg' },
                { 'id': 7, 'type': 'Abdomen', 'name': 'Llevando las Piernas a los brazos colgando del travesaño', 'img': 'assets/image_ejercicios/abdomen/7.jpg' },
                { 'id': 8, 'type': 'Abdomen', 'name': 'Oblique twist with weight plate', 'img': 'assets/image_ejercicios/abdomen/8.jpg' },
                { 'id': 9, 'type': 'Abdomen', 'name': 'Pendiente', 'img': 'assets/image_ejercicios/abdomen/9.jpg' },
                { 'id': 10, 'type': 'Abdomen', 'name': 'Pistas laterales de pie', 'img': 'assets/image_ejercicios/abdomen/10.jpg' },
                { 'id': 11, 'type': 'Abdomen', 'name': 'Sube el maletero', 'img': 'assets/image_ejercicios/abdomen/11.jpg' },
                { 'id': 12, 'type': 'Abdomen', 'name': 'Tocadores de talones alternativos', 'img': 'assets/image_ejercicios/abdomen/12.jpg' }
            ]
        },
        "Biceps": {
            items: [
                { 'id': 1, 'type': 'Biceps', 'name': 'Colapso en el suelo del maletero', 'img': 'assets/image_ejercicios/biceps/1.jpg' },
                { 'id': 2, 'type': 'Biceps', 'name': 'Curl con una empuñadora de timbre', 'img': 'assets/image_ejercicios/biceps/2.jpg' },
                { 'id': 3, 'type': 'Biceps', 'name': 'Curl en el simulador', 'img': 'assets/image_ejercicios/biceps/3.jpg' },
                { 'id': 4, 'type': 'Biceps', 'name': 'Cursl de barra EZ', 'img': 'assets/image_ejercicios/biceps/4.jpg' },
                { 'id': 5, 'type': 'Biceps', 'name': 'Curl de agarre cercano sentado en barra', 'img': 'assets/image_ejercicios/biceps/5.jpg' },
                { 'id': 6, 'type': 'Biceps', 'name': 'Un brazo doblado rizo predicador', 'img': 'assets/image_ejercicios/biceps/6.jpg' }
            ]
        },
        "Espalda": {
            items: [
                { 'id': 1, 'type': 'Espalda', 'name': 'Arrojar campanillas en la pendiente', 'img': 'assets/image_ejercicios/espalda/1.jpg' },
                { 'id': 2, 'type': 'Espalda', 'name': 'Tercero', 'img': 'assets/image_ejercicios/espalda/2.jpg' },
                { 'id': 3, 'type': 'Espalda', 'name': 'Banca inclinada dos brazos tirados', 'img': 'assets/image_ejercicios/espalda/3.jpg' },
                { 'id': 4, 'type': 'Espalda', 'name': 'Dominada', 'img': 'assets/image_ejercicios/espalda/4.jpg' },
                { 'id': 5, 'type': 'Espalda', 'name': 'Expulsar el simulador Hummer', 'img': 'assets/image_ejercicios/espalda/5.jpg' },
                { 'id': 6, 'type': 'Espalda', 'name': 'Extremo de los brazos rectos delbloque superior', 'img': 'assets/image_ejercicios/espalda/6.jpg' },
                { 'id': 7, 'type': 'Espalda', 'name': 'Fila doblada de barbel', 'img': 'assets/image_ejercicios/espalda/7.jpg' },
                { 'id': 8, 'type': 'Espalda', 'name': 'Impulso horizontal sobre el simulador', 'img': 'assets/image_ejercicios/espalda/8.jpg' },
                { 'id': 9, 'type': 'Espalda', 'name': 'Levantando timbre en la mano', 'img': 'assets/image_ejercicios/espalda/9.jpg' },
                { 'id': 10, 'type': 'Espalda', 'name': 'Maquina de agarre invertida', 'img': 'assets/image_ejercicios/espalda/10.jpg' },
                { 'id': 11, 'type': 'Espalda', 'name': 'Termina el timbre con una mano', 'img': 'assets/image_ejercicios/espalda/11.jpg' },
                { 'id': 12, 'type': 'Espalda', 'name': 'Thrust T-shaped on the back muscles in the slope', 'img': 'assets/image_ejercicios/espalda/12.jpg' },
                { 'id': 13, 'type': 'Espalda', 'name': 'Tira asistida por maquina', 'img': 'assets/image_ejercicios/espalda/13.jpg' },
            ]
        },
        "Hombros": {
            items: [
                { 'id': 1, 'type': 'Hombros', 'name': 'Arnold press', 'img': 'assets/image_ejercicios/hombros/1.jpg' },
                { 'id': 2, 'type': 'Hombros', 'name': 'Barbell bent over row', 'img': 'assets/image_ejercicios/hombros/2.jpg' },
                { 'id': 3, 'type': 'Hombros', 'name': 'Barbell front raise', 'img': 'assets/image_ejercicios/hombros/3.jpg' },
                { 'id': 4, 'type': 'Hombros', 'name': 'Bent over reverse fly', 'img': 'assets/image_ejercicios/hombros/4.jpg' },
                { 'id': 5, 'type': 'Hombros', 'name': 'Cruzar los brazos para bloquear el soporte del simulador', 'img': 'assets/image_ejercicios/hombros/5.jpg' },
                { 'id': 6, 'type': 'Hombros', 'name': 'Dips', 'img': 'assets/image_ejercicios/hombros/6.jpg' },
                { 'id': 7, 'type': 'Hombros', 'name': 'Inclined bench press', 'img': 'assets/image_ejercicios/hombros/7.jpg' },
                { 'id': 8, 'type': 'Hombros', 'name': 'Knee roll-out', 'img': 'assets/image_ejercicios/hombros/8.jpg' },
                { 'id': 9, 'type': 'Hombros', 'name': 'Lateral raise', 'img': 'assets/image_ejercicios/hombros/9.jpg' },
                { 'id': 10, 'type': 'Hombros', 'name': 'Levanta los brazos hacia aelante con el bloque inferior de pie', 'img': 'assets/image_ejercicios/hombros/10.jpg' },
                { 'id': 11, 'type': 'Hombros', 'name': 'Levanten las manos con un timbre', 'img': 'assets/image_ejercicios/hombros/11.jpg' },
                { 'id': 12, 'type': 'Hombros', 'name': 'Maquina Hombros presionar', 'img': 'assets/image_ejercicios/hombros/12.jpg' },
                { 'id': 13, 'type': 'Hombros', 'name': 'Pulsa el simulador de gimnasio de fuerza martillo', 'img': 'assets/image_ejercicios/hombros/13.jpg' },
                { 'id': 14, 'type': 'Hombros', 'name': 'Simulador de flexibilidad', 'img': 'assets/image_ejercicios/hombros/14.jpg' },
                { 'id': 15, 'type': 'Hombros', 'name': 'Standing rope face pull', 'img': 'assets/image_ejercicios/hombros/15.jpg' },
                { 'id': 16, 'type': 'Hombros', 'name': 'Upright row', 'img': 'assets/image_ejercicios/hombros/16.jpg' }
            ]
        },
        "Pectoral": {
            items: [{ 'id': 1, 'type': 'Pectoral', 'name': 'Apertua en maquina', 'img': 'assets/image_ejercicios/pectoral/1.jpg' },
            { 'id': 2, 'type': 'Pectoral', 'name': 'Cruzar los brazos para bloquear el soporte', 'img': 'assets/image_ejercicios/pectoral/2.jpg' },
            { 'id': 3, 'type': 'Pectoral', 'name': 'Declinar smith machine bench press', 'img': 'assets/image_ejercicios/pectoral/3.jpg' },
            { 'id': 4, 'type': 'Pectoral', 'name': 'Enlazar campanas desde detras de la cabeza', 'img': 'assets/image_ejercicios/pectoral/4.jpg' },
            { 'id': 5, 'type': 'Pectoral', 'name': 'Mancuernas sobrevolando tu cuerpo', 'img': 'assets/image_ejercicios/pectoral/5.jpg' },
            { 'id': 6, 'type': 'Pectoral', 'name': 'Prensa de cofres sentados', 'img': 'assets/image_ejercicios/pectoral/6.jpg' },
            { 'id': 7, 'type': 'Pectoral', 'name': 'Presion de Pectorales con mancuernas', 'img': 'assets/image_ejercicios/pectoral/7.jpg' },
            { 'id': 8, 'type': 'Pectoral', 'name': 'Press de banca con mancuernas', 'img': 'assets/image_ejercicios/pectoral/8.jpg' },
            { 'id': 9, 'type': 'Pectoral', 'name': 'Press de banca declinado', 'img': 'assets/image_ejercicios/pectoral/9.jpg' },
            { 'id': 10, 'type': 'Pectoral', 'name': 'Press de banca inclinado', 'img': 'assets/image_ejercicios/pectoral/10.jpg' },
            { 'id': 11, 'type': 'Pectoral', 'name': 'Press de banca', 'img': 'assets/image_ejercicios/pectoral/11.jpg' },
            { 'id': 12, 'type': 'Pectoral', 'name': 'Simulador de fuerza martillo', 'img': 'assets/image_ejercicios/pectoral/12.jpg' },]
        },
        "Piernas": {
            items: [
                { 'id': 1, 'type': 'Piernas', 'name': 'Jalon de pierna con cable', 'img': 'assets/image_ejercicios/piernas/1.jpg' },
                { 'id': 2, 'type': 'Piernas', 'name': 'Levantamiento de gluteo', 'img': 'assets/image_ejercicios/piernas/2.jpg' },
                { 'id': 3, 'type': 'Piernas', 'name': 'Levantamientos con una barbacoa', 'img': 'assets/image_ejercicios/piernas/3.jpg' },
                { 'id': 4, 'type': 'Piernas', 'name': 'Mutaculo de flexibilidad mintiendo', 'img': 'assets/image_ejercicios/piernas/4.jpg' },
                { 'id': 5, 'type': 'Piernas', 'name': 'Pata del simulador de flexibilidad', 'img': 'assets/image_ejercicios/piernas/5.jpg' },
                { 'id': 6, 'type': 'Piernas', 'name': 'Prensa de pierna inclinada', 'img': 'assets/image_ejercicios/piernas/6.jpg' },
                { 'id': 7, 'type': 'Piernas', 'name': 'Sancadas', 'img': 'assets/image_ejercicios/piernas/7.jpg' },
                { 'id': 8, 'type': 'Piernas', 'name': 'Simulador de pierna flexible mintiendo', 'img': 'assets/image_ejercicios/piernas/8.jpg' },
                { 'id': 9, 'type': 'Piernas', 'name': 'Squats en los Hombros', 'img': 'assets/image_ejercicios/piernas/9.jpg' },
                { 'id': 10, 'type': 'Piernas', 'name': 'Sumo de levantamiento de muerte', 'img': 'assets/image_ejercicios/piernas/10.jpg' },
            ]
        },
        "Trapesio": {
            items: [
                { 'id': 1, 'type': 'Trapesio', 'name': 'Camino a la parte trasera del delta', 'img': 'assets/image_ejercicios/trapesio/1.jpg' },
                { 'id': 2, 'type': 'Trapesio', 'name': 'Carroceria del hombro delantero con barbacoa', 'img': 'assets/image_ejercicios/trapesio/2.jpg' },
                { 'id': 3, 'type': 'Trapesio', 'name': 'Cruzar cables', 'img': 'assets/image_ejercicios/trapesio/3.jpg' },
                { 'id': 4, 'type': 'Trapesio', 'name': 'Filas verticales del cable', 'img': 'assets/image_ejercicios/trapesio/4.jpg' },
            ]
        },
        "Triceps": {
            items: [
                { 'id': 1, 'type': 'Triceps', 'name': 'Brazos de extension con barro curvo por detras de la cabeza', 'img': 'assets/image_ejercicios/triceps/1.jpg' },
                { 'id': 2, 'type': 'Triceps', 'name': 'CableV BarTricepsPushdown', 'img': 'assets/image_ejercicios/triceps/2.jpg' },
                { 'id': 3, 'type': 'Triceps', 'name': 'Dumbbell Kickback copy 1', 'img': 'assets/image_ejercicios/triceps/3.jpg' },
                { 'id': 4, 'type': 'Triceps', 'name': 'Dumbell Triceps Extension', 'img': 'assets/image_ejercicios/triceps/4.jpg' },
                { 'id': 5, 'type': 'Triceps', 'name': 'Extensión de una mano con una pesa de gimnasia detrás de la cabeza', 'img': 'assets/image_ejercicios/triceps/5.jpg' },
                { 'id': 6, 'type': 'Triceps', 'name': 'Extension de barra tricep', 'img': 'assets/image_ejercicios/triceps/6.jpg' },
                { 'id': 7, 'type': 'Triceps', 'name': 'Extension de tricep con cable agarre neutro', 'img': 'assets/image_ejercicios/triceps/7.jpg' },
                { 'id': 8, 'type': 'Triceps', 'name': 'Extension de Triceps seleccionada', 'img': 'assets/image_ejercicios/triceps/8.jpg' },
                { 'id': 9, 'type': 'Triceps', 'name': 'Presion alternativa de doblaje con la muñeca girada', 'img': 'assets/image_ejercicios/triceps/9.jpg' },
                { 'id': 10, 'type': 'Triceps', 'name': 'Tricep en banco', 'img': 'assets/image_ejercicios/triceps/10.jpg' },
                { 'id': 11, 'type': 'Triceps', 'name': 'Extensiones de tríceps sentado por encima de la cabeza con dos brazos', 'img': 'assets/image_ejercicios/triceps/11.jpg' },
            ]
        }
    };

    public dias: Dias[] = [
        { "dia": 'Lunes' },
        { "dia": 'Martes' },
        { "dia": 'Miercoles' },
        { "dia": 'Jueves' },
        { "dia": 'Viernes' },
        { "dia": 'Sabado' },
        { "dia": 'Domingo' },
    ]

    public tipoEjercicio: string[] = [
        'Abdomen',
        'Biceps',
        'Espalda',
        'Hombros',
        'Pectoral',
        'Piernas',
        'Trapesio',
        'Triceps',
    ]

    capitalizarPalabra(word: any) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }

    formatearFechaHora(cadena: any) {
        const cadenaCapitalizada = cadena.replace(/\w+/g, this.capitalizarPalabra);
        const cadenaFormateada = cadenaCapitalizada.replace(" 2º ", " 2º ");
        return cadenaFormateada.replace(/\b(am|pm)\b/gi, (match: any) => match.toUpperCase());
    }
}
