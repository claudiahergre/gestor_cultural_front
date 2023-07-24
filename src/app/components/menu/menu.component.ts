import { Component, inject } from '@angular/core';
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



}
