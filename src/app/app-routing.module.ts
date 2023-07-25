import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

import { ContactoComponent } from './pages/contacto/contacto.component';
//import { LoginGuard } from './guards';
import { ListaUsuariosComponent } from './pages/usuarios/lista-usuarios/lista-usuarios.component';
import { RegistroComponent } from './pages/usuarios/registro/registro.component';
import { LoginComponent } from './pages/usuarios/login/login.component';
import { EditarUsuarioComponent } from './pages/usuarios/editar-usuario/editar-usuario.component';
import { PanelAdminComponent } from './pages/staff/panel-admin/panel-admin.component';
import { PanelTrabajadorComponent } from './pages/staff/panel-trabajador/panel-trabajador.component';
import { ListaStaffComponent } from './pages/staff/lista-staff/lista-staff.component';
import { EditarStaffComponent } from './pages/staff/editar-staff/editar-staff.component';
import { LoginStaffComponent } from './pages/staff/login/login-staff.component';
import { RegistroStaffComponent } from './pages/staff/registro/registro-staff.component';
import { NuevasalaComponent } from './pages/salas/nuevasala/nuevasala.component';
import { EditarsalaComponent } from './pages/salas/editarsala/editarsala.component';
import { ListasalasComponent } from './pages/salas/listasalas/listasalas.component';
import { ReservarsalaComponent } from './pages/salas/reservarsala/reservarsala.component';
import { SalasadminComponent } from './pages/salas/salasadmin/salasadmin.component';
import { MapaComponent } from './pages/mapa/mapa.component';
import { DetalleSalaComponent } from './pages/salas/detalle-sala/detalle-sala.component';
import { LoginGuard, LoginGuardUsuario } from './guards';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'usuarios', component: ListaUsuariosComponent, canActivate: [LoginGuard] },
  { path: 'usuarios/registro', component: RegistroComponent },
  { path: 'usuarios/login', component: LoginComponent },
  { path: 'usuarios/editar/:usuarioId', component: EditarUsuarioComponent, canActivate: [LoginGuard] },
  { path: 'usuarios/eliminar/:usuarioId', component: EditarUsuarioComponent, canActivate: [LoginGuard] },
  { path: 'loginStaff', component: LoginStaffComponent },
  { path: 'registroStaff', component: RegistroStaffComponent },

  //Rutas para panelAdmin, panelTrabajador, listaStaff, eliminar staff y editar staff
  { path: 'panelAdmin', component: PanelAdminComponent, canActivate: [LoginGuard] },
  { path: 'panelTrabajador', component: PanelTrabajadorComponent, canActivate: [LoginGuard] },
  { path: 'listaStaff', component: ListaStaffComponent, canActivate: [LoginGuard] },
  { path: 'staff/editar/:staffId', component: EditarStaffComponent, canActivate: [LoginGuard] },
  { path: 'staff/eliminar/:staffId', component: RegistroComponent, canActivate: [LoginGuard] },

  { path: 'mapa', component: MapaComponent },
  { path: 'salas', component: ListasalasComponent },
  { path: 'salas/salasadmin', component: SalasadminComponent, canActivate: [LoginGuard] },
  { path: 'salas/nueva', component: NuevasalaComponent, canActivate: [LoginGuard] },
  { path: 'salas/editar/:salaId', component: EditarsalaComponent, canActivate: [LoginGuard] },
  { path: 'salas/reservar/:salaId', component: ReservarsalaComponent, canActivate: [LoginGuardUsuario] },
  { path: 'salas/detalle/:salaId', component: DetalleSalaComponent },

  { path: 'contacto', component: ContactoComponent },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
