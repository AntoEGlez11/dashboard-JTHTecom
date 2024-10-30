import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalle-asociacion',
  templateUrl: './detalle-asociacion.component.html',
  styleUrls: ['./detalle-asociacion.component.css']
})
export class DetalleAsociacionComponent implements OnInit {
  volver() {
    this.router.navigate(['/dashboard-user'])
  }
  datosAsociados: any;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.datosAsociados = navigation?.extras.state?.['datos'];
  }

  ngOnInit(): void {
    if (!this.datosAsociados) {
      alert('No hay datos de asociación disponibles.');
      this.router.navigate(['/']); // Redirigir si no hay datos
    }
  }
}
