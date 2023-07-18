import { Component, inject } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuarios.interface';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent {

  usuarios: Usuario[]

  private usuariosService = inject(UsuariosService)

  constructor() {
    this.usuarios = []
  }

  async ngOnInit() {
    this.usuarios = await this.usuariosService.getAll()
  }
}


