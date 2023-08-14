import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Contacto } from '../interfaces/contacto.interface';

@Injectable({
  providedIn: 'root',
})
export class ContactoService {
  private baseUrl: string;

  private httpClient = inject(HttpClient);

  constructor() {
    this.baseUrl = 'http://localhost:3000/api/contacto';
  }

  contactoFormulario(formValues: any): Promise<Contacto> {
    return firstValueFrom(
      this.httpClient.post<Contacto>(
        `${this.baseUrl}/`,
        formValues,));
  }

  getFormById(formId: number): Promise<Contacto | any> {
    return firstValueFrom(
      this.httpClient.get<Contacto>(`${this.baseUrl}/id/${formId}`)
    );
  }
}
