import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reservarsala',
  templateUrl: './reservarsala.component.html',
  styleUrls: ['./reservarsala.component.css']
})
export class ReservarsalaComponent {

  formulario: FormGroup


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
  }

}
