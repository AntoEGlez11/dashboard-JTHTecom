import { Component } from '@angular/core';
import { UsuariosService } from '../../../../services/main/usuarios.service';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editar-perfil',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './editar-perfil.component.html',
  styleUrl: './editar-perfil.component.css'
})
export class EditarPerfilComponent {

  usuario = {
    nombreCompleto: '',
    email: '',
    telefono: ''
  };

  constructor(
    private usuariosService : UsuariosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cargarDatosUsuario();
  }

  // Cargar datos del usuario logueado
  cargarDatosUsuario(): void {
    this.usuariosService.obtenerDatosUsuarioLogueado().subscribe((data: any) => {
      this.usuario = data;
    });
  }

  // Guardar cambios del perfil
  onSubmit(): void {
    console.log("mandar ");
    
    // this.usuariosService.editarUsuario(this.usuario.id, this.usuario).subscribe(() => {
    //   alert('Perfil actualizado con éxito');
    //   this.router.navigate(['/dashboard']);
    // });
  }
}
