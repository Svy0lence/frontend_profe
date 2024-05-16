import { Component, ViewChild} from '@angular/core';
 
import { Clusuario } from '../../models/clusuario';
import { SerusuarioService } from '../../services/serusuario.service';

import { MatDialog } from '@angular/material/dialog';
import { MatEliminarComponent } from 'src/app/components/mat-eliminar/mat-eliminar.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
 
@Component({
  selector: 'app-listausuario',
  templateUrl: './listausuario.component.html',
  styleUrls: ['./listausuario.component.css']
})
export class ListausuarioComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  title = 'LISTA DE USUARIOS';

 
  clusuario = null as any;
  dataSource = new MatTableDataSource<Clusuario>([]);
  displayedColumns: string[] = ['id', 'usuario', 'password', 'acciones'];

  constructor(
    private serusuarioservice: SerusuarioService,
    private dialog: MatDialog
  ) {
    this.mostrarModelo();
   }

   async mostrarModelo(){
    this.serusuarioservice.getAll().subscribe(
      result => {
      console.log(result)
      this.clusuario = result
      this.dataSource = new MatTableDataSource(this.clusuario);

      this.paginator.length = this.clusuario.length
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

  createUser(){
    const dialogRef = this.dialog.open(CrearUsuarioComponent, {
      width: '50vw',
      height: '60vh'
    });

    dialogRef.afterClosed().subscribe(() => {
      this.mostrarModelo();
    });
  }

  updateUser(usuario: Clusuario){
    const dialogRef = this.dialog.open(EditarUsuarioComponent, {
      data: usuario,
      width: '50vw',
      height: '60vh'
    });

    dialogRef.afterClosed().subscribe(() => {
      this.mostrarModelo();
    });
  }

  deleteUser(id: number): void{
    const dialogRef = this.dialog.open(MatEliminarComponent);
    
    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.serusuarioservice.deleteUser(id).subscribe(
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
