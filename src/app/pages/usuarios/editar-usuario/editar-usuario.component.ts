import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent {

  formulario: FormGroup
  usuarioId: number

  usuarioService = inject(UsuariosService)

  activatedRoute = inject(ActivatedRoute)

  constructor() {
    this.usuarioId = 0;
    this.formulario = new FormGroup({
      nombre: new FormControl(),
      dni: new FormControl(),
      telefono: new FormControl(),
      direccion: new FormControl(),
      email: new FormControl(),
      username: new FormControl(),

    })
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(async params => {
      const usuario = await this.usuarioService.getById(params['usuarioId'])

      this.usuarioId = params['usuarioId']

      const obj = { nombre: usuario.nombre, dni: usuario.dni, telefono: usuario.telefono, direccion: usuario.direccion, email: usuario.email, username: usuario.username };

      this.formulario.setValue(obj);
    })
  }


  async onSubmit() {
    const response = await this.usuarioService.update(this.usuarioId, this.formulario.value)
    console.log(response)
  }



}
