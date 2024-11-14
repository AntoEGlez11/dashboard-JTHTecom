import { Component } from '@angular/core';
import { TableUserComponent } from './table-user/table-user.component';

@Component({
  selector: 'app-dashboard-manager',
  standalone: true,
  imports: [TableUserComponent],
  templateUrl: './dashboard-manager.component.html',
  styleUrl: './dashboard-manager.component.css'
})
export class DashboardManagerComponent {

}
