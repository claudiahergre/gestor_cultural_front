import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
})
export class ContactoComponent {
  formulario: FormGroup;

  constructor(private router: Router) {
    this.formulario = new FormGroup({
      nombre: new FormControl(null, [Validators.required]),
      apellidos: new FormControl(null,[Validators.required]),
      email: new FormControl(null,[
        Validators.required,
        Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,10}$/),
      ]),
      mensaje: new FormControl(null,[Validators.required]),
    });
  }

  // async onSubmit() {
    //   const response = await this.formulario.value;
    //   console.log(response);

    //   if (response.id) {
      //     this.router.navigate(['/loginStaff']);
      //   } else {
             //alerta de que se envia correctamente
        //     alert('Tienes que hacer el login correctamente');
        //   }
  // }

        checkError(field: string, error: string) {
          return (
            this.formulario.get(field)?.hasError(error) &&
            this.formulario.get(field)?.touched
          );
        }
}
