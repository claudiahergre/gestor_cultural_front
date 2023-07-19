import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
      email: new FormControl(),
      password: new FormControl(),
    })
  }

  async onSubmit() {
    const response = await this.usuariosServices.login(this.formulario.value)

    if (response.fatal) {
      return alert(response.fatal);
    }

    localStorage.setItem('tokencito_cultural', response.token);
    this.router.navigate(['/salas']);
  }
}
