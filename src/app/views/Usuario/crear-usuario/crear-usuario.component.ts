import { Component, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Clusuario } from 'src/app/models/clusuario';
import { SerusuarioService } from 'src/app/services/serusuario.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent {
  

  


  usuario = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);


  constructor(private serusuarioservice: SerusuarioService, private dialogRef: MatDialogRef<CrearUsuarioComponent> ){
  }
  




  actualizar(){
    const usuarioDetails: any = {
      usuario: this.usuario.value as string,
      password: this.password.value as string
    }

    this.serusuarioservice.createUser(usuarioDetails).subscribe(
      result => {
        const message = result;
        alert(message);
        console.log(message)
      }, error => {
        alert(error)
        console.log(error)
    });
    
  }

}
