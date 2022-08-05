import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  constructor(
    private graficasService: GraficasService
  ) { }

  ngOnInit(): void {

    this.graficasService.getUsuariosRSDonaData()
      .subscribe(({labels, data})=>{
        this.doughnutChartData.labels=labels
        this.doughnutChartData.datasets.push({data})
      });

  }

  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: [],
    datasets: []
  };
  

}
