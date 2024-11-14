import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, of, throwError } from 'rxjs';
import { dataAltan } from '../../interfaces/dataAltan';
import { environment } from '../../config/environments';

@Injectable({
    providedIn: 'root'
})
export class DataTecomService {
    constructor(private http:HttpClient) { }

    // Obtener todos los registros de DataAltan
    getDataTecom(): Observable<dataAltan[]> {
        console.log(environment.apiDataAltan);
        return this.http.get<dataAltan[]>(`${environment.apiDataAltan}/all`).pipe(
            catchError(this.handleError)
        );
    }

    // Asociacion de data-altan con vehiculo
    asociarVehiculo(asociacion: { dataAltanId: number, vehiculoId: number }): Observable<any> {
        // Endpoint para asociar el vehiculo
        const url = `${environment.apiDataAltan}/${asociacion.dataAltanId}/associateVehiculo/${asociacion.vehiculoId}`;
        return this.http.post(url, {}).pipe(
            catchError(this.handleError)
        );
    }

    // Obtener un DataAltan por ID (solo si no incluye el vehiculo asociado)
    getDataById(id: string | null): Observable<dataAltan> {
        const url = 'assets/data-altanId.json';  // Para pruebas con archivos estáticos
        console.log('URL:', url);
        return this.http.get<dataAltan>(url).pipe(
            catchError(this.handleError)
        );
    }

    // Obtener un DataAltan por ID, con el Vehículo asociado
    getDataByIdWithVehiculo(id: number): Observable<dataAltan> {
        const url = `${environment.apiDataAltan}/${id}/withVehiculo`;  // Asumiendo que tu endpoint es este
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
