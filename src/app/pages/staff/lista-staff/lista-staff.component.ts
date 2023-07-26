import { Component, inject } from '@angular/core';
import { Staff } from 'src/app/interfaces/staff.interface';
import { StaffService } from 'src/app/services/staff.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-staff',
  templateUrl: './lista-staff.component.html',
  styleUrls: ['./lista-staff.component.css'],
})
export class ListaStaffComponent {
  arrStaff: Staff[];

  constructor(private staffService: StaffService) {
    this.arrStaff = [];
  }

  async ngOnInit() {
    const staff = await this.staffService.getAllStaff();
    this.arrStaff = staff;
  }

  async eliminar(staffId: number) {
    const response = await this.staffService.remove(staffId);
    this.arrStaff = await this.staffService.getAllStaff();
  }

  async aceptarStaff(staff: any) {
    try {
      staff.aceptada = 1;
      const response = await this.staffService.aceptarStaffById(
        staff.id,
        staff.aceptada
      );
      console.log(response);
      if (response) {
        Swal.fire({
          icon: 'success',
          title: 'Staff aceptado',
          showConfirmButton: false,
          timer: 2500,
          width: 500,
          padding: '3em',
          color: '#333333',
          background: '#0077B6',
        });

        // Recargar la lista de staff actualizada
        this.arrStaff = await this.staffService.getAllStaff();
      }
    } catch (error) {
      console.log(error);
    }
  }


}
