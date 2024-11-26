import { Component } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { GestionUsuariosComponent } from './gestion-usuarios/gestion-usuarios.component';

@Component({
  selector: 'app-dashboard-home',
  standalone: true,
  imports: [
    RouterModule,
    HeaderComponent,
    FooterComponent,
    GestionUsuariosComponent
  ],
  templateUrl: './dashboard-home.component.html',
  styleUrl: './dashboard-home.component.css'
})
export class DashboardHomeComponent {

}
