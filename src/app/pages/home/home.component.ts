import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  images: any[];
  imagenSeleccionada: number = 0;
  interval: any
  constructor() {
    this.images = [
      {
        nombre: 'Sala de conferencias',
        url: 'https://www.negociaarea.com/wp-content/uploads/sala-de-conferencias.jpg',
        descripcion: 'Sala de conferencias',
      },
      {
        nombre: 'Sala de conciertos',
        url: 'https://www.hotelhaciendadecortes.com.mx/theme/img/slide/gp8/lightbox/5.jpg',
        descripcion: 'Sala de conciertos Hotel Hacienda de Cortés',
      },
      {
        nombre: 'Sala de exposiciones',
        url: 'http://aminuscula.es/wp-content/uploads/2019/02/Ki_Madraza_001b.jpg',
        descripcion: 'Sala de exposiciones',
      },
      {
        nombre: 'Sala de formación',
        url: 'https://centrodavinci.es/wp-content/uploads/2019/11/foto-2.jpg',
        descripcion: 'Sala de formación Da Vinci',
      },
      {
        nombre: 'Teatro Jovellanos',
        url: 'https://cd1.taquilla.com/data/images/t/23/teatro-jovellanos.jpg',
        descripcion: 'Teatro Jovellanos de Gijón',
      },
    ];
  }

  ngOnInit(): void {
    this.startInterval()
  }

  cambiaImagen() {
    this.imagenSeleccionada++
    if (this.imagenSeleccionada >= this.images.length) {
      this.imagenSeleccionada = 0;
    }
  }
  stopInterval() {
    clearInterval(this.interval);
    this.interval = null;
  }

  startInterval() {
    this.interval = setInterval(() => {
      this.cambiaImagen()
    }, 1600);
  }
}
