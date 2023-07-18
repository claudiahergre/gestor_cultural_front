import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SalasService } from 'src/app/services/salas.service';

@Component({
  selector: 'app-reservarsala',
  templateUrl: './reservarsala.component.html',
  styleUrls: ['./reservarsala.component.css']
})
export class ReservarsalaComponent {

  formulario: FormGroup
  salasServices = inject(SalasService)
  activatedRoute = inject(ActivatedRoute)
  router = inject(Router)


  constructor() {
    this.formulario = new FormGroup({
      fecha_reserva: new FormControl(),
      hora_reserva: new FormControl(),

      fecha_fin: new FormControl(),
      hora_fin: new FormControl(),

      datetime_inicio: new FormControl(),
      datetime_fin: new FormControl()
    })
  }

  onSubmit() {
    // console.log(this.formulario.value)
    // 1º concatenar fecha y hora
    this.formulario.value.datetime_inicio = this.formulario.value.fecha_reserva + ' ' + this.formulario.value.hora_reserva;
    this.formulario.value.datetime_fin = this.formulario.value.fecha_fin + ' ' + this.formulario.value.hora_fin;
    // console.log(this.formulario.value.datetime_inicio, this.formulario.value.datetime_fin)

    // alert con el precio total multiplicando el precio de la sala por las horas totales
    // si confirma, next con la reserva
    this.salasServices.reservarSala()
    // alert tu sala ha sido reservada

    //redirección a la lista de salas

  }

}
