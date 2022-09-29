import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {ThemePalette} from '@angular/material/core';
import { EChartsOption } from 'echarts';

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subcategories?: Task[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Demand Demo';
  

  weeklyHist =
 [
      {
        "week": "03-01-2021",
        " Revenue ": 1448217.689
      },
      {
        "week": "10-01-2021",
        " Revenue ": 1560297.186
      },
      {
        "week": "17-01-2021",
        " Revenue ": 1464870.861
      },
      {
        "week": "24-01-2021",
        " Revenue ": 1501375.814
      },
      {
        "week": "31-01-2021",
        " Revenue ": 1527154.875
      },
      {
        "week": "07-02-2021",
        " Revenue ": 1522115.736
      },
      {
        "week": "14-02-2021",
        " Revenue ": 1559595.047
      },
      {
        "week": "21-02-2021",
        " Revenue ": 2122298.3789999997
      },
      {
        "week": "28-02-2021",
        " Revenue ": 1811047.784
      },
      {
        "week": "07-03-2021",
        " Revenue ": 1769219.773
      },
      {
        "week": "14-03-2021",
        " Revenue ": 1698612.564
      },
      {
        "week": "21-03-2021",
        " Revenue ": 1675517.99
      },
      {
        "week": "28-03-2021",
        " Revenue ": 1865896.554
      },
      {
        "week": "04-04-2021",
        " Revenue ": 1671541.5
      },
      {
        "week": "11-04-2021",
        " Revenue ": 1559442.883
      },
      {
        "week": "18-04-2021",
        " Revenue ": 1946876.868
      },
      {
        "week": "25-04-2021",
        " Revenue ": 2104014.124
      },
      {
        "week": "02-05-2021",
        " Revenue ": 1729378.8510000003
      },
      {
        "week": "09-05-2021",
        " Revenue ": 1710940.7179999999
      },
      {
        "week": "16-05-2021",
        " Revenue ": 1488682.135
      },
      {
        "week": "23-05-2021",
        " Revenue ": 1670337.656
      },
      {
        "week": "30-05-2021",
        " Revenue ": 1496903.311
      },
      {
        "week": "06-06-2021",
        " Revenue ": 1534057.239
      },
      {
        "week": "13-06-2021",
        " Revenue ": 1608769.734
      },
      {
        "week": "20-06-2021",
        " Revenue ": 1575134.4070000001
      },
      {
        "week": "27-06-2021",
        " Revenue ": 1540200.15
      },
      {
        "week": "04-07-2021",
        " Revenue ": 2047226.4070000001
      },
      {
        "week": "11-07-2021",
        " Revenue ": 1721131.8170000003
      },
      {
        "week": "18-07-2021",
        " Revenue ": 1529604.484
      },
      {
        "week": "25-07-2021",
        " Revenue ": 1750953.803
      },
      {
        "week": "01-08-2021",
        " Revenue ": 1587529.563
      },
      {
        "week": "08-08-2021",
        " Revenue ": 1623684.902
      },
      {
        "week": "15-08-2021",
        " Revenue ": 1589420.0050000001
      },
      {
        "week": "22-08-2021",
        " Revenue ": 1463013.143
      },
      {
        "week": "29-08-2021",
        " Revenue ": 1925712.3460000001
      },
      {
        "week": "05-09-2021",
        " Revenue ": 2045271.641
      },
      {
        "week": "12-09-2021",
        " Revenue ": 1783516.231
      },
      {
        "week": "19-09-2021",
        " Revenue ": 1567200.313
      },
      {
        "week": "26-09-2021",
        " Revenue ": 1777270.0320000001
      },
      {
        "week": "03-10-2021",
        " Revenue ": 1601661.951
      },
      {
        "week": "10-10-2021",
        " Revenue ": 1777179.7289999998
      },
      {
        "week": "17-10-2021",
        " Revenue ": 1701390.7989999999
      },
      {
        "week": "24-10-2021",
        " Revenue ": 1736458.925
      },
      {
        "week": "31-10-2021",
        " Revenue ": 1918454.0399999998
      },
      {
        "week": "07-11-2021",
        " Revenue ": 1765018.5329999998
      },
      {
        "week": "14-11-2021",
        " Revenue ": 1633301.061
      },
      {
        "week": "21-11-2021",
        " Revenue ": 2298887.73
      },
      {
        "week": "28-11-2021",
        " Revenue ": 3254918.4899999998
      },
      {
        "week": "05-12-2021",
        " Revenue ": 2071426.725
      },
      {
        "week": "12-12-2021",
        " Revenue ": 1746937.7149999999
      },
      {
        "week": "19-12-2021",
        " Revenue ": 1294725.817
      },
      {
        "week": "26-12-2021",
        " Revenue ": 1708808.696
      },
      {
        "week": "02-01-2022",
        " Revenue ": 1819564.9079999998
      },
      {
        "week": "09-01-2022",
        " Revenue ": 2144925.988
      },
      {
        "week": "16-01-2022",
        " Revenue ": 1950290.236
      },
      {
        "week": "23-01-2022",
        " Revenue ": 1902071.2629999998
      },
      {
        "week": "30-01-2022",
        " Revenue ": 1813027.879
      },
      {
        "week": "06-02-2022",
        " Revenue ": 1981488.959
      },
      {
        "week": "13-02-2022",
        " Revenue ": 1951184.484
      },
      {
        "week": "20-02-2022",
        " Revenue ": 2116341.477
      },
      {
        "week": "27-02-2022",
        " Revenue ": 2750841.705
      },
      {
        "week": "06-03-2022",
        " Revenue ": 2859608.362
      },
      {
        "week": "13-03-2022",
        " Revenue ": 2150919.77
      },
      {
        "week": "20-03-2022",
        " Revenue ": 2177344.159
      },
      {
        "week": "27-03-2022",
        " Revenue ": 2617343.823
      },
      {
        "week": "03-04-2022",
        " Revenue ": 3650373.608
      },
      {
        "week": "10-04-2022",
        " Revenue ": 3842540.1289999997
      },
      {
        "week": "17-04-2022",
        " Revenue ": 4413260.078
      },
      {
        "week": "24-04-2022",
        " Revenue ": 4348848.045
      },
      {
        "week": "01-05-2022",
        " Revenue ": 3620641.177
      },
      {
        "week": "08-05-2022",
        " Revenue ": 3642631.712
      },
      {
        "week": "15-05-2022",
        " Revenue ": 3533949.5340000005
      },
      {
        "week": "22-05-2022",
        " Revenue ": 3384917.382
      },
      {
        "week": "29-05-2022",
        " Revenue ": 3556789.6939999997
      },
      {
        "week": "05-06-2022",
        " Revenue ": 3081660.868
      },
      {
        "week": "12-06-2022",
        " Revenue ": 3129241.75
      },
      {
        "week": "19-06-2022",
        " Revenue ": 3100964.523
      },
      {
        "week": "26-06-2022",
        " Revenue ": 3281837.2739999997
      },
      {
        "week": "03-07-2022",
        " Revenue ": 3362505.182
      },
      {
        "week": "10-07-2022",
        " Revenue ": 3363283.239
      },
      {
        "week": "17-07-2022",
        " Revenue ": 3177603.158
      },
      {
        "week": "24-07-2022",
        " Revenue ": 3227230.411
      },
      {
        "week": "31-07-2022",
        " Revenue ": 3101548.459
      },
      {
        "week": "07-08-2022",
        " Revenue ": 3158684.158
      },
      {
        "week": "14-08-2022",
        " Revenue ": 3002858.77
      },
      {
        "week": "21-08-2022",
        " Revenue ": 3291532.9129999997
      },
      {
        "week": "28-08-2022",
        " Revenue ": 2985319.964
      },
      {
        "week": "04-09-2022",
        " Revenue ": 2934516.486
      },
      {
        "week": "11-09-2022",
        " Revenue ": 3286942.779
      },
      {
        "week": "18-09-2022",
        " Revenue ": 3215135.3989999997
      },
      {
        "week": "25-09-2022",
        " Revenue ": 3156276.818
      },
      {
        "week": "02-10-2022",
        " Revenue ": 2741962.4390000002
      },
      {
        "week": "09-10-2022",
        " Revenue ": 3148292.1489999997
      },
      {
        "week": "16-10-2022",
        " Revenue ": 2571736.523
      },
      {
        "week": "23-10-2022",
        " Revenue ": 2743620.051
      },
      {
        "week": "30-10-2022",
        " Revenue ": 3213916.482
      },
      {
        "week": "06-11-2022",
        " Revenue ": 3058975.445
      },
      {
        "week": "13-11-2022",
        " Revenue ": 3048978.17
      },
      {
        "week": "20-11-2022",
        " Revenue ": 3378785.204
      },
      {
        "week": "27-11-2022",
        " Revenue ": 4370454.6729999995
      },
      {
        "week": "04-12-2022",
        " Revenue ": 3311011.616
      },
      {
        "week": "11-12-2022",
        " Revenue ": 2942742.029
      },
      {
        "week": "18-12-2022",
        " Revenue ": 2426589.257
      },
      {
        "week": "25-12-2022",
        " Revenue ": 3131031.1039999994
      }
    ]

  weeklyForecast = [
    {
      "week": "25-12-2022",
      " Revenue ": 3131031.1039999994
    },
    {
      "week": "01-01-2023",
      " Revenue ": 3146127.1779999994
    },
    {
      "week": "08-01-2023",
      " Revenue ": 3108291.9909999995
    },
    {
      "week": "15-01-2023",
      " Revenue ": 3672448.1269999994
    },
    {
      "week": "22-01-2023",
      " Revenue ": 3277184.8659999995
    },
    {
      "week": "29-01-2023",
      " Revenue ": 3286403.902
    }
  ]
  
  monthlyHist =
  [
    {
      "month": "01-2021",
      "revenue": 7501916.425
    },
    {
      "month": "02-2021",
      "revenue": 7015056.9459999995
    },
    {
      "month": "03-2021",
      "revenue": 7009246.881000001
    },
    {
      "month": "04-2021",
      "revenue": 7281875.375
    },
    {
      "month": "05-2021",
      "revenue": 8096242.670999999
    },
    {
      "month": "06-2021",
      "revenue": 6258161.530000001
    },
    {
      "month": "07-2021",
      "revenue": 7048916.511000001
    },
    {
      "month": "08-2021",
      "revenue": 8189359.959
    },
    {
      "month": "09-2021",
      "revenue": 7173258.217
    },
    {
      "month": "10-2021",
      "revenue": 8735145.443999998
    },
    {
      "month": "11-2021",
      "revenue": 8952125.814
    },
    {
      "month": "12-2021",
      "revenue": 6821898.953
    },
    {
      "month": "01-2022",
      "revenue": 9629880.274
    },
    {
      "month": "02-2022",
      "revenue": 8799856.625
    },
    {
      "month": "03-2022",
      "revenue": 9805216.114
    },
    {
      "month": "04-2022",
      "revenue": 16255021.86
    },
    {
      "month": "05-2022",
      "revenue": 17738929.498999998
    },
    {
      "month": "06-2022",
      "revenue": 12593704.415
    },
    {
      "month": "07-2022",
      "revenue": 16232170.449000001
    },
    {
      "month": "08-2022",
      "revenue": 12438395.804999998
    },
    {
      "month": "09-2022",
      "revenue": 12592871.482
    },
    {
      "month": "10-2022",
      "revenue": 14419527.644000001
    },
    {
      "month": "11-2022",
      "revenue": 13857193.491999999
    },
    {
      "month": "12-2022",
      "revenue": 11811374.005999997
    }
  ]

  monthlyForecast = 
  [
    {
      "month": "12-2022",
      "revenue": 11811374.005999997
    },
    {
      "month": "01-2023",
      "revenue": 18420875.484
    },
    {
      "month": "02-2023",
      "revenue": 16003111.69
    },
    {
      "month": "03-2023",
      "revenue": 14001282.326
    }
  ]
  quaterlyHist = [
    {
      "quarter": "Q1-2021",
      "revenue": 21526220.252
    },
    {
      "quarter": "Q2-2021",
      "revenue": 21636279.576
    },
    {
      "quarter": "Q3-2021",
      "revenue": 22411534.687
    },
    {
      "quarter": "Q4-2021",
      "revenue": 24509170.210999995
    },
    {
      "quarter": "Q1-2022",
      "revenue": 28234953.013
    },
    {
      "quarter": "Q2-2022",
      "revenue": 46587655.774
    },
    {
      "quarter": "Q3-2022",
      "revenue": 41263437.736
    },
    {
      "quarter": "Q4-2022",
      "revenue": 43604152.285
    }
  ]

  quaterlyForecast = [
    
    {
      "quarter": "Q1-2023",
      "revenue": 43604152.285
    },
    {
      "quarter": "Q2-2023",
      "revenue": 45758962.335
    },
    {
      "quarter": "Q3-2023",
      "revenue": 46765747.979
    },
    {
      "quarter": "Q4-2023",
      "revenue": 48425269.5
    }
  ]


  constructor
  (
    private _formBuilder:FormBuilder
  )
  {}


  dateRangeTrend = this._formBuilder.group
  (
    {
      startDate : [],
      endDate:[]
    }
  )

  dateRangeTable = this._formBuilder.group
  (
    {
      startDate : [],
      endDate:[]
    }
  )

  salesIncreament:number = 1.32;
  impressionsIncreament:number = 4.38;
  revenuesIncreament:number = 1.37;
  workforceIncreament:number = 2.62;
  actual2021:number = 6;
  actual2022:number = 11;
  forecast:number = 14
  selectedChartPeriod:string = "weekly"
  selectedTablePeriod:string = ""

  minorPeriod = "4 weeks"
  chartOption: EChartsOption = 
 {
  xAxis: {
    type: 'category',
    data: this.weeklyHist.map(c => c.week).concat(this.weeklyForecast.map(c => c.week)),
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: this.weeklyHist.map(c => c[" Revenue "]),
      type: 'line',
    },
    {
      data: Array(this.weeklyHist.length - 1 ).concat(this.weeklyForecast.map(c => c[" Revenue "])),
      type: 'line',
    },
  ],
  };
  chartOptionWeekly: EChartsOption = {
    xAxis: {
      type: 'category',
      data: this.weeklyHist.map(c => c.week).concat(this.weeklyForecast.map(c => c.week)),
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: this.weeklyHist.map(c => c[" Revenue "]),
        type: 'line',
      },
      {
        data: Array(this.weeklyHist.length - 1 ).concat(this.weeklyForecast.map(c => c[" Revenue "])),
        type: 'line',
      },
    ],
  };
  chartOptionMonthly: EChartsOption = {
    xAxis: {
      type: 'category',
      data: this.monthlyHist.map(c => c.month).concat(this.monthlyForecast.map(c => c.month)),
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: this.monthlyHist.map(c => c["revenue"]),
        type: 'line',
      },
      {
        data: Array(this.monthlyHist.length - 1).fill('-').concat(this.monthlyForecast.map(c => c["revenue"].toString())),
        type: 'line',
      }
    ],
  };
  chartOptionQuarterly: EChartsOption = {
    xAxis: {
      type: 'category',
      data: this.quaterlyHist.map(c => c.quarter).concat(this.quaterlyForecast.map(c => c.quarter))
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: this.quaterlyHist.map(c => c.revenue),
        type: 'line',
      },
      {
        data: Array(this.quaterlyHist.length -1).fill('-').concat(this.quaterlyForecast.map(c => c["revenue"].toString())),
        type: 'line',
      }
    ],
  };

  

  updateOptions : any
  timer = setInterval(() => {
    
    for (let i = 0; i < 5; i++) {
      this.weeklyForecast.map(c => c[" Revenue "]).shift();
      // this.data.push(this.randomData());
    }
  this.updateOptions = 
  {
      series: 
      [
        {
          data: this.weeklyForecast.map(c => c[" Revenue "])
        }
      ]
    };
  }, 5000);
  


  
  favoriteSeason: string ="";
  chosenProduct: string ="";
  chosenHistPeriod: string ="";
  chosenForecastPeriod: string ="";

  products: string[] = ['Product 1', 'Product 2', 'Product 3', 'Product 4'];
  forecastPeriods: string[] = ['1 Week', '1 Month', '1 Quater'];
  histDurations: string[] = ['0.5 Year', '1 Year', '1.5 Years', '2 Years'];

