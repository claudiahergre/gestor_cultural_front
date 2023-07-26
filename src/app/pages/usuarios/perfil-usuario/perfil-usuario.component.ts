import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuarios.interface';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent {

  usuariosService = inject(UsuariosService)
  activatedRoute = inject(ActivatedRoute)

  usuarioId: number
  usuario: Usuario

  constructor() {
    this.usuarioId = 0;
    this.usuario = {
      id: 0,
      username: '',
      email: '',
      telefono: '',
      dni: '',
      password: '',
      nombre: '',
      direccion: ''
    }
  }

  async ngOnInit() {
    this.usuario = await this.usuariosService.perfil()
  }

}


