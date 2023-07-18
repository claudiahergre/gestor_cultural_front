import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Staff } from '../interface/staff.interface';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  private baseUrl: string;

  private httpClient = inject(HttpClient);

  constructor() {
    this.baseUrl = 'http://localhost:3000/api/staff';
  }

  getAllStaff(): Promise<Staff[]> {
    return firstValueFrom(
      this.httpClient.get<Staff[]>(this.baseUrl)
    );
  }

  registro(formValues: any): Promise<Staff> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
    return firstValueFrom(
      this.httpClient.post<Staff>(this.baseUrl, formValues, httpOptions)
    );
  }

  login(formValues: any): Promise<any> {
    return firstValueFrom(
      this.httpClient.post<any>(`${this.baseUrl}/login`, formValues) //confirmar con javi cuando haga la ruta en el back
    );
  }




}
