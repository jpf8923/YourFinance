//Represent purchase info as a graph
import { Component } from '@angular/core';
import { GetAccountInfoService } from '../get-account-info.service';
import { PieChartDataService } from '../pie-chart-type-data.service'
import { Transaction } from '../Transaction';
import { Chart } from 'chart.js/auto';
import { pieData } from '../pieData';
//Handle pie chart by...
//Type
//

@Component({
  selector: 'app-display-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})

export class GraphComponent {
  chartId: string;
  theseNumbers?: number[];
  theseLabels?: string[];
  pList?: Transaction[];
  thisChart;
  ngOnInit(){
    this.getPurchaseData();
  }

  constructor(private getter:GetAccountInfoService, private getPieData:PieChartDataService){
    this.chartId = "test";
    this.thisChart = new Chart(this.chartId, {
        type: 'pie',
        data: {
          labels: this.theseLabels,
          datasets: [{
            label: 'Transaction Type',
            data: this.theseNumbers,
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
          }]
        }
      }
    );
  }

  getLabels(list : pieData[]){
    let labels : string[] = [];
    for(let i = 0; i < list.length; i++){
      labels.push(list[i].label.valueOf());
    }
    return labels;
  }

  getValues(list : pieData[]){
    let numbers : number[] = [];
    for(let i = 0; i < list.length; i++){
      numbers.push(list[i].value);
    }
    return numbers;
  }
  //Types of charts:
  //Labels:type, date
  //Values:Money spent
  getPurchaseData(){
    //Only handles transaction type.
    this.getter.getData().subscribe( (accData) => {
      this.getPieData.getData(accData.transactionHistory).subscribe((datum) => {
        this.theseNumbers = this.getValues(datum);
        this.theseLabels = this.getLabels(datum);
      })
    
    } );

  }
}
