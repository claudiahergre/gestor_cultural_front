import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
      nombre: new FormControl(),
      precio: new FormControl(),
      direccion: new FormControl(),
      aforo: new FormControl(),
      descripcion: new FormControl(),
      url_foto: new FormControl()
    })
  }

  async onSubmit() {
    // console.log(this.formulario.value)
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
