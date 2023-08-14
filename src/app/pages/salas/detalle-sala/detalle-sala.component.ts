import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sala } from 'src/app/interfaces/sala.interface';
import { SalasService } from 'src/app/services/salas.service';

import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-detalle-sala',
  templateUrl: './detalle-sala.component.html',
  styleUrls: ['./detalle-sala.component.css']
})
export class DetalleSalaComponent {

  salasService = inject(SalasService)
  activatedRoute = inject(ActivatedRoute)
  sanitizer = inject(DomSanitizer)

  salaId: number
  sala: Sala;
  urlMapa: any;

  constructor() {
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
      reservas: []
    }
    this.salaId = 0;
    this.urlMapa = '';
  }

  ngOnInit() {

    this.activatedRoute.params.subscribe(async params => {
      this.salaId = params['salaId']
      this.sala = await this.salasService.getById(params['salaId'])

      this.urlMapa = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.google.com/maps/embed/v1/place?key=AIzaSyBMOcTcAkobrlfKIBOJNz6lDw2R5fJsk_Q&q=' + this.sala.direccion)
    })

  }


}
