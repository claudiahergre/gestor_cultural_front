import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SalasService } from 'src/app/services/salas.service';

@Component({
  selector: 'app-editarsala',
  templateUrl: './editarsala.component.html',
  styleUrls: ['./editarsala.component.css']
})
export class EditarsalaComponent {

  formulario: FormGroup
  salaId: number
  router = inject(Router)

  salasServices = inject(SalasService)
  activatedRoute = inject(ActivatedRoute)

  constructor() {
    this.formulario = new FormGroup({
      nombre: new FormControl(),
      precio: new FormControl(),
      direccion: new FormControl(),
      aforo: new FormControl(),
      descripcion: new FormControl(),
      url_foto: new FormControl()
    })
    this.salaId = 0
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(async params => {
      console.log(params['idSala'])
      const sala = await this.salasServices.getById(params['idSala'])
      console.log(sala)
      this.salaId = params['idSala']

      const infoForm = {
        nombre: sala.nombre,
        precio: sala.precio,
        direccion: sala.direccion,
        aforo: sala.aforo,
        descripcion: sala.descripcion,
        url_foto: sala.url_foto
      }

      this.formulario.setValue(infoForm);
      console.log(infoForm)
    })
  }

  async onSubmit() {
    const response = await this.salasServices.updateById(this.salaId, this.formulario.value)
    console.log(response)

    //alert - cambios guardados

    this.router.navigate(['/salas'])
  }

}
