import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { StaffComponent } from './pages/staff/staff.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { NuevasalaComponent } from './pages/salas/nuevasala/nuevasala.component';
import { EditarsalaComponent } from './pages/salas/editarsala/editarsala.component';
import { ListasalasComponent } from './pages/salas/listasalas/listasalas.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'usuarios', component: UsuariosComponent },

  { path: 'staff', component: StaffComponent },

  { path: 'salas', component: ListasalasComponent },
  { path: 'salas/nueva', component: NuevasalaComponent },
  { path: 'salas/editar/:salaId', component: EditarsalaComponent },

  { path: 'contacto', component: ContactoComponent },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
