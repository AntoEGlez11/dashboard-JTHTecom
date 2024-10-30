import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css'
})
export class ChartComponent  implements OnInit{
  ngOnInit() {
    new Chart('myChart', {
      type: 'bar',
      data: {
        labels: ['Enero', 'Febrero', 'Marzo'],
        datasets: [
          {
            label: 'Ventas',
            data: [10, 20, 30],
            backgroundColor: ['#007bff', '#28a745', '#ffc107'],
          },
        ],
      },
    });
  }
}

