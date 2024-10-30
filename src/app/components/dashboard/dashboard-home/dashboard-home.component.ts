import { Component } from '@angular/core';
import { ClientAssociationComponent } from "../../client-association/client-association.component";
import { TableUserComponent } from "../user/table-user/table-user.component";

@Component({
  selector: 'app-dashboard-home',
  standalone: true,
  imports: [TableUserComponent],
  templateUrl: './dashboard-home.component.html',
  styleUrl: './dashboard-home.component.css'
})
export class DashboardHomeComponent {

}
