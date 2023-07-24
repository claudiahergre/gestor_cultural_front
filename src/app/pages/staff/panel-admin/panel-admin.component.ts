import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Staff } from 'src/app/interfaces/staff.interface';
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
  activatedRoute = inject(ActivatedRoute)

  staffId: number;
  staff: Staff;

  constructor() {
    this.staffId = 0;
    this.staff = {
      id: 0,
      nombre: '',
      usuario: '',
      email: '',
      password: '',
      rol: ''
    }
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(async params => {
      this.staffId = params['staffId']
      this.staff = await this.staffService.getById(params['staffId'])
      //esto no funciona porq lo que me devuelve NO ES EL OBJETO CON LOS DATOS DEL STAFF LOGADO
      console.log(this.staff)
      console.log(this.staffId)
    })
  }


}
