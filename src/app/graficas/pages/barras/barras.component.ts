import { Component, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styles: [
  ]
})
export class BarrasComponent {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: {
      x: {},
      y: {
        min: 10
      }
    }
  };
  
  public barChartType: ChartType = 'bar';

  public barChartData: ChartData<'bar'> = {
    labels: [ '2020', '2021', '2022', '2023'],
    datasets: [
      { 
        data: [ 65, 59, 80, 81 ], 
        label: 'Series A',
        backgroundColor: "#607CF5",
        hoverBackgroundColor: "#02C2D4"
      },
      { 
        data: [ 28, 48, 40, 19 ], 
        label: 'Series B',
        backgroundColor: "#80D402",
        hoverBackgroundColor: "#02C2D4"
      },
      { 
        data: [ 26, 42, 78, 23 ], 
        label: 'Series C',
        backgroundColor: "#F7CF02",
        hoverBackgroundColor: "#02C2D4"
      }
    ]
  };

  public randomize(): void {
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100)
     ];
    this.barChartData.datasets[1].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100)
     ];
    this.barChartData.datasets[2].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100)
     ];
    this.chart?.update();
  }

}
