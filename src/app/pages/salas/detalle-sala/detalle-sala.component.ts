import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sala } from 'src/app/interfaces/sala.interface';
import { SalasService } from 'src/app/services/salas.service';

@Component({
  selector: 'app-detalle-sala',
  templateUrl: './detalle-sala.component.html',
  styleUrls: ['./detalle-sala.component.css']
})
export class DetalleSalaComponent {

  salasService = inject(SalasService)
  activatedRoute = inject(ActivatedRoute)

  salaId: number
  sala: Sala;

  constructor() {
    this.sala = {
      id: 0,
      precio: '',
      aforo: 0,
      nombre: '',
      direccion: '',
      descripcion: '',
      url_foto: ''
    }
    this.salaId = 0
  }

  ngOnInit() {

    this.activatedRoute.params.subscribe(async params => {
      this.salaId = params['salaId']
      this.sala = await this.salasService.getById(params['salaId'])

    })

  }


}
