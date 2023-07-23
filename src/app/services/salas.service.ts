import { Injectable, inject } from '@angular/core';
import { Sala } from '../interfaces/sala.interface'
import { Reserva } from '../interfaces/reserva.interface'
import { Observable, firstValueFrom } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
    providedIn: 'root'
})
export class SalasService {

    private httpClient = inject(HttpClient)
    private baseUrl: string
    private usuariosHasSalasUrl: string
    private mapsUrl = 'https://maps.googleapis.com/maps/api/geocode/json'



    constructor() {
        this.baseUrl = 'http://localhost:3000/api/salas'
        this.usuariosHasSalasUrl = 'http://localhost:3000/api/usuarios_has_salas'

    }

    getAll(): Promise<Sala[]> {
        ///// borrar cuando tengamos el interceptor ///
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        }
        ///////////
        return firstValueFrom(
            this.httpClient.get<Sala[]>(this.baseUrl)
        )
    }

    getById(idSala: number): Promise<Sala> {
        ///// borrar cuando tengamos el interceptor ///
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        }
        //////////

        console.log(idSala)
        return firstValueFrom(
            this.httpClient.get<Sala>(`${this.baseUrl}/${idSala}`)
        )
    }

    create(formValue: any): Promise<Sala | any> {
        ///// borrar cuando tengamos el interceptor ///
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        }
        ///////////

        return firstValueFrom(
            this.httpClient.post<Sala | any>(this.baseUrl, formValue, httpOptions)
        )
    }

    updateById(idSala: number, formValue: any): Promise<Sala> {
        ///// borrar cuando tengamos el interceptor ///
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        }
        ///////////
        return firstValueFrom(
            this.httpClient.put<Sala>(`${this.baseUrl}/editar/${idSala}`, formValue)
        )
    }

    deleteById(salaId: number) {
        ///// borrar cuando tengamos el interceptor ///
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        }
        ///////////
        return firstValueFrom(
            this.httpClient.delete<any>(`${this.baseUrl}/${salaId}`)
        )
    }

    reservarSala(formValue: any): Promise<Reserva | any> {

        ///// borrar cuando tengamos el interceptor ///
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        }
        ///////////
        return firstValueFrom(
            this.httpClient.post<Reserva | any>(this.usuariosHasSalasUrl, formValue)
        )
    }




}



