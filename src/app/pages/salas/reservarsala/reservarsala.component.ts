import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Sala } from 'src/app/interfaces/sala.interface';
import { CalendarService } from 'src/app/services/calendar.service';
import { SalasService } from 'src/app/services/salas.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-reservarsala',
  templateUrl: './reservarsala.component.html',
  styleUrls: ['./reservarsala.component.css'],
})
export class ReservarsalaComponent {
  formulario: FormGroup;
  calendarService = inject(CalendarService);
  salasServices = inject(SalasService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);

  sala: Sala;
  salaId: number;

  salaSeleccionada!: Sala;

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
    };
    this.salaId = 0;
  }

  async ngOnInit() {
    const { salaId } = this.activatedRoute.snapshot.params;
    try {
      this.salaSeleccionada = await this.salasServices.getById(salaId);
    } catch (error) {
      console.log(error);
    }
    this.activatedRoute.params.subscribe(async (params) => {
      this.salaId = params['salaId'];
      this.sala = await this.salasServices.getById(params['salaId']);
    });
  }

  async onSubmit() {
    try {
      this.formulario.value.salas_id = this.salaSeleccionada.id;
      const response = await this.calendarService.create(this.formulario.value);

      const date = new Date(this.formulario.value.fecha_reserva);
      const [hora, minutos] = this.formulario.value.hora_reserva.split(':');
      date.setHours(hora);
      date.setMinutes(minutos);
      const dateString = date.toISOString();
      console.log(dateString);
      if (response.error === 'reservada') {
      }

      Swal.fire({
        icon: 'success',
        title: 'Sala Reservada',
        showConfirmButton: false,
        timer: 2500,
        width: 500,
        padding: '3em',
        color: '#333333',
        background: '#0077B6'
      })

      this.salaSeleccionada = await this.salasServices.getById(this.salaId);
      // alert tu sala ha sido reservada

    } catch (error) {
      console.log(error);
      //Si hay error, redirección a la lista de salas
      this.router.navigate(['/salas']);
    }
  }

  onSelect(event: { startStr: string; endStr: string }) {
    this.formulario.patchValue({
      fecha_reserva: event.startStr.split('T')[0],
    });
    this.formulario.patchValue({
      fecha_fin_reserva: event.endStr.split('T')[0],
    });
    this.formulario.patchValue({
      hora_reserva: event.startStr.split('T')[1].slice(0, 5),
    });
    this.formulario.patchValue({
      hora_fin_reserva: event.endStr.split('T')[1].slice(0, 5),
    });
  }

  checkError(field: string, error: string): boolean | undefined {
    return (
      this.formulario.get(field)?.hasError(error) &&
      this.formulario.get(field)?.touched
    );
  }
}
