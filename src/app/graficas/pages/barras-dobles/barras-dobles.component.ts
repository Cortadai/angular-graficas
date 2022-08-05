import { Component } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-barras-dobles',
  templateUrl: './barras-dobles.component.html',
  styles: [
  ]
})
export class BarrasDoblesComponent {

  labels:string[]=[ '2020', '2021', '2022', '2023'];
    
  public proveedoresBarChartData: ChartData<'bar'> = {
    labels: this.labels,
    datasets: [
      { 
        data: [ 100, 200, 300,400 ], 
        label: 'Vendedor A',
        backgroundColor: "#607CF5",
        hoverBackgroundColor: "#02C2D4"
      },
      { 
        data: [ 50, 250, 30, 450 ], 
        label: 'Vendedor B',
        backgroundColor: "#80D402",
        hoverBackgroundColor: "#02C2D4"
      }
    ]
  };

  public productoBarChartData: ChartData<'bar'> = {
    labels: this.labels,
    datasets: [
      { 
        data: [ 200, 300, 400, 500 ], 
        label: "Coches",
        backgroundColor: "#607CF5",
        hoverBackgroundColor: "#02C2D4"
      }
    ]
  };

}
