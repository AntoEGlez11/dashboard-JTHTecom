import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { dataAltan } from '../../../../interfaces/dataAltan';
import { DataTecomService } from '../../../../services/main/data-tecom.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-user.component.html',
  styleUrls: ['./table-user.component.css'],
})
export class TableUserComponent implements OnInit {
  data: dataAltan[] = [];
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
        this.loading = false;
      },
      error: (error) => {
        console.error('Error al obtener los datos', error);
        this.loading = false;
      },
    });
  }

  resaltar(item: dataAltan): void {
    this.itemSeleccionado = item;
  }

  quitarResaltar(item: dataAltan): void {
    // Solo limpiar la selección si el ítem que sale es el mismo seleccionado.
    if (this.itemSeleccionado === item) {
      this.itemSeleccionado = null;
    }
  }

  verDetalle(item: dataAltan): void {
    console.log("aqui entro"
    );
    this.router.navigate(['/data-detalle', item.id]);
  }
}
