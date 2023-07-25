import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';


import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { ListaUsuariosComponent } from './pages/usuarios/lista-usuarios/lista-usuarios.component';
import { EditarUsuarioComponent } from './pages/usuarios/editar-usuario/editar-usuario.component';
import { LoginComponent } from './pages/usuarios/login/login.component';
import { RegistroComponent } from './pages/usuarios/registro/registro.component';
import { PanelAdminComponent } from './pages/staff/panel-admin/panel-admin.component';
import { PanelTrabajadorComponent } from './pages/staff/panel-trabajador/panel-trabajador.component';
import { ListaStaffComponent } from './pages/staff/lista-staff/lista-staff.component';
import { EditarStaffComponent } from './pages/staff/editar-staff/editar-staff.component';
import { LoginStaffComponent } from './pages/staff/login/login-staff.component';
import { RegistroStaffComponent } from './pages/staff/registro/registro-staff.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NuevasalaComponent } from './pages/salas/nuevasala/nuevasala.component';
import { EditarsalaComponent } from './pages/salas/editarsala/editarsala.component';
import { ListasalasComponent } from './pages/salas/listasalas/listasalas.component';
import { ReservarsalaComponent } from './pages/salas/reservarsala/reservarsala.component';
import { SalasadminComponent } from './pages/salas/salasadmin/salasadmin.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { DetalleSalaComponent } from './pages/salas/detalle-sala/detalle-sala.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular';

import { SafePipe } from './pipes/safe.pipe';
import { LocalizacionComponent } from './pages/localizacion/localizacion.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ContactoComponent,
    ListaUsuariosComponent,
    EditarUsuarioComponent,
    LoginComponent,
    RegistroComponent,
    ContactoComponent,
    LoginComponent,
    RegistroComponent,
    PanelAdminComponent,
    PanelTrabajadorComponent,
    ListaStaffComponent,
    EditarStaffComponent,
    LoginStaffComponent,
    RegistroStaffComponent,
    ContactoComponent,
    NuevasalaComponent,
    EditarsalaComponent,
    ListasalasComponent,
    ReservarsalaComponent,
    SalasadminComponent,
    MapaComponent,
    DetalleSalaComponent,
    CalendarComponent,
    SafePipe,
    LocalizacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FullCalendarModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
