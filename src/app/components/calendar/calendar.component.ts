import { Component, OnInit } from '@angular/core';
// import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es'

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
  public events!: any[];

  public options: any;
  constructor() {}

  ngOnInit() {
    this.options = {
      plugins: [ dayGridPlugin,timeGridPlugin, interactionPlugin],
      defaultDate: new Date(),
      locale: esLocale,
      header: {
        left: 'prev,next',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay',
      },
      editable: false,
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
    ]
    };

    this.events = [
      {
        title: 'Evento 1',
        start: new Date().getTime(),
        description: 'evento 1',
      },
      {
        title: 'Evento 2',
        start: new Date(new Date().getTime() + 86400000),
        description: 'evento 2',
      },
      {
        title: 'Evento 3',
        start: new Date(new Date().getTime() + 86400000 * 2),
        end: new Date(new Date().getTime() + 86400000 * 3),
        description: 'evento 2',
      },
    ];
  }
}
