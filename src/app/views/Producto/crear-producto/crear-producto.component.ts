import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

import { Categoria } from 'src/app/models/tarea13.interface';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent {
  
  categorias: Categoria[] = [];

  registerForm= new FormGroup({
    nombre: new FormControl(null, Validators.required),
    marca: new FormControl('', Validators.required),
    precio: new FormControl(null, Validators.required),
    stock: new FormControl(null, Validators.required),
    id_categoria: new FormControl(null, Validators.required),
  },);
  
  constructor(private productoService: ProductoService, private categoriaService: CategoriaService, private dialogRef: MatDialogRef<CrearProductoComponent> ){
    this.mostrarCategorias();
  }

  mostrarCategorias(){
    this.categoriaService.getAll().subscribe(
      result => {
        this.categorias = result;
        console.log(this.categorias)
      }, error => {
        alert(error)
        console.log(error)
    });
  }

  crear(){
    const productoDetails: any = {
      nombre: this.registerForm.get('nombre')?.value,
      marca: this.registerForm.get('nombre')?.value,
      precio: this.registerForm.get('precio')?.value,
      stock: this.registerForm.get('stock')?.value,
      categoria: this.registerForm.get('id_categoria')?.value,
    } 
    
    console.log(productoDetails)
    this.productoService.createProducto(productoDetails).subscribe(
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
