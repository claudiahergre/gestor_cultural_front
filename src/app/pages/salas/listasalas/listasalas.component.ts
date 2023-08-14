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
    try {
      this.salas = await this.salasService.getAll()
     } catch (error) {
      console.log(error)
    }
  }

}
