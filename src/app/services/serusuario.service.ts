import { Injectable } from '@angular/core';
 
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Clusuario } from '../models/clusuario';
import { environment } from '../environments/environments';
 
 
@Injectable({
  providedIn: 'root'
})
export class SerusuarioService {
 
  private url: string = environment.BACKEND_URL;
 
  constructor(
    private http: HttpClient
  ) { }
 
  // LISTAR USUARIO
  getAll(): Observable<Clusuario[]> {
    return this.http.get<Clusuario[]>(this.url+ 'res_usu/listar');
  }

  getUserById(id: number){
    return this.http.get<Clusuario[]>(this.url+ `res_usu/buscar/${id}`);
  }

  getUserByUser(user: Clusuario){
    return this.http.post<boolean>(this.url+ `res_usu/buscar/user`, user);
  }

  createUser(usuario:Clusuario): Observable<string> {
    return this.http.post<string>(this.url+ 'res_usu/insertar', usuario);
  }

  updateUser(id: number,usuario:Clusuario): Observable<string> {
    return this.http.put<string>(this.url+ `res_usu/modificar/${id}`, usuario);
  }

  deleteUser(id: number): Observable<string> {
    return this.http.delete<string>(this.url+ `res_usu/eliminar/${id}`);
  }
 
}