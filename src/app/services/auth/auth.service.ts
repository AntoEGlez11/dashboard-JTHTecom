import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, map, Observable, of, throwError } from 'rxjs';
import { authResponse } from '../../interfaces/authResponse';
import { AuthRequest } from '../../interfaces/authRequest';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'assets/json/mock-login.json';  // URL del backend

  constructor(private http:HttpClient) { }

  // login(credentials:AuthRequest):Observable<authResponse> {
  //   console.log(credentials);
  //   const headers = new HttpHeaders({'Content-Type': 'application/json'});

  //   return this.http.get<authResponse>(this.apiUrl, { headers }).pipe(
  //     map((response) => {
  //       if (
  //         credentials.email === response.email &&
  //         credentials.password === response.password
  //       ) {
  //         localStorage.setItem('token', response.token);
  //         localStorage.setItem('rol', response.rol);
  //         console.log('Inicio de sesión exitoso');
  //         return response;
  //       } else {
  //         throw new Error('Credenciales inválidas');
  //       }
  //     }),
  //     catchError(this.handleError)
  //   );
  // }
  login(credentials: AuthRequest): Observable<authResponse> {
    console.log('Intento de login con:', credentials);

    // Simula una respuesta exitosa para cualquier credencial
    const mockResponse: authResponse = {
      token: 'mock-jwt-token',
      rol: credentials.email.includes('admin') ? 'admin' : 'user',
      password: '',
      email: ''
    };

    // Simulación con retraso opcional para ver indicadores de carga
    return of(mockResponse).pipe(
      delay(1000), // Simula una espera de 1 segundo
      catchError(this.handleError) // Manejo de errores si es necesario
    );
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('rol');
  }

  private handleError(error:HttpErrorResponse){
    if (error.status===0) {
      console.error('se ha producido un error', error.error);
    }else{
      console.error('backend retorno codigo de estado', error.status, error.error);
    }
    return throwError(()=> new Error('Algo fallo. Por favor intente nuevamente'));
  }
}
