import { Injectable, inject } from '@angular/core';
import { Sala } from '../interfaces/sala.interface'
import { Reserva } from '../interfaces/reserva.interface'
import { Observable, firstValueFrom } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'



@Injectable({
    providedIn: 'root'
})
export class SalasService {

    private httpClient = inject(HttpClient)
    private baseUrl: string
    private usuariosHasSalasUrl: string



    constructor() {
        this.baseUrl = 'http://localhost:3000/api/salas'
        this.usuariosHasSalasUrl = 'http://localhost:3000/api/reservas'

    }

    getAll(): Promise<Sala[]> {
        return firstValueFrom(
            this.httpClient.get<Sala[]>(this.baseUrl)
        )
    }

    getById(idSala: number): Promise<Sala> {
        return firstValueFrom(
            this.httpClient.get<Sala>(`${this.baseUrl}/${idSala}`)
        )
    }

    create(formValue: any): Promise<Sala | any> {
        return firstValueFrom(
            this.httpClient.post<Sala | any>(this.baseUrl, formValue)
        )
    }

    updateById(idSala: number, formValue: any): Promise<Sala> {
        return firstValueFrom(
            this.httpClient.put<Sala>(`${this.baseUrl}/editar/${idSala}`, formValue)
        )
    }

    deleteById(salaId: number) {
        return firstValueFrom(
            this.httpClient.delete<any>(`${this.baseUrl}/${salaId}`)
        )
    }

    reservarSala(formValue: any): Promise<Reserva | any> {
        return firstValueFrom(
            this.httpClient.post<Reserva | any>(this.usuariosHasSalasUrl, formValue)
        )
    }




}
