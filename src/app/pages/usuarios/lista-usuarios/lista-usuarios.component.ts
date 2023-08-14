import { Component, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Usuario } from 'src/app/interfaces/usuarios.interface';
import { StaffService } from 'src/app/services/staff.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css'],
})
export class ListaUsuariosComponent {
  usuarios: Usuario[];

  private usuariosService = inject(UsuariosService);
  private staffService = inject(StaffService);

  constructor() {
    this.usuarios = [];
  }

  async ngOnInit() {
    this.usuarios = await this.usuariosService.getAll();
  }

  async onDelete(usuarioId: number) {
    const response = await this.usuariosService.remove(usuarioId);
    this.usuarios = await this.usuariosService.getAll();
  }

  async aceptarUsuario(usuario: any) {
    try {
      usuario.aceptada = 1;
      const response = await this.staffService.aceptarUsuarioById(
        usuario.id,
        usuario.aceptada
      );
      console.log(response);
      if (response) {
        Swal.fire({
          icon: 'success',
          title: 'Usuario aceptado',
          showConfirmButton: false,
          timer: 2500,
          width: 500,
          padding: '3em',
          color: '#333333',
          background: '#0077B6',
        });
        // Recargar la lista de usuarios actualizada
          this.usuarios = await this.usuariosService.getAll();
      }
    } catch (error) {
      console.log(error);
    }
  }
}
