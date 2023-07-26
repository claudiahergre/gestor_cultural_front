import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StaffService } from 'src/app/services/staff.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login-staff',
  templateUrl: './login-staff.component.html',
  styleUrls: ['./login-staff.component.css'],
})
export class LoginStaffComponent {
  formulario: FormGroup;

  staffService = inject(StaffService);

  constructor(private router: Router) {
    this.formulario = new FormGroup({
      email: new FormControl(null, [Validators.required,
      Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,10}$/),
      ]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  async onSubmit() {
    const response = await this.staffService.login(this.formulario.value);
    console.log(response);


    if (response.fatal) {
      Swal.fire({
        icon: 'warning',
        title: 'No se ha podido iniciar sesion',
        showConfirmButton: false,
        timer: 2500,
        width: 500,
        padding: '3em',
        color: '#333333',
        background: '#0077B6'
      })
    } else if (response.rol === 'administrador') {
      localStorage.setItem('token_front', response.token);
      this.router.navigate(['/panelAdmin']);
    } else if (response.rol === 'trabajador') {

      localStorage.setItem('token_front', response.token);
      this.router.navigate(['/panelTrabajador']);
    }
  }


  checkError(field: string, error: string) {
    return (
      this.formulario.get(field)?.hasError(error) &&
      this.formulario.get(field)?.touched
    );
  }
}
