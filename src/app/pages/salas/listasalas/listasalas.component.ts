import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SalasService } from 'src/app/services/salas.service';
import { Sala } from 'src/app/interfaces/sala.interface'

@Component({
  selector: 'app-listasalas',
  templateUrl: './listasalas.component.html',
  styleUrls: ['./listasalas.component.css']
})
export class ListasalasComponent {

  private salasService = inject(SalasService)
  activatedRoute = inject(ActivatedRoute)

  salas: Sala[]

  constructor() {
    this.salas = []
  }



}
