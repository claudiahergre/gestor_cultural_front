import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StaffComponent } from './pages/staff/staff.component';
import { SalasComponent } from './pages/salas/salas.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ListaUsuariosComponent } from './pages/usuarios/lista-usuarios/lista-usuarios.component';
import { RegistroComponent } from './pages/usuarios/registro/registro.component';
import { LoginComponent } from './pages/usuarios/login/login.component';
import { EditarUsuarioComponent } from './pages/usuarios/editar-usuario/editar-usuario.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'usuarios', component: ListaUsuariosComponent },
  { path: 'usuarios/registro', component: RegistroComponent },
  { path: 'usuarios/login', component: LoginComponent },
  { path: 'usuarios/editar/:usuarioId', component: EditarUsuarioComponent },
  { path: 'staff', component: StaffComponent },
  { path: 'salas', component: SalasComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
