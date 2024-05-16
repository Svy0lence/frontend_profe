import { Component, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Clusuario } from 'src/app/models/clusuario';
import { CategoriaService } from 'src/app/services/categoria.service';
import { SerusuarioService } from 'src/app/services/serusuario.service';

@Component({
  selector: 'app-crear-categoria',
  templateUrl: './crear-categoria.component.html',
  styleUrls: ['./crear-categoria.component.css']
})
export class CrearCategoriaComponent {

  descripcion = new FormControl('', Validators.required);

  constructor(private categoriaService: CategoriaService, private dialogRef: MatDialogRef<CrearCategoriaComponent> ){
  }
  
  crear(){
    const categoriaDetails: any = {
      //id_categoria: 121,
      descripcion: this.descripcion.value as string,
    }
    console.log(categoriaDetails)
    this.categoriaService.createUser(categoriaDetails).subscribe(
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
