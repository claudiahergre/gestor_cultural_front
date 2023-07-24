import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Sala } from 'src/app/interfaces/sala.interface';
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

  salaSeleccionada!: Sala

  constructor() {
    this.formulario = new FormGroup({
      titulo: new FormControl(),
      descripcion: new FormControl(),

      fecha_reserva: new FormControl(),
      hora_reserva: new FormControl(),

      fecha_fin_reserva: new FormControl(),
      hora_fin_reserva: new FormControl(),
    })
  }

  async ngOnInit() {
    const { salaId } = this.activatedRoute.snapshot.params;
     try {
      this.salaSeleccionada = await this.salasServices.getById(salaId);
    } catch (error) {
      console.log(error)
    }
  }


  async onSubmit() {
      try {
      this.formulario.value.salas_id = this.salaSeleccionada.id
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
