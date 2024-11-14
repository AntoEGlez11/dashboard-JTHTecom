import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { dataAltan } from '../../../../interfaces/dataAltan';
import { DataTecomService } from '../../../../services/main/data-tecom.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-table-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './table-user.component.html',
  styleUrls: ['./table-user.component.css'],
})
export class TableUserComponent implements OnInit {
  data: dataAltan[] = [];
  filteredData: dataAltan[] = []; // Datos filtrados
  filtroProducto: string = '';    // Filtro para el producto
  filtroIMSI1: string = '';      // Filtro para IMSI1
  loading: boolean = true;
  itemSeleccionado: dataAltan | null = null;

  constructor(
    private dataTecomService: DataTecomService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.dataTecomService.getDataTecom().subscribe({
      next: (response) => {
        this.data = response;
        this.filteredData = response; // Inicializamos los datos filtrados con los datos completos
        this.loading = false;
      },
      error: (error) => {
        console.error('Error al obtener los datos', error);
        this.loading = false;
      },
    });
  }

  // Función para filtrar los datos
  buscar(): void {
    this.filteredData = this.data.filter((item) => {
      console.log(this.filteredData);
      
      return (
        // Filtro por producto
        (this.filtroProducto ? item.producto.toLowerCase().includes(this.filtroProducto.toLowerCase()) : true) &&
        // Filtro por IMSI1
        (this.filtroIMSI1 ? item.idIMSI1.toLowerCase().includes(this.filtroIMSI1.toLowerCase()) : true)
      );
    });
  }

  // Funciones para resaltar y quitar el resaltado
  resaltar(item: dataAltan): void {
    this.itemSeleccionado = item;
  }

  quitarResaltar(item: dataAltan): void {
    if (this.itemSeleccionado === item) {
      this.itemSeleccionado = null;
    }
  }

  // Función para ver detalle de un item
  verDetalle(item: dataAltan): void {
    console.log("Aquí entro al detalle");
    this.router.navigate(['/data-detalle', item.id]);
  }
}
