import { Injectable, inject } from '@angular/core';
import { Sala } from '../interfaces/sala.interface'
import { firstValueFrom } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class SalasService {

    private httpClient = inject(HttpClient)
    private baseUrl: string

    constructor() {
        this.baseUrl = 'http://localhost:3000/api/salas'
    }

    getAll(): Promise<Sala[]> {
        return firstValueFrom(
            this.httpClient.get<Sala[]>(this.baseUrl)
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
        return firstValueFrom(
            this.httpClient.put<Sala>(`${this.baseUrl}/${idSala}`, formValue)
        )
    }

    deleteById(idSala: number) {
        return firstValueFrom(
            this.httpClient.delete<any>(`${this.baseUrl}/${idSala}`)
        )
    }

}




