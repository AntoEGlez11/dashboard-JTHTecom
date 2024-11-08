import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Usuario } from '../../interfaces/usuario';
import { environment } from '../../config/environments';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) {}

  // Manejador de Errores
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('Se ha producido un error', error.error);
    } else {
      console.error('Backend retornó código de estado', error.status, error.error);
    }
    return throwError(() => new Error('Algo falló. Por favor intente nuevamente.'));
  }

  // Obtener todos los Usuarios
  obtenerUsuarios(): Observable<Usuario[]> {
    console.log(environment.apiUsuarios);
    return this.http.get<Usuario[]>(environment.apiUsuarios).pipe(
      catchError(this.handleError)
    );
  }

  // Obtener Usuario por ID
  obtenerUsuarioPorId(id: number): Observable<Usuario> {
    console.log(`${environment.apiUsuarios}${id}`);
    return this.http.get<Usuario>(`${environment.apiUsuarios}${id}`).pipe(
      catchError(this.handleError)
    );
  }

  // Obtener Usuario por UUID
  obtenerUsuarioPorUuid(uuid: string): Observable<Usuario> {
    console.log(`${environment.apiUsuarios}uuid/${uuid}`);
    return this.http.get<Usuario>(`${environment.apiUsuarios}uuid/${uuid}`).pipe(
      catchError(this.handleError)
    );
  }

  // Editar Usuario
  editarUsuario(id: number, usuario: Usuario): Observable<Usuario> {
    console.log(`${environment.apiUsuarios}${id}`);
    return this.http.put<Usuario>(`${environment.apiUsuarios}/${id}`, usuario).pipe(
      catchError(this.handleError)
    );
  }

  // Eliminar Usuario
  eliminarUsuario(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.apiUsuarios}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  // Crear usuario nuevo
  crearUsuario(usuario: Usuario): Observable<Usuario> {
    // Asegurarse de no enviar 'id' ni 'createdAt'
    const usuarioParaCrear = {
      ...usuario,
      id: undefined,
      createdAt: undefined
    };

    return this.http.post<Usuario>(`${environment.apiUsuarios}`, usuarioParaCrear).pipe(
      catchError(this.handleError)
    );
  }
}
