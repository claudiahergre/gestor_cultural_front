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

  // eventoTitulo: string = '';
  // eventoFechaInicio: string = '';
  // eventoFechaFin: string = '';


  constructor() {}

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

// async getEvents(): Promise<any[]> {
//     try {
//       const response = await this.http.get<any[]>('/path/file.php').toPromise();
//       return response.map(event => {
//         return {
//           'title': event.title,
//           'description': event.description,
//           'start': event.start,
//           'end': event.end,
//         };
//       });
//     } catch (error) {
//       throw error;
//     }
//   }
// }



//   agregarEvento() {
     // Obtener datos del formulario
    // const id = this.id_reserva;
//     const titulo = this.eventoTitulo;
//     const fechaInicio = new Date(this.eventoFechaInicio);
//     const fechaFin = new Date(this.eventoFechaFin);

     // Validar los datos (puedes agregar más validaciones según tus necesidades)

     // Crear objeto de evento
//     const nuevoEvento = {
       // id: id,
//       title: titulo,
//       start: fechaInicio,
//       end: fechaFin,

//     };

     // Agregar el evento a la lista de eventos
//     this.events.push(nuevoEvento);

     // Limpiar el formulario
//     this.eventoTitulo = '';
//     this.eventoFechaInicio = '';
//     this.eventoFechaFin = '';

     // Actualizar el calendario para mostrar el nuevo evento
    // if (this.fullcalendar) {
     //   this.fullcalendar.getApi().addEvent(nuevoEvento);
     // }



  }
