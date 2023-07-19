import { Component, EventEmitter, Output, inject } from '@angular/core';
import { Staff } from 'src/app/interface/staff.interface';
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
    console.log(staff)
    this.arrStaff = staff
    console.log(staff);
  }

  /* eliminar(id: number) {
    this.staffService.eliminarStaff(staffId)

  } */



}
