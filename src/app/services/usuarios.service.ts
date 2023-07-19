import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Usuario } from '../interfaces/usuarios.interface';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private httpClient = inject(HttpClient);
  private baseUrl: string;

  constructor() {
    this.baseUrl = 'http://localhost:3000/api/usuarios';
  }

  getAll(): Promise<Usuario[]> {
    return firstValueFrom(
      this.httpClient.get<Usuario[]>(this.baseUrl)
    )
  }

  getById(usuarioId: number): Promise<Usuario> {
    return firstValueFrom(
      this.httpClient.get<Usuario>(`${this.baseUrl}/${usuarioId}`)
    )
  }

  update(usuarioId: number, FormValues: any): Promise<Usuario> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
    return firstValueFrom(
      this.httpClient.put<Usuario>(`${this.baseUrl}/editar/${usuarioId}`, FormValues)
    )
  }

  delete(usuarioId: number): Promise<Usuario> {
    return firstValueFrom(
      this.httpClient.delete<Usuario>(`${this.baseUrl}/${usuarioId}`)
    )
  }

  registro(formValues: any): Promise<Usuario | any> {
    return firstValueFrom(
      this.httpClient.post<Usuario | any>(`${this.baseUrl}/registro`, formValues)
    );
  }

  login(formValues: any): Promise<any> {
    return firstValueFrom(
      this.httpClient.post<any>(`${this.baseUrl}/login`, formValues)
    );
  }

  isLogged(): boolean {
    return localStorage.getItem('tokencito') ? true : false;
  }

}
