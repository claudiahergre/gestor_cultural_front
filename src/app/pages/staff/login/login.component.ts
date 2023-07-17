import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StaffService } from 'src/app/services/staff.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formulario: FormGroup;

  staffService = inject(StaffService)

  constructor() {
    this.formulario = new FormGroup({
      email: new FormControl,
      password: new FormControl()
    })
  }

  async onSubmit() {

  }


}