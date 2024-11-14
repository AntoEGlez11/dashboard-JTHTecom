import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../../services/main/usuarios.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-usuario',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './dashboard-usuario.component.html',
  styleUrl: './dashboard-usuario.component.css'
})
export class DashboardUsuarioComponent implements OnInit {

  usuario = {
    nombreCompleto: '',
    email: '',
    telefono: ''
  }
  paquete = {
    mbRestantes: 0,
    mbTotal: 0,
    fechaVencimiento: ''
  };

  historial = [
    { fecha: new Date(), datosUsados: 100 },
    { fecha: new Date(), datosUsados: 250 },
    { fecha: new Date(), datosUsados: 50 }
  ];
  constructor(private usuariosService: UsuariosService) {}

  ngOnInit(): void {
    this.cargarDatosUsuario();
    this.cargarPaqueteDatos();
  }

  cargarDatosUsuario(): void {
    this.usuariosService.obtenerDatosUsuarioLogueado().subscribe(data => {
      this.usuario = data;
    });
  }

  cargarPaqueteDatos(): void {
    // Simulación de datos, reemplaza esto con el método del servicio adecuado
    this.paquete = {
      mbRestantes: 1500,
      mbTotal: 5000,
      fechaVencimiento: '2024-12-31'
    };
  }

  comprarPaquete(mb: number): void {
    alert(`Has comprado ${mb} MB adicionales.`);
    // Aquí puedes agregar la lógica para llamar a un endpoint y realizar la compra
  }
}