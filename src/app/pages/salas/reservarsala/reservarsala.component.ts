import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CalendarService } from 'src/app/services/calendar.service';
import { SalasService } from 'src/app/services/salas.service';

@Component({
  selector: 'app-reservarsala',
  templateUrl: './reservarsala.component.html',
  styleUrls: ['./reservarsala.component.css']
})
export class ReservarsalaComponent {

  formulario: FormGroup
  salasServices = inject(SalasService)
  calendarService = inject(CalendarService)
  activatedRoute = inject(ActivatedRoute)
  router = inject(Router)


  constructor() {
    this.formulario = new FormGroup({
      fecha_reserva: new FormControl(),
      hora_reserva: new FormControl(),

      fecha_fin_reserva: new FormControl(),
      hora_fin_reserva: new FormControl(),
    })
  }

  // ngOnInit() {
  //   this.activatedRoute.snapshot.params;
  //    try {
  //     const activatedRoute = this.salasServices.getById()
  //     console.log(activatedRoute)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }


  async onSubmit() {
    // console.log(this.formulario.value)
    // console.log(this.formulario.value.datetime_inicio, this.formulario.value.datetime_fin)

    // alert de confirmación

    // si confirma, next con la reserva
    // const response = await this.salasServices.reservarSala(this.formulario.value)
    try {
      const response = await this.calendarService.create(this.formulario.value)

      if (response.error === 'reservada') {

      }
      // alert tu sala ha sido reservada
    } catch (error) {
      console.log(error)

    }

      //redirección a la lista de salas
      this.router.navigate(['/salas'])
  }
}
