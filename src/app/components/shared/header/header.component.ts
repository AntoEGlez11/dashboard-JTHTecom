import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../../../services/main/usuarios.service';
import { CommonModule } from '@angular/common';

declare var bootstrap: any;

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  usuario: any = null;

  constructor(
    private router: Router,
    private usuariosService: UsuariosService
  ) {}

  ngOnInit(): void {
    if (this.isLoggedIn()) {
      this.usuariosService.obtenerDatosUsuarioLogueado().subscribe((data: any) => {
        // console.log(data);
        
        this.usuario = data;
        // console.log(this.usuario);
        
      });
    }
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  // Método para abrir el modal de perfil
  openPerfilModal(): void {
    const modalElement = document.getElementById('perfilModal');
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  }

  goToEditProfile(): void {
    this.router.navigate(['/editar-perfil']);
  }
}
