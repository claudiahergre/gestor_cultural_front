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

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'usuarios', component: ListaUsuariosComponent },
  { path: 'usuarios/registro', component: RegistroComponent },
  { path: 'usuarios/login', component: LoginComponent },
  { path: 'usuarios/editar/:usuarioId', component: EditarUsuarioComponent },
  { path: 'usuarios/eliminar/:usuarioId', component: EditarUsuarioComponent },
  { path: 'loginStaff', component: LoginStaffComponent },
  { path: 'registroStaff', component: RegistroStaffComponent },

  //Rutas para panelAdmin, panelTrabajador, listaStaff, eliminar staff y editar staff
  { path: 'panelAdmin', component: PanelAdminComponent },
  { path: 'panelTrabajador', component: PanelTrabajadorComponent },
  { path: 'listaStaff', component: ListaStaffComponent },
  { path: 'staff/editar/:staffId', component: EditarStaffComponent },
  { path: 'staff/eliminar/:staffId', component: RegistroComponent },


  { path: 'salas', component: ListasalasComponent },
  { path: 'salas/salasadmin', component: SalasadminComponent },
  { path: 'salas/nueva', component: NuevasalaComponent },
  { path: 'salas/editar/:salaId', component: EditarsalaComponent },
  { path: 'salas/reservar/:salaId', component: ReservarsalaComponent },

  { path: 'contacto', component: ContactoComponent },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
