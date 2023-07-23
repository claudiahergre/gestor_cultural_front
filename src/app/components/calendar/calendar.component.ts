import { Component, OnInit, inject } from '@angular/core';
// import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es';
import { CalendarService } from 'src/app/services/calendar.service';
import { Reserva } from 'src/app/interfaces/reserva.interface';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
  calendarServices = inject(CalendarService);
  
  public events!: any[];
  public options: any;
  public baseUrl: string;

  eventTitulo: string = '';
  eventDescripcion: string = '';
  eventFechaInicio: string = '';
  eventoFechaFin: string = '';

  constructor() {
    this.baseUrl = 'http://localhost:3000/api/reservas';
  }

  ngOnInit() {
    this.options = {
      plugins: [timeGridPlugin, interactionPlugin],
      defaultDate: new Date(),
      locale: esLocale,
      header: {
        left: 'prev,next',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay',
        initialView: 'dayGridMonth',
      },
      editable: true,
      droppable: true,
      events: [
        {
          title: 'Conferencia',
          start: new Date().getTime(),
          description: 'evento 1',
        },
        {
          title: 'Concierto',
          start: new Date(new Date().getTime() + 86400000),
          description: 'evento 2',
        },
        {
          title: 'Curso de formación',
          start: new Date(new Date().getTime() + 86400000 * 2),
          end: new Date(new Date().getTime() + 86400000 * 3),
          description: 'evento 2',
        },
      ],
    };

    this.events = [
      {
        title: 'Conferencia',
        start: new Date().getTime(),
        description: 'evento 1',
      },
      {
        title: 'Concierto',
        start: new Date(new Date().getTime() + 86400000),
        description: 'evento 2',
      },
      {
        title: 'Curso de formación',
        start: new Date(new Date().getTime() + 86400000 * 2),
        end: new Date(new Date().getTime() + 86400000 * 3),
        description: 'evento 2',
      },
      {},
    ];
  }

  async getEvents(): Promise<Reserva[]> {
    try {
      const response = await this.calendarServices.getAll<Reserva[]>(
        this.baseUrl
      );
      return response.map((event) => {
        return {
          title: this.eventTitulo,
          description: this.eventDescripcion,
          start: this.eventFechaInicio,
          end: this.eventoFechaFin,
        };
        console.log(event);
      });
    } catch (error) {
      console.log(error)
    }
  }
}
