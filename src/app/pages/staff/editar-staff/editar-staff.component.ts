import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StaffService } from 'src/app/services/staff.service';

@Component({
  selector: 'app-editar-staff',
  templateUrl: './editar-staff.component.html',
  styleUrls: ['./editar-staff.component.css']
})
export class EditarStaffComponent {

  formulario: FormGroup;
  staffId: string;

  staffService = inject(StaffService)
  activatedRoute = inject(ActivatedRoute)

  constructor() {
    this.staffId = '';

    this.formulario = new FormGroup({
      nombre: new FormControl(),
      usuario: new FormControl(),
      email: new FormControl(),
      rol: new FormControl()
    })
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(async params => {

      const staff = await this.staffService.getById(params['staffId']);


      this.staffId = params['staffId']

      const infoForm = { nombre: staff.nombre, usuario: staff.usuario, email: staff.email, rol: staff.rol }
      console.log(infoForm)
      this.formulario.setValue(infoForm);

    })
  }

  async onSubmit() {
    const response = await this.staffService.updateById(this.staffId, this.formulario.value)


  }


}
