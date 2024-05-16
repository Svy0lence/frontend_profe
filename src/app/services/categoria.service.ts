import { Injectable } from '@angular/core';
 
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from '../models/tarea13.interface';
import { environment } from '../environments/environments';
 
 
@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
 
  private url: string = environment.BACKEND_URL;
 
  constructor(
    private http: HttpClient
  ) { }
 
  // LISTAR categoria
  getAll(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.url+ 'categorias/listar');
  }

  getUserById(id: number){
    return this.http.get<Categoria[]>(this.url+ `categorias/buscar/${id}`);
  }

  createUser(categoria:Categoria): Observable<string> {
    return this.http.post<string>(this.url+ 'categorias/insertar', categoria);
  }

  updateUser(categoria:Categoria): Observable<string> {
    return this.http.put<string>(this.url+ `categorias/modificar`, categoria);
  }

  deleteUser(id: number): Observable<string> {
    return this.http.delete<string>(this.url+ `categorias/eliminar/${id}`);
  }
 
}