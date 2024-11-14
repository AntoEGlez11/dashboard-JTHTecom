import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, map, Observable, of, throwError } from 'rxjs';
import { authResponse } from '../../interfaces/authResponse';
import { AuthRequest } from '../../interfaces/authRequest';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('Se ha producido un error:', error.error);
    } else {
      console.error('El backend retornó un código de estado:', error.status, error.error);
    }
    return throwError(() => new Error('Algo falló. Por favor intente nuevamente'));
  }

  // Metodo para obtener las credenciales de usuarios email y password y rol
  login(credentials: AuthRequest): Observable<authResponse> {
    const loginUrl= "assets/mock-login.json"; // cambiar para URL de backend

    console.log('Intento de login con:', credentials);
    return this.http.post<authResponse>(loginUrl, credentials).pipe(
      map(response => {
        // Guarda token y rol en localStorage
        localStorage.setItem('token', response.token);
        localStorage.setItem('rol', response.rol);

        return response;
      }),
      catchError(this.handleError)
    );

  }
  
  // Deslogueo de Dashboard
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('rol');
  }

  // Obtener correo electronico por olvido
  requestPasswordReset(email: string): Observable<any> {
    const apiURl = '`${this.apiUrl}/auth/forgot-password`, { email }'; // crear endpoint
    return this.http.post(apiURl,{email});
  }

  
}
