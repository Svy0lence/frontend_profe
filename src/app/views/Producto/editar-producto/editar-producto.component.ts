import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Clusuario } from 'src/app/models/clusuario';
import { Categoria, Producto } from 'src/app/models/tarea13.interface';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ProductoService } from 'src/app/services/producto.service';
import { SerusuarioService } from 'src/app/services/serusuario.service';


@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent {

  categorias: Categoria[] = [
    { id_categoria: 1, descripcion: 'Televisores' },
    { id_categoria: 2, descripcion: 'Computadoras' },
    { id_categoria: 3, descripcion: 'Impresoras' },
    { id_categoria: 4, descripcion: 'Cine en casa' },
    { id_categoria: 5, descripcion: 'Radio' }
  ];

  registerForm= new FormGroup({
    id_producto: new FormControl(0, Validators.required),
    nombre: new FormControl('', Validators.required),
    marca: new FormControl('', Validators.required),
    precio: new FormControl(0, Validators.required),
    stock: new FormControl(0, Validators.required),
    id_categoria: new FormControl(0, Validators.required),
  },);


  constructor(private productoService: ProductoService, private categoriaService: CategoriaService, private dialogRef: MatDialogRef<EditarProductoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Producto ){
    this.mostrarCategorias();
    this.mostrarCajas();
    
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

  mostrarCajas(){
    this.registerForm.setValue({
      id_producto: this.data.id_producto || null,
      nombre : this.data.nombre || '',
      marca: this.data.marca || '',
      precio: this.data.precio || null,
      stock: this.data.stock || null,
      id_categoria: this.data.categoria.id_categoria || null,
    });

  }

  actualizar(){
    const productoDetails: any = {
      id_producto: this.registerForm.get('id_producto')?.value,
      nombre: this.registerForm.get('nombre')?.value,
      marca: this.registerForm.get('marca')?.value,
      precio: this.registerForm.get('precio')?.value,
      stock: this.registerForm.get('stock')?.value,
      categoria: this.registerForm.get('id_categoria')?.value,
    }
    console.log(productoDetails)

    this.productoService.updateProducto(productoDetails).subscribe(
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
