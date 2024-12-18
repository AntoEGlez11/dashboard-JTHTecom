import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, throwError } from 'rxjs';
import { authResponse } from '../../interfaces/authResponse';
import { AuthRequest } from '../../interfaces/authRequest';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl: any;
  constructor(private http: HttpClient) {}

  private users = [
    { email: 'admin@ejemplo.com', password: 'admin123', rol: 'admin' },
    { email: 'moderator@ejemplo.com', password: 'mod123', rol: 'manager-movil' }, // asigna SIM con vehiculo
    { email: 'guest@ejemplo.com', password: 'guest123', rol: 'manager-user' }, //asigna SIM-Vehiculo con cliente
    { email: 'user@ejemplo.com', password: 'user123', rol: 'user' },
  ];

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('Se ha producido un error:', error.error);
    } else {
      console.error(
        'El backend retornó un código de estado:',
        error.status,
        error.error
      );
    }
    return throwError(() => new Error('Algo falló. Por favor intente nuevamente'));
  }

  // Método para validar las credenciales de usuario
  login(credentials: AuthRequest): Observable<authResponse> {
    const user = this.users.find(
      (u) => u.email === credentials.email && u.password === credentials.password
    );

    if (user) {
      // Mock de respuesta en caso de éxito
      const response: authResponse = {
        email: user.email,
        rol: user.rol,
        password: '',
      };

      // Guarda el rol en localStorage
      localStorage.setItem('rol', response.rol);

      return of(response); // Simula una respuesta exitosa
    } else {
      // Devuelve un error cuando las credenciales no coinciden
      return throwError(() =>
        new Error('Credenciales incorrectas. Inténtalo de nuevo.')
      );
    }
  }

  // Método para cerrar sesión
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('rol');
  }

  // Obtener correo electrónico para restablecimiento de contraseña
  requestPasswordReset(email: string): Observable<any> {
    const apiURl = `${this.apiUrl}/auth/forgot-password`; // Crear endpoint
    return this.http.post(apiURl, { email }).pipe(catchError(this.handleError));
  }
}
