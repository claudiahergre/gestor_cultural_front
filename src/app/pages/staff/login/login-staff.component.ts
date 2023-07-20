import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StaffService } from 'src/app/services/staff.service';

@Component({
  selector: 'app-login-staff',
  templateUrl: './login-staff.component.html',
  styleUrls: ['./login-staff.component.css']
})
export class LoginStaffComponent {

  formulario: FormGroup;

  staffService = inject(StaffService)

  constructor(private router: Router) {
    this.formulario = new FormGroup({
      email: new FormControl,
      password: new FormControl()
    })
  }

  async onSubmit() {

    const response = await this.staffService.login(this.formulario.value) //me falta hacer el login en el servicio
    console.log(response)

    if (response.fatal) {
      return alert(response.fatal);
    } else if (response.rol === 'administrador') {
      //Hacer routernavigate al panel de administrador
      localStorage.setItem('token_front', response.token);
      this.router.navigate(['/panelAdmin'])

    } else if (response.rol === 'trabajador') {
      //Hacer routernavigate al panel de trabajadores 
      this.router.navigate(['/panelTrabajador'])
      localStorage.setItem('token_front', response.token);
    }






  }


}