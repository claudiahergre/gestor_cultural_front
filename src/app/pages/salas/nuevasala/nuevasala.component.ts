import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SalasService } from 'src/app/services/salas.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-nuevasala',
  templateUrl: './nuevasala.component.html',
  styleUrls: ['./nuevasala.component.css']
})
export class NuevasalaComponent {

  formulario: FormGroup
  salasServices = inject(SalasService)
  router = inject(Router)

  constructor() {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      precio: new FormControl('', [Validators.required]),
      direccion: new FormControl('', [Validators.required]),
      aforo: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required]),
      url_foto: new FormControl('', [Validators.required]),
      telefono_contacto: new FormControl('', [Validators.required]),
      email_contacto: new FormControl('', [Validators.required])
    });
  }

  async onSubmit() {
    // console.log(this.formulario.value)
    if (this.formulario.valid) {
      const response = await this.salasServices.create(this.formulario.value)
      console.log(response)

      if (response.error) {
        console.log(response.error) //aqui estoy comprobando qué errores me devuelve la aplicacion.

      } else {

        Swal.fire({
          icon: 'success',
          title: 'Sala creada',
          showConfirmButton: false,
          timer: 2500,
          width: 500,
          padding: '3em',
          color: '#333333',
          background: '#0077B6'
        })

        this.router.navigate(['/salas/salasadmin']) //para que me redirija a esa pagina cuando agregue el nuevo cliente
      }
    }

  }

  checkError(field: string, error: string): boolean | undefined {
    return this.formulario.get(field)?.hasError(error) && this.formulario.get(field)?.touched
  }
}
