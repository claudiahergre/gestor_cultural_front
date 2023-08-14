import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactoService } from 'src/app/services/contacto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
})
export class ContactoComponent {
  formulario: FormGroup;
  contactoService = inject(ContactoService);

  constructor(private router: Router) {
    this.formulario = new FormGroup({
      nombre: new FormControl(null, [Validators.required]),
      apellidos: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,10}$/),
      ]),
      mensaje: new FormControl(null, [Validators.required]),
    });
  }

  async onSubmit() {
      const response = await this.contactoService.contactoFormulario(this.formulario.value);
      console.log(response);

      Swal.fire({
        icon: 'success',
        title: 'Mensaje enviado correctamente',
        showConfirmButton: false,
        timer: 2500,
        width: 500,
        padding: '3em',
        color: '#333333',
        background: '#0077B6'
      })
      this.router.navigate(['/home'])
    }

  checkError(field: string, error: string) {
    return (
      this.formulario.get(field)?.hasError(error) &&
      this.formulario.get(field)?.touched
    );
  }
}
