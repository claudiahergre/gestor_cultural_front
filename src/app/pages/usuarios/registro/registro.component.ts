import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  formulario: FormGroup

  usuarioService = inject(UsuariosService)

  router = inject(Router)

  constructor() {
    this.formulario = new FormGroup({
      nombre: new FormControl(),
      dni: new FormControl(),
      telefono: new FormControl(),
      direccion: new FormControl(),
      email: new FormControl(),
      username: new FormControl(),
      password: new FormControl(),
    })
  }


  async onSubmit() {
    const response = await this.usuarioService.registro(this.formulario.value);
    console.log(response);

    if (response.fatal) {
      return alert(response.fatal);
    }

    this.router.navigate(['/usuarios/login']);
  }


}
