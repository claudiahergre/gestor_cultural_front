import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { StaffComponent } from './pages/staff/staff.component';
import { SalasComponent } from './pages/salas/salas.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'staff', component: StaffComponent },
  { path: 'salas', component: SalasComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
