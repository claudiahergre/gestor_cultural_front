import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
      nombre: new FormControl(null, [Validators.required]),

      dni: new FormControl(null, [Validators.required]),

      telefono: new FormControl(null, [Validators.required]),

      direccion: new FormControl(null, [Validators.required]),

      email: new FormControl(null, [Validators.required,
      Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,10}$/)]),

      username: new FormControl(null, [Validators.required]),

      password: new FormControl(null, [Validators.required]),
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


  checkError(field: string, error: string) {
    return this.formulario.get(field)?.hasError(error) && this.formulario.get(field)?.touched;
  }


}
