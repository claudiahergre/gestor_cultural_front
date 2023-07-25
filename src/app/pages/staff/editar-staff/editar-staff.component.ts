import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StaffService } from 'src/app/services/staff.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-editar-staff',
  templateUrl: './editar-staff.component.html',
  styleUrls: ['./editar-staff.component.css'],
})
export class EditarStaffComponent {
  formulario: FormGroup;
  staffId: string;

  staffService = inject(StaffService);
  activatedRoute = inject(ActivatedRoute);

  router = inject(Router)

  constructor() {
    this.staffId = '';

    this.formulario = new FormGroup({
      nombre: new FormControl(null, [Validators.required]),
      usuario: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,10}$/),
      ]),
      rol: new FormControl(null, [Validators.required]),
    });
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(async (params) => {
      const staff = await this.staffService.getById(params['staffId']);

      this.staffId = params['staffId'];

      const infoForm = {
        nombre: staff.nombre,
        usuario: staff.usuario,
        email: staff.email,
        rol: staff.rol,
      };
      console.log(infoForm);
      this.formulario.setValue(infoForm);
    });
  }

  async onSubmit() {
    const response = await this.staffService.updateById(
      this.staffId,
      this.formulario.value
    )

    if (response.fatal) {

      Swal.fire({
        icon: 'warning',
        title: 'Registro fallido',
        showConfirmButton: false,
        timer: 2500,
        width: 500,
        padding: '3em',
        color: '#333333',
        background: '#0077B6'
      })

    } else {
      Swal.fire({
        icon: 'success',
        title: 'Cambios guardados',
        showConfirmButton: false,
        timer: 2500,
        width: 500,
        padding: '3em',
        color: '#333333',
        background: '#0077B6'
      })
      this.router.navigate(['/usuarios'])
    }


  }

  checkError(field: string, error: string) {
    return (
      this.formulario.get(field)?.hasError(error) &&
      this.formulario.get(field)?.touched
    );
  }
}
