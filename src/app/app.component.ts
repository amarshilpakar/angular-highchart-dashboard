import { Component, ViewChild, HostListener, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string = 'high-chart'
  showSidenav: boolean = false;
  breakpoint: number;
  @ViewChild('drawer') drawer: MatDrawer;
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth < 950) {
      this.showSidenav = true;
    } else {
      this.showSidenav = false;
      if (this.drawer) {
        this.drawer.close();
      }
    }
  }
  chart1: Chart;
  chart2: Chart;
  chart3: Chart;
  chart4: Chart;
  line: Chart;
  doughnut1: Chart;
  doughnut2: Chart;


  constructor() { }

  ngOnInit(): void {
    if (window.innerWidth < 950) {
      this.showSidenav = true;
    } else {
      this.showSidenav = false;
      if (this.drawer) {
        this.drawer.close();
      }
    }

    this.generateCharts();
  }

  generateCharts() {
    let chart1 = new Chart({
      chart: {
        height: 150,
        type: 'areaspline'
      },
      title: {
        text: ''
      },
      legend: {
        enabled: false
      },
      xAxis: {
        visible: false
      },
      yAxis: {
        visible: false,
        min: 0,
        max: 100
      },

      tooltip: {
        backgroundColor: '#FF7160',
        style: {
          color: 'white'
        },
        formatter: function () {
          return '<b>' + this.y + '</b>';
        }
      },
      credits: {
        enabled: false
      },
      plotOptions: {
        areaspline: {
          fillOpacity: 0.5,
          color: '#FF7160',
          fillColor: {
            linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
            stops: [
              [0, '#FFB4AC'], // start
              [1, '#FFFDFC'] // end
            ]
          }
        }
      },
      series: [{
        type: undefined,
        marker: {
          enabled: false
        },
        data: [29.9, 71.5, 78.4, 12.2, 44.0, 76.0, 35.6, 48.5, 21.4,
          94.1, 54.4]
      }]
    });
    this.chart1 = chart1;
    chart1.ref$.subscribe(console.log);
    let chart2 = new Chart({
      chart: {
        height: 150,
        type: 'areaspline'
      },
      title: {
        text: ''
      },
      legend: {
        enabled: false
      },
      xAxis: {
        visible: false
      },
      yAxis: {
        visible: false,
        min: 0,
        max: 100
      },

      tooltip: {
        backgroundColor: '#FFC678',
        style: {
          color: 'white'
        },
        formatter: function () {
          return '<b>' + this.y + '</b>';
        }
      },
      credits: {
        enabled: false
      },
      plotOptions: {
        areaspline: {
          fillOpacity: 0.5,
          color: '#FFC678',
          fillColor: {
            linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
            stops: [
              [0, '#FFE6C4'], // start
              [1, '#FFFDFC'] // end
            ]
          }
        }
      },
      series: [{
        type: undefined,
        marker: {
          enabled: false
        },
        data: [76.0, 35.6, 48.5, 21.4,
          94.1, 54.4, 29.9, 71.5, 78.4, 12.2, 44.0]
      }]
    });
    this.chart2 = chart2;
    chart2.ref$.subscribe(console.log);

    let chart3 = new Chart({
      chart: {
        height: 150,
        type: 'areaspline'
      },
      title: {
        text: ''
      },
      legend: {
        enabled: false
      },
      xAxis: {
        visible: false
      },
      yAxis: {
        visible: false,
        min: 0,
        max: 100
      },

      tooltip: {
        backgroundColor: '#77D587',
        style: {
          color: 'white'
        },
        formatter: function () {
          return '<b>' + this.y + '</b>';
        }
      },
      credits: {
        enabled: false
      },
      plotOptions: {
        areaspline: {
          fillOpacity: 0.5,
          color: '#77D587',
          fillColor: {
            linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
            stops: [
              [0, '#C4EDCB'], // start
              [1, '#FFFDFC'] // end
            ]
          }
        }
      },
      series: [{
        type: undefined,
        marker: {
          enabled: false
        },
        data: [76.0, 35.6, 54.4, 29.9, 71.5, 48.5, 21.4,
          94.1, 78.4, 12.2, 44.0]
      }]
    });
    this.chart3 = chart3;
    chart3.ref$.subscribe(console.log);

    let chart4 = new Chart({
      chart: {
        height: 150,
        type: 'areaspline'
      },
      title: {
        text: ''
      },
      legend: {
        enabled: false
      },
      xAxis: {
        visible: false
      },
      yAxis: {
        visible: false,
        min: 0,
        max: 100
      },

      tooltip: {
        backgroundColor: '#44C4EC',
        style: {
          color: 'white'
        },
        formatter: function () {
          return '<b>' + this.y + '</b>';
        }
      },
      credits: {
        enabled: false
      },
      plotOptions: {
        areaspline: {
          fillOpacity: 0.5,
          color: '#44C4EC',
          fillColor: {
            linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
            stops: [
              [0, '#AFE6F7'], // start
              [1, '#FFFDFC'] // end
            ]
          }
        }
      },
      series: [{
        type: undefined,
        marker: {
          enabled: false
        },
        data: [29.9, 71.5, 78.4, 12.2, 76.0, 35.6, 48.5, 21.4,
          94.1, 54.4, 44.0]
      }]
    });
    this.chart4 = chart4;
    chart4.ref$.subscribe(console.log);

    let line = new Chart({
      chart: {
        height: 200,
        type: 'line'
      },
      title: {
        text: ''
      },
      legend: {
        enabled: false
      },
      xAxis: {
        categories: ['Mar', 'May', 'Jul', 'Sep', 'Nov', 'Jan']
      },
      yAxis: {
        title: {
          text: ''
        },
        /* make all y-axis gridlines invisible */
        gridLineColor: 'transparent'
      },

      tooltip: {
        style: {
          color: '#44C4EC'
        },
        formatter: function () {
          return '<b>' + this.y + '</b>';
        }
      },
      credits: {
        enabled: false
      },
      series: [{
        type: undefined,
        marker: {
          enabled: false
        },
        data: [29, 71, 32, 12, 76, 10]
      }]
    });
    this.line = line;
    line.ref$.subscribe(console.log);


    let doughnut1 = new Chart({
      chart: {
        height: 150,
        type: 'pie'
      },
      title: {
        text: ''
      },
      legend: {
        enabled: false
      },
      xAxis: {
        categories: ['Mar', 'May', 'Jul', 'Sep', 'Nov', 'Jan']
      },
      yAxis: {
        title: {
          text: ''
        },
        /* make all y-axis gridlines invisible */
        gridLineColor: 'transparent'
      },

      tooltip: {
        style: {
          color: '#44C4EC'
        },
        formatter: function () {
          return '<b>' + this.y + '</b>';
        }
      },
      credits: {
        enabled: false
      },
      series: [{
        type: undefined,
        data: [
          {name: 'Yellow Slice', y: 75, color: '#44C4EC'},
          {name: 'Yellow Slice', y: 10, color: '#FFBA5C'},
          {name: 'Yellow Slice', y: 15, color: '#FF7160'},
          
        ],
        innerSize: '60%',
        borderWidth: 8,
        showInLegend: false,
        dataLabels: {
          enabled: false
        }
      }]
    });
    this.doughnut1 = doughnut1;
    doughnut1.ref$.subscribe(console.log);

    let doughnut2 = new Chart({
      chart: {
        height: 150,
        type: 'pie'
      },
      title: {
        text: ''
      },
      legend: {
        enabled: false
      },
      xAxis: {
        categories: ['Mar', 'May', 'Jul', 'Sep', 'Nov', 'Jan']
      },
      yAxis: {
        title: {
          text: ''
        },
        /* make all y-axis gridlines invisible */
        gridLineColor: 'transparent'
      },

      tooltip: {
        style: {
          color: '#44C4EC'
        },
        formatter: function () {
          return '<b>' + this.y + '</b>';
        }
      },
      credits: {
        enabled: false
      },
      series: [{
        type: undefined,
        data: [
          {name: 'Yellow Slice', y: 75, color: '#44C4EC'},
          {name: 'Yellow Slice', y: 10, color: '#FFBA5C'},
          {name: 'Yellow Slice', y: 15, color: '#FF7160'},
          
        ],
        innerSize: '60%',
        borderWidth: 8,
        showInLegend: false,
        dataLabels: {
          enabled: false
        }
      }]
    });
    this.doughnut2 = doughnut2;
    doughnut2.ref$.subscribe(console.log);
  }


}