showFiller = false;
categories: Task = {
  name: 'All',
  completed: false,
  color: 'primary',
  subcategories: [
    {name: 'Category 1', completed: false, color: 'primary'},
    {name: 'Category 2', completed: false, color: 'primary'},
    {name: 'Category 3', completed: false, color: 'primary'},
  ],
}
locations: Task = {
  name: 'All',
  completed: false,
  color: 'primary',
  subcategories: [
    {name: 'Location 1', completed: false, color: 'primary'},
    {name: 'Location 2', completed: false, color: 'primary'},
    {name: 'Location 3', completed: false, color: 'primary'},
  ],
};
period:string = "week"

allComplete: boolean = false;

updateAllComplete() {
  this.allComplete = this.categories.subcategories != null && this.categories.subcategories.every(t => t.completed);
}

someComplete(): boolean {
  if (this.categories.subcategories == null) {
    return false;
  }
  return this.categories.subcategories.filter(t => t.completed).length > 0 && !this.allComplete;
}

setAll(completed: boolean) {
  this.allComplete = completed;
  if (this.categories.subcategories == null) {
    return;
  }
  this.categories.subcategories.forEach(t => (t.completed = completed));
}



print(event:any)
{
  console.log(event)
}

appointDate()
{
  if(this.selectedChartPeriod == 'weekly') 
  {
    this.chartOption = this.chartOptionWeekly
    this.salesIncreament = 1.32;
    this.impressionsIncreament = 4.38;
    this.revenuesIncreament = 1.37;
    this.workforceIncreament = 2.62;
    this.actual2021 = 6;
    this.actual2022 = 11;
    this.forecast = 14
    this.period = "week"
    this.minorPeriod = "4 Weeks"
  }
  if(this.selectedChartPeriod == 'monthly') 
  {
    this.chartOption = this.chartOptionMonthly
    this.salesIncreament = 3.32;
    this.impressionsIncreament = 1.38;
    this.revenuesIncreament = 3.37;
    this.workforceIncreament = 5.62;
    this.actual2021 = 24.5;
    this.actual2022 = 40;
    this.forecast = 48
    this.period = "month"
    this.minorPeriod = "3 Months"
  }
  if(this.selectedChartPeriod == 'quarterly') 
  {
    this.chartOption = this.chartOptionQuarterly
    this.salesIncreament = 2.32;
    this.impressionsIncreament = 5.38;
    this.revenuesIncreament = 5.37;
    this.workforceIncreament = 1.62;
    this.actual2021 = 90;
    this.actual2022 = 156;
    this.forecast =184;
    this.period = "quarter";
    this.minorPeriod = "4 Quarter"
  }
}


}
