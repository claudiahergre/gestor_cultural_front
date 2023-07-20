import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Staff } from '../interfaces/staff.interface';

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

  getById(staffId: number): Promise<Staff | any> {
    return firstValueFrom(
      this.httpClient.get<Staff>(`${this.baseUrl}/id/${staffId}`)
    )
  }

  //Para obtener del back el perfil del staff logado
  perfil(): Promise<any> {
    return firstValueFrom(
      this.httpClient.get<Staff>(`${this.baseUrl}/perfil`)
    )
  }

  registro(formValues: any): Promise<Staff> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
    return firstValueFrom(
      this.httpClient.post<Staff>(`${this.baseUrl}/registro`, formValues, httpOptions)
    );
  }

  login(formValues: any): Promise<any> {
    return firstValueFrom(
      this.httpClient.post<any>(`${this.baseUrl}/login`, formValues) //confirmar con javi cuando haga la ruta en el back
    );
  }



  updateById(staffId: any, formValues: any): Promise<any> {
    return firstValueFrom(
      this.httpClient.put<Staff>(`${this.baseUrl}/${staffId}`, formValues)
    )
  }

  //NO SE HACER PARA BORRAR
  remove(staffId: any): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
    return firstValueFrom(
      this.httpClient.delete<Staff>(`${this.baseUrl}/${staffId}`)
    )
  }




}
