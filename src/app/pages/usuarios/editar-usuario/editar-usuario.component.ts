import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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

  router = inject(Router)

  constructor() {
    this.usuarioId = 0;
    this.formulario = new FormGroup({
      nombre: new FormControl(null, [Validators.required]),

      dni: new FormControl(null, [Validators.required]),

      telefono: new FormControl(null, [Validators.required]),

      direccion: new FormControl(null, [Validators.required]),

      email: new FormControl(null, [Validators.required,
      Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,10}$/)]),

      username: new FormControl(null, [Validators.required]),
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

    this.router.navigate(['/usuarios'])

  }


  checkError(field: string, error: string) {
    return this.formulario.get(field)?.hasError(error) && this.formulario.get(field)?.touched;
  }

}
