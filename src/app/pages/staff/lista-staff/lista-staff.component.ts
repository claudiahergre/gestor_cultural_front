import { Component, inject } from '@angular/core';
import { Staff } from 'src/app/interfaces/staff.interface';
import { StaffService } from 'src/app/services/staff.service';

@Component({
  selector: 'app-lista-staff',
  templateUrl: './lista-staff.component.html',
  styleUrls: ['./lista-staff.component.css']
})
export class ListaStaffComponent {

  arrStaff: Staff[]

  constructor(private staffService: StaffService) {
    this.arrStaff = []
  }

  async ngOnInit() {
    const staff = await this.staffService.getAllStaff()
    this.arrStaff = staff
  }

  async eliminar(staffId: number) {
    const response = await this.staffService.remove(staffId)
    this.arrStaff = await this.staffService.getAllStaff()
  }

}
