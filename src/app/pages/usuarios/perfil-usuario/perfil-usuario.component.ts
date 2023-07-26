import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private router: Router) {
    this.usuarioId = 0;
    this.usuario = {
      id: 0,
      username: '',
      email: '',
      telefono: '',
      dni: '',
      password: '',
      nombre: '',
      direccion: '',
      aceptada: 0
    }
  }

  async ngOnInit() {
    this.usuario = await this.usuariosService.perfil()
  }

  async eliminar(usuarioId: number) {
    const response = await this.usuariosService.remove(usuarioId)
    localStorage.removeItem('token_front')
    this.router.navigate(['/usuarios/registro'])
  }

}


