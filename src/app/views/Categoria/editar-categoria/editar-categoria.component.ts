import { Component, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Categoria } from 'src/app/models/tarea13.interface';
import { CategoriaService } from 'src/app/services/categoria.service';


@Component({
  selector: 'app-editar-categoria',
  templateUrl: './editar-categoria.component.html',
  styleUrls: ['./editar-categoria.component.css']
})
export class EditarCategoriaComponent {

  

  id_categoria = new FormControl(0, Validators.required);
  descripcion = new FormControl('', Validators.required);



  constructor(private categoriaService: CategoriaService, private dialogRef: MatDialogRef<EditarCategoriaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Categoria ){
    this.mostrarCajas();
  }
  


  mostrarCajas(){
    this.id_categoria.setValue(this.data.id_categoria as number);
    this.descripcion.setValue(this.data.descripcion);

  }

  actualizar(){
    const categoriaDetails: any = {
      id_categoria: this.id_categoria.value as number,
      descripcion: this.descripcion.value as string,
    }

    this.categoriaService.updateUser(categoriaDetails).subscribe(
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
