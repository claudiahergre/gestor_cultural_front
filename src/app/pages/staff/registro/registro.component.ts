import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StaffService } from 'src/app/services/staff.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  formulario: FormGroup;

  staffService = inject(StaffService)

  constructor(private router: Router) {
    this.formulario = new FormGroup({
      nombre: new FormControl(),
      usuario: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      rol: new FormControl()
    })
  }

  async onSubmit() {
    const response = await this.staffService.registro(this.formulario.value);
    console.log(response);

    if (response.id) {
      this.router.navigate(['/loginStaff'])
    } else {
      //alertita de que se registre correctamente
      alert('Tienes que hacer el login correctamente')
    }

  }

}
