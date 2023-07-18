import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { SalasComponent } from './pages/salas/salas.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { LoginComponent } from './pages/staff/login/login.component';
import { RegistroComponent } from './pages/staff/registro/registro.component';
import { PanelAdminComponent } from './pages/staff/panel-admin/panel-admin.component';
import { PanelTrabajadorComponent } from './pages/staff/panel-trabajador/panel-trabajador.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'usuarios', component: UsuariosComponent },

  { path: 'loginStaff', component: LoginComponent },
  { path: 'registroStaff', component: RegistroComponent },

  //Rutas para panelAdmin y panelTrabajador
  { path: 'panelAdmin', component: PanelAdminComponent },
  { path: 'panelTrabajador', component: PanelTrabajadorComponent },

  { path: 'salas', component: SalasComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
