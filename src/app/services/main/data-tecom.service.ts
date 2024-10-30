import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, of, throwError } from 'rxjs';
import { dataAltan } from '../../interfaces/dataAltan';
import { enviroment } from '../../config/enviroments';

@Injectable({
    providedIn: 'root'
})
export class DataTecomService {
    constructor(private http:HttpClient) { }

    getDataTecom(): Observable<dataAltan[]> {
        console.log(enviroment.apiDataAltan);
        
        return this.http.get<dataAltan[]>(enviroment.apiDataAltan).pipe(
            catchError(this.handleError)
        )
    }

    asociarVehiculo(asociacion: { id: any; vehiculo: string }): Observable<any> {
        return this.http.post(`${enviroment.apiDataAsociacion}`, asociacion).pipe(
            catchError(this.handleError)
        );
    }

    // getDataById(id: string | null): Observable<dataAltan> {
    //     console.log(id);
        
    //     return this.http.get<dataAltan>(`${enviroment.apiDataAltanId}/${id}`).pipe(
    //         catchError(this.handleError));
    // }
    getDataById(id: string | null): Observable<dataAltan> {
        const url = 'assets/data-altanId.json'; // Sin el slash inicial.
        console.log('URL:', url);
      
        return this.http.get<dataAltan>(url).pipe(
          catchError(this.handleError)
        );
      }

    private handleError(error: HttpErrorResponse) {
        if (error.status === 0) {
            console.error('se ha producido un error', error.error);
        } else {
            console.error('backend retorno codigo de estado', error.status, error.error);
        }
        return throwError(() => new Error('Algo fallo. Por favor intente nuevamente'));
    }
}
