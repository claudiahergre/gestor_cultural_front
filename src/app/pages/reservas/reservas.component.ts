import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Reserva } from 'src/app/interfaces/reserva.interface';
import { ReservasService } from 'src/app/services/reservas.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent {
  private reservasService = inject(ReservasService)
  router = inject(Router)

  reservas: Reserva[]
  reservaId: number
  reserva: Reserva

  constructor() {
    this.reservas = [],
      this.reservaId = 0,
      this.reserva = {
        id_reserva: 0,
        usuarios_id: 0,
        salas_id: 0,
        titulo: '',
        descripcion: '',
        fecha_reserva: '',
        hora_reserva: '',
        fecha_fin_reserva: '',
        hora_fin_reserva: '',
        aceptada: 0
      }
  }

  async ngOnInit() {
    try {
      this.reservas = await this.reservasService.getAll()
      console.log(this.reservas)
    } catch (error) {
      console.log(error)
    }
  }

  eliminarReserva(id_reserva: number) {
    Swal.fire({
      title: '¿Estás segur@?',
      text: "Una vez borrada la reserva no se puede recuperar",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#0077B6',
      cancelButtonColor: '#F3722C',
      confirmButtonText: 'Sí, bórrala'

    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await this.reservasService.deleteById(id_reserva)

        Swal.fire({
          icon: 'success',
          title: 'Reserva borrada',
          showConfirmButton: false,
          timer: 2500,
          width: 500,
          padding: '3em',
          color: '#333333',
          background: '#0077B6'
        })

        // recargar la pagina
        this.reservas = await this.reservasService.getAll()
      }
    })
  }

  async aceptarReserva(reserva: any) {
    try {
      reserva.aceptada = 1
      const response = await this.reservasService.aceptarById(reserva.id_reserva, reserva.aceptada)
      console.log(response)
      if (response) {
        Swal.fire({
          icon: 'success',
          title: 'Reserva aceptada',
          showConfirmButton: false,
          timer: 2500,
          width: 500,
          padding: '3em',
          color: '#333333',
          background: '#0077B6'
        });

        // Recargar la lista de reservas actualizada
        this.reservas = await this.reservasService.getAll();
      }
    } catch (error) {
      console.log(error);

    }
  }


}
