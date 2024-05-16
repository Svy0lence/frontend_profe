import { Component, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Clusuario } from 'src/app/models/clusuario';
import { SerusuarioService } from 'src/app/services/serusuario.service';


@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent {

  

  id = new FormControl(0, Validators.required);
  usuario = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);


  constructor(private serusuarioservice: SerusuarioService, private dialogRef: MatDialogRef<EditarUsuarioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Clusuario ){
    this.mostrarCajas();
  }
  


  mostrarCajas(){
    this.id.setValue(this.data.id);
    this.usuario.setValue(this.data.usuario);
    this.password.setValue(this.data.password);
  }

  actualizar(){
    const usuarioDetails: Clusuario = {
      id: this.id.value as number,
      usuario: this.usuario.value as string,
      password: this.password.value as string
    }

    this.serusuarioservice.updateUser(usuarioDetails.id, usuarioDetails).subscribe(
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
