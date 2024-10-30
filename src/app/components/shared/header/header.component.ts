import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private router:Router){}

  //verifica si el usuario tiene un Token JWT almacenado
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  // cierra la sesion elimiando el token y redirige al login
  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']); //falta componente de login
  }
}
