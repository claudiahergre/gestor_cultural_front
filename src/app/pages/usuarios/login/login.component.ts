import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formulario: FormGroup

  usuariosServices = inject(UsuariosService)

  router = inject(Router)


  constructor() {
    this.formulario = new FormGroup({
      email: new FormControl(null, [Validators.required,
      Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,10}$/)]
      ),

      password: new FormControl(null, [Validators.required]),
    })
  }

  async onSubmit() {
    const response = await this.usuariosServices.login(this.formulario.value)

    if (response.fatal) {
      return alert(response.fatal);
    }

    localStorage.setItem('token_front', response.token);
    this.router.navigate(['/salas']);
  }

  checkError(field: string, error: string) {
    return this.formulario.get(field)?.hasError(error) && this.formulario.get(field)?.touched;
  }


}
