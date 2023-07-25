import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Usuario } from '../interfaces/usuarios.interface';
import { firstValueFrom } from 'rxjs';
import jwtDecode from 'jwt-decode';

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
    return firstValueFrom(
      this.httpClient.put<Usuario>(`${this.baseUrl}/editar/${usuarioId}`, FormValues)
    )
  }

  remove(usuarioId: number): Promise<Usuario> {
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

  isLoggedUsuario(): boolean {
    if (localStorage.getItem('token_front')) {
      const tokenStaff = localStorage.getItem('token_front')
      const obj = jwtDecode(tokenStaff!) as any
      console.log(obj)
      if (obj.userRole) {
        return false
      } else {
        return true
      }
    } else {
      return false
    }
  }


}
