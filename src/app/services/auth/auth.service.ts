import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, map, Observable, of, throwError } from 'rxjs';
import { authResponse } from '../../interfaces/authResponse';
import { AuthRequest } from '../../interfaces/authRequest';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  private validUsers: { email: string; password: string; rol: string }[] = [
    { email: 'admin@admin.com', password: 'admin', rol: 'admin' },
    { email: 'user@user.com', password: 'user', rol: 'user' }
  ];

  login(credentials: AuthRequest): Observable<authResponse> {
    console.log('Intento de login con:', credentials);

    const matchedUser = this.validUsers.find(
      user => user.email === credentials.email && user.password === credentials.password
    );

    if (matchedUser) {
      const response: authResponse = {
        token: 'mock-jwt-token',
        rol: matchedUser.rol,
        email: matchedUser.email,
        password: ''
      };

      // Guardar datos en localStorage
      localStorage.setItem('token', response.token);
      localStorage.setItem('rol', response.rol);

      console.log('Inicio de sesión exitoso:', matchedUser.rol);

      return of(response).pipe(
        delay(1000), // Simula una espera de 1 segundo
        catchError(this.handleError)
      );
    } else {
      console.error('Credenciales inválidas');
      return throwError(() => new Error('Credenciales inválidas'));
    }
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('rol');
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('Se ha producido un error:', error.error);
    } else {
      console.error('El backend retornó un código de estado:', error.status, error.error);
    }
    return throwError(() => new Error('Algo falló. Por favor intente nuevamente'));
  }
}
