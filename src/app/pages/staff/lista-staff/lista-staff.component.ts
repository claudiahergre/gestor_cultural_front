import { Component, inject } from '@angular/core';
import { Staff } from 'src/app/interface/staff.interface';
import { StaffService } from 'src/app/services/staff.service';

@Component({
  selector: 'app-lista-staff',
  templateUrl: './lista-staff.component.html',
  styleUrls: ['./lista-staff.component.css']
})
export class ListaStaffComponent {

  arrStaff: Staff[]

  private staffService = inject(StaffService);

  constructor() {
    this.arrStaff = []
  }

  async ngOnInit() {
    const staff = await this.staffService.getAllStaff()
    this.arrStaff = staff
    console.log(staff);
  }


}
