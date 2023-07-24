/// <reference path="../../../../node_modules/@types/google.maps/index.d.ts" />

import { Component, ElementRef, ViewChild } from '@angular/core';
import { inject } from '@angular/core';
import { SalasService } from 'src/app/services/salas.service';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent {

  //para acceder al elemento del html y poder colocar mi mapa
  @ViewChild('divMapa') divMapa!: ElementRef;
  @ViewChild('inputPlaces') inputPlaces!: ElementRef

  mapa!: google.maps.Map;
  geocoder: google.maps.Geocoder;

  arrMarkers: any[]

  salasService = inject(SalasService)


  constructor() {
    this.geocoder = new google.maps.Geocoder
    this.arrMarkers = []
  }


  // cuando cargue el componente, quiero que localice mi posicion (para que el mapa esté centrado en la posición del usuario)

  async ngOnInit() {

    // centrar el mapa en la posicion del usuario
    navigator.geolocation.getCurrentPosition(position => {
      console.log(position);
      const miPosicion = new google.maps.LatLng(
        position.coords.latitude,
        position.coords.longitude
      );
      this.mapa.setCenter(miPosicion);
    });

    //obtener la lista de salas
    this.arrMarkers = [];
    try {
      const salasRegistradas = await this.salasService.getAll();
      console.log(salasRegistradas)

      // iterar sobre las salas y agregar marcadores
      for (const sala of salasRegistradas) {

        const position = new google.maps.LatLng(sala.latitud, sala.longitud);
        const marker = this.agregarMarker(position, sala.nombre, sala.descripcion);
        this.arrMarkers.push(marker);


      }
    } catch (error) {
      console.log('Error al obtener las salas')
    }

  } /// fin ngOnInit


  //necesito hacer algo especifico cuando el html ya ha salido por pantalla. si lo hiciese en el ngoninit, aun no tendría generado el div, y no podria tener acceso a el
  ngAfterViewInit() {
    this.loadMap()

  }

  loadMap() {
    const options = {
      center: new google.maps.LatLng(40.4167278, -3.7033387),
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.HYBRID,
      mapId: 'mapasalasculturales' //esto lo he puesto siguiendo las ordenes de google para hacer modificaciones de a los marcadores
    }

    // incluir el mapa dentro del div
    this.mapa = new google.maps.Map(this.divMapa.nativeElement, options)

  }

  agregarMarker(position: google.maps.LatLng, nombreSala: string, descripcion: string) {
    const marker = new google.maps.Marker({
      position,
      map: this.mapa,
      animation: null,
    })

    const contentString =
      `<div id="tarjeta" style="width: 250px">
      <h5 id="firstHeading" class="firstHeading">${nombreSala}</h5>
      <hr style="color: #0077B6">
      <div id="contenidotarjeta">
      <p>${descripcion}</p> 

     <p>Haz Login para más información</p>

      </div>
      </div>`;

    const infowindow = new google.maps.InfoWindow({
      content: contentString,
      ariaLabel: nombreSala,
    });


    marker.addListener("mouseover", () => {
      infowindow.open(this.mapa, marker);
    });
    marker.addListener("mouseout", () => {
      infowindow.close()
    });

    return marker
  }


}
