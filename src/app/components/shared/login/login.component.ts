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
      password: this.loginForm.value.password
    };

    this.authService.login(credentials).subscribe({
      next: (response) => {
        this.redirectUser(response.rol);
      },
      error: (err) => {
        this.errorMessage = 'Error en el inicio de sesión. Verifica tus credenciales.';
        console.error('Error en el inicio de sesión:', err);
        this.isLoading = false; // Detener el indicador de carga
      }
    });
  }

  redirectUser(rol: string) {
    console.log(rol);
    
    if (rol === 'admin') {
      this.router.navigate(['/dashboard-home']);
    } else if (rol === 'manager-movil') {
      this.router.navigate(['/dashboard-manager']);
    } else if (rol === 'manager-user'){
      this.router.navigate(['/dashboard-cliente']);
    } else {
      this.router.navigate(['/dashboard-usuario'])
    }
  }
}
