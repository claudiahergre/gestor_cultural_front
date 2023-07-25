import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Sala } from 'src/app/interfaces/sala.interface';
import { CalendarService } from 'src/app/services/calendar.service';
import { SalasService } from 'src/app/services/salas.service';

@Component({
  selector: 'app-reservarsala',
  templateUrl: './reservarsala.component.html',
  styleUrls: ['./reservarsala.component.css'],
})
export class ReservarsalaComponent {
  formulario: FormGroup;
  calendarService = inject(CalendarService)
  salasServices = inject(SalasService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);

  sala: Sala
  salaId: number

  salaSeleccionada!: Sala

  constructor() {
    this.formulario = new FormGroup({
      titulo: new FormControl(null, [Validators.required]),
      descripcion: new FormControl(null, [Validators.required]),

      fecha_reserva: new FormControl(null, [Validators.required]),
      hora_reserva: new FormControl(null, [Validators.required]),

      fecha_fin_reserva: new FormControl(null, [Validators.required]),
      hora_fin_reserva: new FormControl(null, [Validators.required]),
    });
    this.sala = {
      id: 0,
      precio: '',
      aforo: 0,
      nombre: '',
      direccion: '',
      descripcion: '',
      url_foto: '',
      latitud: 0,
      longitud: 0,
      reservas: [],
    }
    this.salaId = 0
  }

  async ngOnInit() {
    const { salaId } = this.activatedRoute.snapshot.params;
    try {
      this.salaSeleccionada = await this.salasServices.getById(salaId);
    } catch (error) {
      console.log(error)
    }
    this.activatedRoute.params.subscribe(async params => {
      this.salaId = params['salaId']
      this.sala = await this.salasServices.getById(params['salaId'])
    })
  }

  async onSubmit() {





    // console.log(this.formulario.value)
    // console.log(this.formulario.value.datetime_inicio, this.formulario.value.datetime_fin)

    // alert de confirmación

    // si confirma, next con la reserva
    try {
      this.formulario.value.salas_id = this.salaSeleccionada.id
      const response = await this.calendarService.create(this.formulario.value)
      console.log(response)

      if (response.error === 'reservada') {
      }
      // alert tu sala ha sido reservada

    } catch (error) {
      console.log(error)
      //redirección a la lista de salas
      this.router.navigate(['/salas']);
    }
  }

  checkError(field: string, error: string): boolean | undefined {
    return (
      this.formulario.get(field)?.hasError(error) &&
      this.formulario.get(field)?.touched
    );
  }
}
