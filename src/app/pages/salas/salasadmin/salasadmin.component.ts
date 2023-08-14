import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Sala } from 'src/app/interfaces/sala.interface';
import { SalasService } from 'src/app/services/salas.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-salasadmin',
  templateUrl: './salasadmin.component.html',
  styleUrls: ['./salasadmin.component.css']
})
export class SalasadminComponent {
  private salasService = inject(SalasService)
  router = inject(Router)

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
      confirmButtonColor: '#0077B6',
      cancelButtonColor: '#F3722C',
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
          color: '#333333',
          background: '#0077B6'
        })

        // recargar la pagina
        this.salas = await this.salasService.getAll()
      }
    })



  }

}
