import { Component } from '@angular/core';
import { ClientAssociationComponent } from "../../client-association/client-association.component";
import { TableUserComponent } from "../dashboard-manager/table-user/table-user.component";
import { GestionUsuariosComponent } from "./gestion-usuarios/gestion-usuarios.component";
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard-home',
  standalone: true,
  imports: [
    RouterModule,
    GestionUsuariosComponent,
    SidebarComponent
  ],
  templateUrl: './dashboard-home.component.html',
  styleUrl: './dashboard-home.component.css'
})
export class DashboardHomeComponent {

}
