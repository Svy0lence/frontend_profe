import { Component, ViewChild} from '@angular/core';
import { Producto } from '../../models/tarea13.interface';
import { MatDialog } from '@angular/material/dialog';
import { MatEliminarComponent } from 'src/app/components/mat-eliminar/mat-eliminar.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';
import { EditarProductoComponent } from './editar-producto/editar-producto.component';
import { ProductoService } from 'src/app/services/producto.service';

 
@Component({
  selector: 'app-listaProducto',
  templateUrl: './listaProducto.component.html',
  styleUrls: ['./listaProducto.component.css']
})
export class ListaProductoComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  title = 'LISTA DE PRODUCTO';
  producto!: Producto[];
  
  dataSource = new MatTableDataSource<Producto>([]);
  displayedColumns: string[] = ['id_producto', 'nombre', 'marca', 'precio', 'stock', 'id_categoria', 'acciones'];

  constructor(
    private productoService: ProductoService,
    private dialog: MatDialog
  ) {
    this.mostrarModelo();
   }

   async mostrarModelo(){
    this.productoService.getAll().subscribe(
      result => {
      console.log(result)
      this.producto = result
      this.dataSource = new MatTableDataSource(this.producto);

      this.paginator.length = this.producto.length
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      },error => {
        console.log(error)
      }
    );

  }

  filterTable(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  createProducto(){
    const dialogRef = this.dialog.open(CrearProductoComponent, {
      width: '50vw',
      height: '60vh'
    });

    dialogRef.afterClosed().subscribe(() => {
      this.mostrarModelo();
    });
  }

  updateProducto(usuario: Producto){
    const dialogRef = this.dialog.open(EditarProductoComponent, {
      data: usuario,
      width: '50vw',
      height: '60vh'
    });

    dialogRef.afterClosed().subscribe(() => {
      this.mostrarModelo();
    });
  }

  deleteProducto(id: number): void{
    const dialogRef = this.dialog.open(MatEliminarComponent);
    console.log(id)
    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.productoService.deleteProducto(id).subscribe(
          result => {
            const message = result;
            alert(message);
            console.log(message)
            this.mostrarModelo();
          }, error => {
            alert(error)
            console.log(error)
        });
      }          
    });
    
  }

}
