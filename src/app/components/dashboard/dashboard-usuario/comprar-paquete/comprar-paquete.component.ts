import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { delay } from 'rxjs';

@Component({
  selector: 'app-comprar-paquete',
  standalone: true,
  imports: [],
  templateUrl: './comprar-paquete.component.html',
  styleUrl: './comprar-paquete.component.css'
})
export class ComprarPaqueteComponent implements OnInit {
  Retornar() {
      this.router.navigate(['/dashboard-usuario']);
  }
  confirmarCompra() {
    alert("Compra Confirmada.");
    delay(4000); // Retraso de 2 segundos
    this.router.navigate(['/dashboard-usuario']);
  }

  mb: number | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.mb = +params['mb']; // Convertir a número
    });
  }

}
