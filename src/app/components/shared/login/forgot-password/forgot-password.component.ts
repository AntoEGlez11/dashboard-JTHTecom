import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../../services/auth/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {

  forgotPasswordForm: FormGroup;
  isLoading = false;
  successMessage = '';
  errorMessage =  '';

  constructor(
    private fb: FormBuilder,
    private authService : AuthService,
    private router : Router
  ) {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.forgotPasswordForm.invalid) 
      return;
    this.isLoading = true;
    this.successMessage = '';
    this.errorMessage = '';

    const email = this.forgotPasswordForm.get('email')?.value;
    this.authService.requestPasswordReset(email).subscribe({
      next: () => {
        this.isLoading = false;
        this.successMessage = 'Revisa tu correo para obtener la nueva contraseña';
        setTimeout(() => this.router.navigate(['/login']), 3000); // Redirigir después de 3 segundos
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = 'Ocurrio un error. Intentalo de nuevo.';
      }
    });
  }
  goBack() {
    this.router.navigate(['/login']);
  }


}
