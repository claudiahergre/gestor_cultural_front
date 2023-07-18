import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SalasService } from 'src/app/services/salas.service';
import { Router } from '@angular/router';

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
      this.router.navigate(['/salas']) //para que me redirija a esa pagina cuando agregue el nuevo cliente
    }

  }


}
