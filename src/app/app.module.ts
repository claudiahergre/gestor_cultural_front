import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { StaffComponent } from './pages/staff/staff.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NuevasalaComponent } from './pages/salas/nuevasala/nuevasala.component';
import { EditarsalaComponent } from './pages/salas/editarsala/editarsala.component';
import { ListasalasComponent } from './pages/salas/listasalas/listasalas.component';
import { ReservarsalaComponent } from './pages/salas/reservarsala/reservarsala.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    UsuariosComponent,
    StaffComponent,
    ContactoComponent,
    NuevasalaComponent,
    EditarsalaComponent,
    ListasalasComponent,
    ReservarsalaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
