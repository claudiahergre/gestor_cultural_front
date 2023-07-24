import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Sala } from 'src/app/interfaces/sala.interface';
import { SalasService } from 'src/app/services/salas.service';

@Component({
  selector: 'app-reservarsala',
  templateUrl: './reservarsala.component.html',
  styleUrls: ['./reservarsala.component.css'],
})
export class ReservarsalaComponent {
  formulario: FormGroup;
  salasServices = inject(SalasService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);

  sala: Sala
  salaId: number

  constructor() {
    this.formulario = new FormGroup({
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
      longitud: 0
    }
    this.salaId = 0
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(async params => {
      this.salaId = params['salaId']
      this.sala = await this.salasServices.getById(params['salaId'])

    })
  }

  //en ng oninit. ir con el activated route
  // this.activated.activatedroutr = this.activatedRoute.snapshot.snapshot.params - nos devuelve la id de la sala que queremos reservar. esto sirve para conectar con el back

  async onSubmit() {
    // console.log(this.formulario.value)
    // console.log(this.formulario.value.datetime_inicio, this.formulario.value.datetime_fin)

    // alert de confirmación

    // si confirma, next con la reserva
    const response = await this.salasServices.reservarSala(
      this.formulario.value
    );

    if (response.error === 'reservada') {
    }
    // alert tu sala ha sido reservada

    //redirección a la lista de salas
    this.router.navigate(['/salas']);
  }

  checkError(field: string, error: string): boolean | undefined {
    return (
      this.formulario.get(field)?.hasError(error) &&
      this.formulario.get(field)?.touched
    );
  }

}
