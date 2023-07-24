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


      if (response.id) {
        this.router.navigate(['/loginStaff'])
      } else {
        //alertita de que se registre correctamente
        alert('Tienes que hacer el login correctamente')
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
