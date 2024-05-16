import { Injectable } from '@angular/core';
 
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/tarea13.interface';
import { environment } from '../environments/environments';
 
 
@Injectable({
  providedIn: 'root'
})
export class ProductoService {
 
  private url: string = environment.BACKEND_URL;
 
  constructor(
    private http: HttpClient
  ) { }
 
  // LISTAR Producto
  getAll(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.url+ 'productos/listar');
  }

  getProductoById(id: number){
    return this.http.get<Producto[]>(this.url+ `productos/buscar/${id}`);
  }

  createProducto(Producto: Producto): Observable<string> {
    return this.http.post<string>(this.url+ 'productos/insertar', Producto);
  }

  updateProducto( Producto:Producto): Observable<string> {
    return this.http.put<string>(this.url+ `productos/modificar`, Producto);
  }

  deleteProducto(id: number): Observable<string> {
    return this.http.delete<string>(this.url+ `productos/eliminar/${id}`);
  }
 
}