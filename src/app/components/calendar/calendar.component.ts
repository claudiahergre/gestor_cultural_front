import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
  inject,
  ɵinjectChangeDetectorRef,
} from '@angular/core';
// import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es';
import { CalendarService } from 'src/app/services/calendar.service';
import { Reserva } from 'src/app/interfaces/reserva.interface';
import { CalendarEvent } from 'src/app/interfaces/calendar_event.interface';
import { FullCalendarComponent } from '@fullcalendar/angular';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
  calendarServices = inject(CalendarService);
  cd = inject(ChangeDetectorRef);

  @ViewChild('calendar') calendarComponent!: FullCalendarComponent;

  public options: any;
  public baseUrl: string;

  @Input() reservas: CalendarEvent[] = [];

  @Output() onSelect: EventEmitter<any> = new EventEmitter();

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
      selectable: true,
      dateClick: (info: any) => {
        console.log(info);
      },
      select: (info: any) => {
        console.log(info);
        const { startStr, endStr } = info;
        this.onSelect.emit({
          startStr,
          endStr,
        });
      },
      events: this.reservas,
    };
  }

  async getEvents(): Promise<CalendarEvent[] | any> {
    try {
      const response = await this.calendarServices.getAll();
      const calendarEvents: CalendarEvent[] = response.map((event) => {
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

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
    this.calendarComponent.events = changes["reservas"].currentValue
  }
}
