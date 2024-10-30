import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthRequest } from '../../../interfaces/authRequest';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Cambié 'styleUrl' por 'styleUrls'
})

export class LoginComponent {
  loginForm: FormGroup;
  isLoading = false;
  errorMessage: string = '';

  constructor(
    private router: Router,
    private authService: AuthService,
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  get f() {
    return this.loginForm.controls; // Acceso a controles del formulario
  }

  login() {
    if (this.loginForm.invalid) {
      return;
    }
    this.isLoading = true;

    const credentials: AuthRequest = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
      rol: 'user' // El rol se puede establecer directamente aquí o en el backend
    };

    this.authService.login(credentials).subscribe({
      next: (response) => {
        localStorage.setItem('token', response.token); // Almacena el token
        this.redirectUser(response.rol); // Redirigir según el rol
      },
      error: (err) => {
        this.errorMessage = 'Error en el inicio de sesión. Verifica tus credenciales.';
        console.error('Error en el inicio de sesión:', err);
        this.isLoading = false; // Detener el indicador de carga
      }
    });
  }

  redirectUser(rol: string) {
    if (rol === 'admin') {
      this.router.navigate(['/dashboard-home']);
    } else {
      this.router.navigate(['/dashboard-user']);
    }
  }
}
