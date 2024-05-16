import { Component, ViewChild} from '@angular/core';
 
import { Categoria } from '../../models/tarea13.interface';
import { SerusuarioService } from '../../services/serusuario.service';

import { MatDialog } from '@angular/material/dialog';
import { MatEliminarComponent } from 'src/app/components/mat-eliminar/mat-eliminar.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { CrearCategoriaComponent } from './crear-categoria/crear-categoria.component';
import { EditarCategoriaComponent } from './editar-categoria/editar-categoria.component';
import { CategoriaService } from 'src/app/services/categoria.service';

 
@Component({
  selector: 'app-listacategoria',
  templateUrl: './listacategoria.component.html',
  styleUrls: ['./listacategoria.component.css']
})
export class ListaCategoriaComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  title = 'LISTA DE CATEGORIAS';

  categoria!: Categoria[];
  dataSource = new MatTableDataSource<Categoria>([]);
  displayedColumns: string[] = ['id_categoria', 'descripcion', 'acciones'];

  constructor(
    private categoriaService: CategoriaService,
    private dialog: MatDialog
  ) {
    this.mostrarModelo();
   }

   async mostrarModelo(){
    this.categoriaService.getAll().subscribe(
      result => {
      console.log(result)
      this.categoria = result
      this.dataSource = new MatTableDataSource(this.categoria);

      this.paginator.length = this.categoria.length
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

  createCategoria(){
    const dialogRef = this.dialog.open(CrearCategoriaComponent, {
      width: '50vw',
      height: '60vh'
    });

    dialogRef.afterClosed().subscribe(() => {
      this.mostrarModelo();
    });
  }

  updateCategoria(usuario: Categoria){
    const dialogRef = this.dialog.open(EditarCategoriaComponent, {
      data: usuario,
      width: '50vw',
      height: '60vh'
    });

    dialogRef.afterClosed().subscribe(() => {
      this.mostrarModelo();
    });
  }

  deleteCategoria(id: number): void{
    const dialogRef = this.dialog.open(MatEliminarComponent);
    
    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.categoriaService.deleteUser(id).subscribe(
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
