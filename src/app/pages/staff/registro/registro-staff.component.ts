import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StaffService } from 'src/app/services/staff.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-registro-staff',
  templateUrl: './registro-staff.component.html',
  styleUrls: ['./registro-staff.component.css']
})
export class RegistroStaffComponent {

  formulario: FormGroup;

  staffService = inject(StaffService)

  constructor(private router: Router) {
    this.formulario = new FormGroup({
      nombre: new FormControl(null, [Validators.required]),
      usuario: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,10}$/),
      ]),
      password: new FormControl(null, [Validators.required]),
      rol: new FormControl(null, [Validators.required]),
    });
  }

  async onSubmit() {
    if (this.formulario.valid) {
      const response = await this.staffService.registro(this.formulario.value);
      console.log(response);

      if (response.id) {

        Swal.fire({
          icon: 'success',
          title: 'Registro correcto',
          showConfirmButton: false,
          timer: 2500,
          width: 500,
          padding: '3em',
          color: '#333333',
          background: '#0077B6'
        })

        this.router.navigate(['/usuarios/login']);
      } else {
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
      }
    }
  }

  checkError(field: string, error: string) {
    return (
      this.formulario.get(field)?.hasError(error) &&
      this.formulario.get(field)?.touched
    );
  }

}
