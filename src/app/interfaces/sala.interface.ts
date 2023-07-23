import { CalendarEvent } from "./calendar_event.interface";

export interface Sala {
    id: number,
    precio: string,
    aforo: number,
    nombre: string,
    direccion: string,
    descripcion: string,
    url_foto: string,
    reservas: CalendarEvent[]
}
