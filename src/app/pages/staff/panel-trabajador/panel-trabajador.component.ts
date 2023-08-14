import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Staff } from 'src/app/interfaces/staff.interface';
import { StaffService } from 'src/app/services/staff.service';

@Component({
  selector: 'app-panel-trabajador',
  templateUrl: './panel-trabajador.component.html',
  styleUrls: ['./panel-trabajador.component.css']
})
export class PanelTrabajadorComponent {

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
      rol: '',
      aceptada: 0
    }
  }

  async ngOnInit() {
    this.staff = await this.staffService.perfil()
  }

}
