import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DataTecomService } from '../../../../services/main/data-tecom.service';

@Component({
  selector: 'app-detalle-usuario',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './detalle-usuario.component.html',
  styleUrls: ['./detalle-usuario.component.css']
})
export class DetalleUsuarioComponent implements OnInit {
  item: any; // Datos del usuario
  vehiculoForm: FormGroup; // Formulario del vehículo

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataTecomService: DataTecomService,
    private fb: FormBuilder
  ) {
    this.vehiculoForm = this.fb.group({
      modelo: ['', Validators.required],
      anio: ['', [Validators.required, Validators.min(1900)]],
      serie: ['', Validators.required],
      motor: ['', Validators.required],
      color: ['', Validators.required],
      version: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.cargarItem(id);
  }

  cargarItem(id: string | null): void {
    this.dataTecomService.getDataById(id).subscribe({
      next: (response) => (this.item = response),
      error: (error) => console.error('Error al obtener el detalle', error)
    });
  }

  asociarVehiculo(): void {
    console.log("asociar vehiculo");
    
    if (this.vehiculoForm.valid) {
      const asociacion = {
        dataAltanId: this.item.id,  // Utilizando el ID de DataAltan
        vehiculoId: this.vehiculoForm.value  // Usando el ID del vehículo
      };

      this.dataTecomService.asociarVehiculo(asociacion).subscribe({
        next: () => {
          alert('Asociación guardada exitosamente');
          this.router.navigate(['/detalle-asociacion'], { state: { datos: asociacion } });
        },
        error: (error) => console.error('Error al asociar vehículo', error)
      });
    }
  }
}
