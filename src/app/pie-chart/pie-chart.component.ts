import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';


export interface data {
  [key: string]: any;
}


@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements data {

  public constructor(private http: HttpClient) {
    this.defineDataPoints();
  }

  chart: any;
  isButtonVisible = false;

  // visitorsChartDrilldownHandler = (e: any) => {
  //   this.chart.options = this.visitorsDrilldownedChartOptions;
  //   this.chart.options.data = this.options[e.dataPoint.name];
  //   this.chart.options.title = { text: e.dataPoint.name }
  //   this.chart.render();
  //   this.isButtonVisible = false;
  // }

  visitorsDrilldownedChartOptions = {
    animationEnabled: true,
    theme: "light2",
    axisY: {
      gridThickness: 0,
      lineThickness: 1
    },
    data: []
  };

  newVSReturningVisitorsOptions = {
    animationEnabled: true,
    theme: "light2",
    title: {
      text: "CC vs DC vs Cash vs Check"
    },
    subtitles: [
      //   {
      // 	text: "",
      // 	backgroundColor: "#2eacd1",
      // 	fontSize: 16,
      // 	fontColor: "white",
      // 	padding: 5
      // }
    ],
    data: []
  };

  options: data = {
    "New vs Returning Visitors": [{
      type: "pie",
      name: "New vs Returning Visitors",
      startAngle: 90,
      cursor: "pointer",
      explodeOnClick: false,
      showInLegend: true,
      legendMarkerType: "square",
      indexLabelPlacement: "inside",
      indexLabelFontColor: "white",
      dataPoints: [
        { y: 551160, name: "New Visitors", color: "#058dc7", indexLabel: "62.56%" },
        { y: 329840, name: "Returning Visitors", color: "#50b432", indexLabel: "37.44%" },
        { y: 329840, name: "Returning Visitors", color: "#50b432", indexLabel: "37.44%" },
        { y: 329840, name: "Returning Visitors", color: "#50b432", indexLabel: "37.44%" }
      ]
    }],
  };


  defineDataPoints() {

    this.http.get("http://127.0.0.1:5000/transactions/A00313/medias").subscribe((data: any) => {
      console.log(data["Cash"])
    var total = 0;
    total += data["Cash"]
    total += data["Credit_Card"]
    total += data["Debit_Card"]
    total += Number.parseInt(data["Check"])
    console.log("total:"+total)
    console.log(Array.isArray(data))
    const dataPoints: any[] = data.map((item: any) => ({
      name: item[0],
      y: item[1],
      color: "#058dc7",
      indexLabel: (total / item[1]) + "%"
    })
    );

    this.options["New vs Returning Visitors"][0].dataPoints = dataPoints;
    this.chart.render()
  }, error => {
    console.error('Error: ' + error);
  });
  }
  //   "New Visitors": [{
  //     color: "#058dc7",
  //     name: "New Visitors",
  //     type: "column",
  //     dataPoints: [
  //       { label: "Jan", y: 42600 },
  //       { label: "Feb", y: 44960 },
  //       { label: "Mar", y: 46160 },
  //       { label: "Apr", y: 48240 },
  //       { label: "May", y: 48200 },
  //       { label: "Jun", y: 49600 },
  //       { label: "Jul", y: 51560 },
  //       { label: "Aug", y: 49280 },
  //       { label: "Sep", y: 46800 },
  //       { label: "Oct", y: 57720 },
  //       { label: "Nov", y: 59840 },
  //       { label: "Dec", y: 54400 }
  //     ]
  //   }],
  //   "Returning Visitors": [{
  //     color: "#50b432",
  //     name: "Returning Visitors",
  //     type: "column",
  //     dataPoints: [
  //       { label: "Jan", y: 21800 },
  //       { label: "Feb", y: 25040 },
  //       { label: "Mar", y: 23840 },
  //       { label: "Apr", y: 24760 },
  //       { label: "May", y: 25800 },
  //       { label: "Jun", y: 26400 },
  //       { label: "Jul", y: 27440 },
  //       { label: "Aug", y: 29720 },
  //       { label: "Sep", y: 29200 },
  //       { label: "Oct", y: 31280 },
  //       { label: "Nov", y: 33160 },
  //       { label: "Dec", y: 31400 }
  //     ]
  //   }]
  // };

  // handleClick(event: Event) {
  //   this.chart.options = this.newVSReturningVisitorsOptions;
  //   this.chart.options.data = this.options["New vs Returning Visitors"];
  //   this.chart.render();
  //   this.isButtonVisible = false;
  // }

  getChartInstance(chart: object) {
    this.chart = chart;
    this.chart.options = this.newVSReturningVisitorsOptions;
    this.chart.options.data = this.options["New vs Returning Visitors"];
    this.chart.render();
  }
}