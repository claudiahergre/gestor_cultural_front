import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Staff } from '../interfaces/staff.interface';
import jwtDecode from 'jwt-decode';
import { Usuario } from '../interfaces/usuarios.interface';

@Injectable({
  providedIn: 'root',
})
export class StaffService {
  private baseUrl: string;

  private httpClient = inject(HttpClient);

  constructor() {
    this.baseUrl = 'http://localhost:3000/api/staff';
  }

  getAllStaff(): Promise<Staff[]> {
    return firstValueFrom(this.httpClient.get<Staff[]>(this.baseUrl));
  }

  getById(staffId: number): Promise<Staff | any> {
    return firstValueFrom(
      this.httpClient.get<Staff>(`${this.baseUrl}/id/${staffId}`)
    );
  }

  //Para obtener del back el perfil del staff logado
  perfil(): Promise<any> {
    return firstValueFrom(this.httpClient.get<Staff>(`${this.baseUrl}/perfil`));
  }

  registro(formValues: any): Promise<Staff> {
    return firstValueFrom(
      this.httpClient.post<Staff>(`${this.baseUrl}/registro`, formValues)
    );
  }

  login(formValues: any): Promise<any> {
    return firstValueFrom(
      this.httpClient.post<any>(`${this.baseUrl}/login`, formValues)
    );
  }

  updateById(staffId: any, formValues: any): Promise<any> {
    return firstValueFrom(
      this.httpClient.put<Staff>(
        `${this.baseUrl}/editar/${staffId}`,
        formValues
      )
    );
  }

  //Para eliminar el staff de la BBDD
  remove(staffId: any): Promise<any> {
    return firstValueFrom(
      this.httpClient.delete<Staff>(`${this.baseUrl}/${staffId}`)
    );
  }

  isLogged(rol: string = 'staff'): boolean {
    if (localStorage.getItem('token_front')) {
      const tokenStaff = localStorage.getItem('token_front');
      const obj = jwtDecode(tokenStaff!) as any;

      if ((obj.userRole && obj.userRole == rol) || rol == 'staff') {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  isLoggedUsuario() {
    if (localStorage.getItem('token_front')) {
      const tokenStaff = localStorage.getItem('token_front');
      const obj = jwtDecode(tokenStaff!) as any;

      if (obj.userRole) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  aceptarStaffById(staffId: number, staffModificado: number): Promise<Staff> {
    return firstValueFrom(
      this.httpClient.put<Staff>(`${this.baseUrl}/aceptar/staff/${staffId}`, {
        aceptada: staffModificado,
      })
    );
  }


  aceptarUsuarioById(usuarioId: number, usuarioModificado: number): Promise<Usuario> {
    return firstValueFrom(
      this.httpClient.put<Usuario>(`${this.baseUrl}/aceptar/${usuarioId}`, {
        aceptada: usuarioModificado,
      })
    );
  }

}
