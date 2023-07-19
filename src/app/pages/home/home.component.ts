import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  images = [
    {
      nombre: 'Sala de conferencias',
      url: 'https://www.negociaarea.com/wp-content/uploads/sala-de-conferencias.jpg',
      descripcion: 'Descripción de la imagen 1',
    },
    {
      nombre: 'Sala de conciertos',
      url: 'https://www.hotelhaciendadecortes.com.mx/theme/img/slide/gp8/lightbox/5.jpg',
      descripcion: 'Descripción de la imagen 2',
    },
    {
      nombre: 'Sala de exposiciones',
      url: 'http://aminuscula.es/wp-content/uploads/2019/02/Ki_Madraza_001b.jpg',
      descripcion: 'Descripción de la imagen 3',
    },
  ];
}
