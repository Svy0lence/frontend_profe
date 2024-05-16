import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { MatToolbarModule } from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import {MatTabsModule} from '@angular/material/tabs';


import { MatEliminarComponent } from './components/mat-eliminar/mat-eliminar.component';

import { ListaCategoriaComponent } from './views/Categoria/listacategoria.component';
import { CrearCategoriaComponent } from './views/Categoria/crear-categoria/crear-categoria.component';
import { EditarCategoriaComponent } from './views/Categoria/editar-categoria/editar-categoria.component';

import { ListaProductoComponent } from './views/Producto/listaProducto.component';
import { CrearProductoComponent } from './views/Producto/crear-producto/crear-producto.component';
import { EditarProductoComponent } from './views/Producto/editar-producto/editar-producto.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    //producto
    ListaProductoComponent,
    CrearProductoComponent,
    EditarProductoComponent,
    
    //categoria
    ListaCategoriaComponent,
    CrearCategoriaComponent,
    EditarCategoriaComponent,

    MatEliminarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSortModule,
    MatTabsModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
