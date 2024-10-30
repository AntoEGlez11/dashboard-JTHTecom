import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/shared/header/header.component";
import { FooterComponent } from "./components/shared/footer/footer.component";
import { DashboardHomeComponent } from "./components/dashboard/dashboard-home/dashboard-home.component";
import { SidebarComponent } from "./components/shared/sidebar/sidebar.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, DashboardHomeComponent, SidebarComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dashboard-JTHTecom';

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token'); // verifica si hay token guardado
  }
}
