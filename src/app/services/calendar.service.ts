import { Injectable, inject } from '@angular/core';
import { Sala } from '../interfaces/sala.interface';
import { Reserva } from '../interfaces/reserva.interface';
import { firstValueFrom } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  private httpClient = inject(HttpClient);
  private baseUrl: string;

  constructor() {
    this.baseUrl = 'http://localhost:3000/api/reservas';
  }

  getAll(): Promise<Reserva[]> {
    // borrar cuando tengamos el interceptor ///
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    ///
    return firstValueFrom(this.httpClient.get<Reserva[]>(this.baseUrl));
  }

  getById(reservaId: number): Promise<Reserva> {
    // borrar cuando tengamos el interceptor ///
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    //

    console.log(reservaId);
    return firstValueFrom(
      this.httpClient.get<Reserva>(`${this.baseUrl}/${reservaId}`)
    );
  }

  create(formValue: any): Promise<Reserva | any> {
    // borrar cuando tengamos el interceptor ///
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    ///

    return firstValueFrom(
      this.httpClient.post<Reserva | any>(this.baseUrl, formValue, httpOptions)
    );
  }

  updateById(reservaId: number, formValue: any): Promise<Reserva> {
    // borrar cuando tengamos el interceptor
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    ///
    return firstValueFrom(
      this.httpClient.put<Reserva>(
        `${this.baseUrl}/editar/${reservaId}`,
        formValue
      )
    );
  }

  deleteById(reservaId: number) {
    // borrar cuando tengamos el interceptor
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    ///
    return firstValueFrom(
      this.httpClient.delete<any>(`${this.baseUrl}/${reservaId}`)
    );
  }
}
