import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent {

  formulario: FormGroup
  usuarioId: number



  constructor() {
    this.usuarioId = 0;
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
  onSubmit() {

  }
}
