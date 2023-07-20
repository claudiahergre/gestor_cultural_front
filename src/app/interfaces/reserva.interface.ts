export interface Reserva {
    id_reserva: number,
    usuarios_id: number,
    salas_id: number,
    fecha_reserva: string,
    hora_reserva: string,
    fecha_fin_reserva: string,
    hora_fin_reserva: string,
}