import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StaffService } from 'src/app/services/staff.service';

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
      nombre: new FormControl([null, Validators.required]),
      usuario: new FormControl([null, Validators.required]),
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,10}$/),
      ]),
      password: new FormControl([null, Validators.required]),
      rol: new FormControl([null, Validators.required]),
    });
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

  checkError(field: string, error: string) {
    return (
      this.formulario.get(field)?.hasError(error) &&
      this.formulario.get(field)?.touched
    );
  }
  
}
