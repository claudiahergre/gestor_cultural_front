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
  reservaTrue: number

  constructor() {
    this.reservas = [],
      this.reservaId = 0,
      this.reservaTrue = 0
  }

  async ngOnInit() {
    try {
      this.reservas = await this.reservasService.getAll()
      console.log(this.reservas)
    } catch (error) {
      console.log(error)
    }
  }

  eliminarReserva(reservaId: number) {
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
        const response = await this.reservasService.deleteById(reservaId)

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

  async aceptarReserva() {
    try {
      this.reservaTrue = 1
      const response = await this.reservasService.updateById(this.reservaId, this.reservaTrue)
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
