import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Reserva } from '../interfaces/reserva.interface'
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  private httpClient = inject(HttpClient)
  private reservas: string

  constructor() {
    this.reservas = 'http://localhost:3000/api/reservas'
  }

  getAll(): Promise<Reserva[]> {
    ///// borrar cuando tengamos el interceptor ///
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    ///////////
    return firstValueFrom(
      this.httpClient.get<Reserva[]>(this.reservas)
    )
  }

  getById(idReserva: number): Promise<Reserva> {
    ///// borrar cuando tengamos el interceptor ///
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    //////////

    console.log(idReserva)
    return firstValueFrom(
      this.httpClient.get<Reserva>(`${this.reservas}/${idReserva}`)
    )
  }



  updateById(id_reserva: number, reservaModificada: Reserva): Promise<Reserva> {
    ///// borrar cuando tengamos el interceptor ///
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    ///////////
    return firstValueFrom(
      this.httpClient.put<Reserva>(`${this.reservas}/editar/${id_reserva}`, reservaModificada)
    )
  }


  aceptarById(id_reserva: number, reservaModificada: number): Promise<Reserva> {
    ///// borrar cuando tengamos el interceptor ///
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    ///////////
    return firstValueFrom(
      this.httpClient.put<Reserva>(`${this.reservas}/aceptar/${id_reserva}`, { aceptada: reservaModificada })
    )
  }
  // metodo:put
  // url: /api/reservas/aceptar/2
  // body: {aceptada: 1}


  deleteById(idReserva: number) {
    ///// borrar cuando tengamos el interceptor ///
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    ///////////
    return firstValueFrom(
      this.httpClient.delete<any>(`${this.reservas}/${idReserva}`)
    )
  }

}
