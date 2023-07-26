import { Component, inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2'

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
      dni: new FormControl(null, [Validators.required, this.dniValidator]),
      telefono: new FormControl(null, [Validators.required]),
      direccion: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required,
      Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,10}$/)]),
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    })
  }

  async onSubmit() {
    if (this.formulario.valid) {
      const response = await this.usuarioService.registro(this.formulario.value);
      console.log(response);

      if (response.id) {

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

        this.router.navigate(['/usuarios/login']);
      } else {
        Swal.fire({
          icon: 'warning',
          title: 'Registro fallido',
          showConfirmButton: false,
          timer: 2500,
          width: 500,
          padding: '3em',
          color: '#333333',
          background: '#0077B6'
        })
      }
    }
  }

  dniValidator(control: AbstractControl) {
    const value = control.value

    let expresion_regular_dni = /^\d{8}[a-zA-Z]$/;
    let expresion_regular_nie = /^[XYZxyz]\d{7}[A-HJ-NP-TV-Za-hj-np-tv-z]$/
    let listaLetra = 'TRWAGMYFPDXBNJZSQVHLCKET';

    if (expresion_regular_dni.test(value)) {
      let numero = value.substring(0, value.length - 1);
      let letr = value.substring(value.length - 1, value.length);
      numero = numero % 23;

      let letraSeleccinada = listaLetra.substring(numero, numero + 1);
      if (letraSeleccinada != letr.toUpperCase()) {
        return { dnivalidator: 'La letra no coincide' }
      } else {
        return null;
      }
    } else {
      if (expresion_regular_nie.test(value)) {
        return null
      } else {
        return { dnivalidator: 'formato invalido' }
      }
    }
  }

  checkError(field: string, error: string) {
    return this.formulario.get(field)?.hasError(error) && this.formulario.get(field)?.touched;
  }

}
