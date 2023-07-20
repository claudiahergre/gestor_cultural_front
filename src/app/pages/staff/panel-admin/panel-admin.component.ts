import { Component, inject } from '@angular/core';
import { StaffService } from 'src/app/services/staff.service';

@Component({
  selector: 'app-panel-admin',
  templateUrl: './panel-admin.component.html',
  styleUrls: ['./panel-admin.component.css']
})
export class PanelAdminComponent {

  // Interceptors (tenerlo creado)
  // Dentro del servicio de staff crear el metodo que ataque a la url del perfil que hemos hecho en el back (/perfil)

  staffService = inject(StaffService)



}
