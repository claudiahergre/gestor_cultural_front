import { HttpClient } from '@angular/common/http';
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



}
