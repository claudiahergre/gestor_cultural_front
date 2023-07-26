import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SalasService } from 'src/app/services/salas.service';
import { StaffService } from 'src/app/services/staff.service';
import Swal from 'sweetalert2'

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
  staffServices = inject(StaffService)
  activatedRoute = inject(ActivatedRoute)

  constructor() {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      precio: new FormControl('', [Validators.required]),
      direccion: new FormControl('', [Validators.required]),
      aforo: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required]),
      url_foto: new FormControl('', [Validators.required])
    })
    this.salaId = 0
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(async params => {
      const sala = await this.salasServices.getById(params['salaId'])
      this.salaId = params['salaId']

      const infoForm = {
        nombre: sala.nombre,
        precio: sala.precio,
        direccion: sala.direccion,
        aforo: sala.aforo,
        descripcion: sala.descripcion,
        url_foto: sala.url_foto
      }

      this.formulario.setValue(infoForm);
      })
  }

  async onSubmit() {

    const response = await this.salasServices.updateById(this.salaId, this.formulario.value)
    console.log(response)

    if (response.id) {

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

    } else {
      Swal.fire({
        icon: 'success',
        title: 'Cambios guardados',
        showConfirmButton: false,
        timer: 2500,
        width: 500,
        padding: '3em',
        color: '#333333',
        background: '#0077B6'
      })
      this.router.navigate(['/salas/salasadmin'])
    }
  }

  checkError(field: string, error: string): boolean | undefined {
    return this.formulario.get(field)?.hasError(error) && this.formulario.get(field)?.touched
  }

}
