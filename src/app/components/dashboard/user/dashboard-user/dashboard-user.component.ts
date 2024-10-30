import { Component } from '@angular/core';
import { TableUserComponent } from "../table-user/table-user.component";
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-dashboard-user',
  standalone: true,
  imports: [TableUserComponent, CardComponent],
  templateUrl: './dashboard-user.component.html',
  styleUrl: './dashboard-user.component.css'
})
export class DashboardUserComponent {

}
