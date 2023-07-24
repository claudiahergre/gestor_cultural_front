import { Component, Input, OnInit, inject } from '@angular/core';
// import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es';
import { CalendarService } from 'src/app/services/calendar.service';
import { Reserva } from 'src/app/interfaces/reserva.interface';
import { CalendarEvent } from 'src/app/interfaces/calendar_event.interface';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
  calendarServices = inject(CalendarService);

  public options: any;
  public baseUrl: string;

  @Input() reservas: CalendarEvent[] = [];

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
      events: this.reservas,
      };
    // this.events = [
    //   {
    //     title: 'Conferencia',
    //     start: new Date().getTime(),
    //     description: 'evento 1',
    //   },
    //   {
    //     title: 'Concierto',
    //     start: new Date(new Date().getTime() + 86400000),
    //     description: 'evento 2',
    //   },
    //   {
    //     title: 'Curso de formación',
    //     start: new Date(new Date().getTime() + 86400000 * 2),
    //     end: new Date(new Date().getTime() + 86400000 * 3),
    //     description: 'evento 2',
    //   },
    //   {},
    // ];
  }



  async getEvents(): Promise<CalendarEvent[] | any> {
    try {
      const response = await this.calendarServices.getAll();
      const calendarEvents: CalendarEvent[] = response.map((event) => {
        // const fechaInicio = new Date(`${event.fecha_reserva}T${event.hora_reserva}`).toISOString();
        // console.log(fechaInicio);
        return {
          title: event.titulo,
          description: event.descripcion,
          start: event.fecha_reserva,
          end: event.fecha_fin_reserva,
        };
      });
      return calendarEvents;
    } catch (error) {
      console.log(error);
    }
  }
}
