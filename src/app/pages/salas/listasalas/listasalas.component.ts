import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SalasService } from 'src/app/services/salas.service';
import { Sala } from 'src/app/interfaces/sala.interface'
import { StaffService } from 'src/app/services/staff.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-listasalas',
  templateUrl: './listasalas.component.html',
  styleUrls: ['./listasalas.component.css']
})
export class ListasalasComponent {

  private salasService = inject(SalasService)
  staffServices = inject(StaffService)
  activatedRoute = inject(ActivatedRoute)

  staffTemporal: string = 'administrador';

  salas: Sala[]

  constructor() {
    this.salas = []
  }

  async ngOnInit() {

    //consultar el token del localstorage
    try {
      this.salas = await this.salasService.getAll()
      console.log(this.salas)
    } catch (error) {
      console.log(error)
    }
  }


  eliminarSala(salaId: number) {
    Swal.fire({
      title: '¿Estás segur@?',
      text: "Una vez borrado no se puede recuperar",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, bórralo'
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await this.salasService.deleteById(salaId)

        Swal.fire({
          icon: 'success',
          title: 'Sala borrada',
          showConfirmButton: false,
          timer: 2500,
          width: 500,
          padding: '3em',
          color: '#716add',
          background: '#000000'
        })

      }
    })
  }


}
