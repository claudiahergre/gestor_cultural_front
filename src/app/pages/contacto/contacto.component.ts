import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {


  formulario: FormGroup;



  constructor(private router: Router) {
    this.formulario = new FormGroup({
      nombre: new FormControl(),
      apellidos: new FormControl(),
      email: new FormControl(),
      mensaje: new FormControl(),
      rol: new FormControl(),
    });
  }

  // async onSubmit() {
  //   const response = await this.staffService.registro(this.formulario.value);
  //   console.log(response);

  //   if (response.id) {
  //     this.router.navigate(['/loginStaff']);
  //   } else {
  //     //alertita de que se registre correctamente
  //     alert('Tienes que hacer el login correctamente');
  //   }
  // }

}
