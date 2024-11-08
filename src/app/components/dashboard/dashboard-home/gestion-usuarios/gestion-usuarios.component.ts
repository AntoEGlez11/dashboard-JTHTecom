import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../../interfaces/usuario';
import { UsuariosService } from '../../../../services/main/usuarios.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-gestion-usuarios',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './gestion-usuarios.component.html',
  styleUrls: ['./gestion-usuarios.component.css']
})
export class GestionUsuariosComponent implements OnInit {
  usuarios: Usuario[] = []; // Lista de usuarios
  roles: string[] = ['Administrador', 'Usuario', 'Supervisor']; // Opciones de roles
  filtroNombre: string = ''; // Filtro por nombre
  filtroRol: string = ''; // Filtro por rol
  usuarioSeleccionado: Usuario = this.inicializarUsuario(); // Usuario a editar o crear
  esNuevoUsuario: boolean = false; // Flag para identificar si es un nuevo usuario

  constructor(private usuariosService: UsuariosService) {} // Inyectar el servicio

  ngOnInit(): void {
    this.cargarUsuarios(); // Cargar usuarios al inicializar
  }

  // Inicializar un usuario vacío
  private inicializarUsuario(): Usuario {
    return { 
      id: 0, 
      uuid: '', 
      nombre: '', 
      apellidoPaterno: '', 
      apellidoMaterno: '', 
      email: '', 
      password: '', 
      dateOfBirth: '', 
      phoneNumber: '', 
      createdAt: '', 
      updatedAt: '', 
      isActive: true, 
      roles: [] 
    };
  }

  // Cargar usuarios desde el servicio
  cargarUsuarios(): void {
    this.usuariosService.obtenerUsuarios().subscribe({
      next: (data) => {
        if (Array.isArray(data)) {
          this.usuarios = data;
        } else {
          console.error('Los datos recibidos no son un arreglo de usuarios:', data);
        }
      },
      error: (err) => console.error('Error al cargar usuarios:', err),
    });
  }

  // Filtrar usuarios
  usuariosFiltrados(): Usuario[] {
    return this.usuarios.filter((usuario) => {
      const nombreCompleto = `${usuario.nombre} ${usuario.apellidoPaterno} ${usuario.apellidoMaterno}`;
      const rolValido = usuario.roles[0] || ''; // Filtramos por el primer rol

      return (
        nombreCompleto.toLowerCase().includes(this.filtroNombre.toLowerCase()) &&
        (!this.filtroRol || rolValido === this.filtroRol)
      );
    });
  }

  // Abrir modal para editar usuario
  abrirModalEditar(usuario: Usuario): void {
    this.usuarioSeleccionado = { ...usuario };
    this.esNuevoUsuario = false;
    this.mostrarModal('usuarioModal');
  }

  // Abrir modal para crear un nuevo usuario
  abrirModalNuevoUsuario(): void {
    this.usuarioSeleccionado = this.inicializarUsuario();
    this.esNuevoUsuario = true;
    this.mostrarModal('usuarioModal');  // Usar el mismo ID del modal
  }

  // Guardar cambios o crear un nuevo usuario
  guardarCambios(): void {
    if (this.esNuevoUsuario) {
      this.crearUsuario();
    } else {
      this.actualizarUsuario();
    }
  }

  // Método para crear un usuario
  private crearUsuario(): void {
    // Formatear correctamente el `dateOfBirth` si está presente
    const dateOfBirth = this.usuarioSeleccionado.dateOfBirth ? new Date(this.usuarioSeleccionado.dateOfBirth).toISOString() : undefined;

    const usuarioFormateado = {
      id: this.usuarioSeleccionado.id, // Asegurarse de que `uuid` esté correcto
      uuid: this.usuarioSeleccionado.uuid,
      nombre: this.usuarioSeleccionado.nombre,
      apellidoPaterno: this.usuarioSeleccionado.apellidoPaterno,
      apellidoMaterno: this.usuarioSeleccionado.apellidoMaterno,
      email: this.usuarioSeleccionado.email,
      password: this.usuarioSeleccionado.password,
      dateOfBirth: dateOfBirth, // Si está vacío, lo dejamos en null
      phoneNumber: this.usuarioSeleccionado.phoneNumber,
      createdAt: this.usuarioSeleccionado.createdAt,
      isActive: this.usuarioSeleccionado.isActive,
      roles: this.usuarioSeleccionado.roles.map(role => role.toUpperCase()) // Roles en mayúsculas
    };

    this.usuariosService.crearUsuario(usuarioFormateado).subscribe({
      next: (nuevoUsuario) => {
        this.usuarios.push(nuevoUsuario); // Agregar el nuevo usuario a la lista
        this.cerrarModal('usuarioModal');
      },
      error: (err) => console.error('Error al crear usuario:', err),
    });
  }

  // Método para actualizar usuario
  private actualizarUsuario(): void {
    // Formatear correctamente el `dateOfBirth` si está presente
    const dateOfBirth = this.usuarioSeleccionado.dateOfBirth ? new Date(this.usuarioSeleccionado.dateOfBirth).toISOString() : undefined;

    const usuarioFormateado = {
      id: this.usuarioSeleccionado.id, // Asegurarse de que `uuid` esté correcto
      uuid: this.usuarioSeleccionado.uuid,
      nombre: this.usuarioSeleccionado.nombre,
      apellidoPaterno: this.usuarioSeleccionado.apellidoPaterno,
      apellidoMaterno: this.usuarioSeleccionado.apellidoMaterno,
      email: this.usuarioSeleccionado.email,
      password: this.usuarioSeleccionado.password,
      dateOfBirth: dateOfBirth, // Si está vacío, lo dejamos en null
      phoneNumber: this.usuarioSeleccionado.phoneNumber,
      createdAt: this.usuarioSeleccionado.createdAt,
      isActive: this.usuarioSeleccionado.isActive,
      roles: this.usuarioSeleccionado.roles.map(role => role.toUpperCase()) // Roles en mayúsculas
    };

    this.usuariosService.editarUsuario(this.usuarioSeleccionado.id, usuarioFormateado).subscribe({
      next: (data) => {
        const index = this.usuarios.findIndex((u) => u.uuid === data.uuid);
        if (index !== -1) this.usuarios[index] = data;
        this.cerrarModal('usuarioModal');
      },
      error: (err) => console.error('Error al actualizar usuario:', err),
    });
  }

  // Eliminar usuario
  eliminarUsuario(id: number): void {
    this.usuariosService.eliminarUsuario(id).subscribe({
      next: () => {
        this.usuarios = this.usuarios.filter((usuario) => usuario.id !== id);
      },
      error: (err) => console.error('Error al eliminar usuario:', err),
    });
  }

  // Mostrar modal
  private mostrarModal(modalId: string): void {
    const modalElement = document.getElementById(modalId);
    if (modalElement) {
      const modal = new (window as any).bootstrap.Modal(modalElement);
      modal.show();
    }
  }

  // Cerrar modal
  cerrarModal(modalId: string): void {
    const modalElement = document.getElementById(modalId);
    if (modalElement) {
      const modal = (window as any).bootstrap.Modal.getInstance(modalElement);
      modal?.hide();
    }
    this.usuarioSeleccionado = this.inicializarUsuario(); // Reinicia el usuario seleccionado
  }
}
