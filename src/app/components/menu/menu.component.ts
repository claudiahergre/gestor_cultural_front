import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { StaffService } from 'src/app/services/staff.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  staffService = inject(StaffService)

  usuariosService = inject(UsuariosService)

  router = inject(Router)

  onLogout() {
    localStorage.removeItem('token_front')

    this.router.navigate(['/loginStaff'])

  }

  onLogoutUsuario() {
    localStorage.removeItem('token_front')

    this.router.navigate(['/usuarios', 'login'])

  }

}
