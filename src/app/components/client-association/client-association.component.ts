import { Component, OnInit } from '@angular/core';
import { CarData } from '../../interfaces/car-data';
import { ClientData } from '../../interfaces/client-data';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client-association',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './client-association.component.html',
  styleUrl: './client-association.component.css'
})
export class ClientAssociationComponent implements OnInit {

  // Datos del auto (pueden venir del backend o de un JSON)
  carData: CarData = {
    id: 1,
    brand: 'BYD',
    model: 'Han EV',
    year: 2023,
    price: 450000,
  };

  // Datos temporales del cliente
  clientData: ClientData = {
    name: '',
    email: '',
    phone: '',
    address: ''
  };

  purchaseComplete: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  // Método para confirmar la compra y asociar datos del auto y cliente
  confirmPurchase(): void {
    console.log('Datos del auto:', this.carData);
    console.log('Datos del cliente:', this.clientData);
    this.purchaseComplete = true;
  }
}
