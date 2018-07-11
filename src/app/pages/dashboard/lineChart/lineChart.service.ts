import {Injectable} from '@angular/core';
import {BaThemeConfigProvider, colorHelper, layoutPaths} from '../../../theme';

@Injectable()
export class LineChartService {

  constructor(private _baConfig:BaThemeConfigProvider) {
  }

  getData() {

    var layoutColors = this._baConfig.get().colors;
    var graphColor = this._baConfig.get().colors.custom.dashboardLineChart;

    return {
      type: 'serial',
      theme: 'blur',
      marginTop: 15,
      marginRight: 15,
      responsive: {
        'enabled': true
      },
      dataProvider: [
        { date: new Date(2012, 11), value: 0, value0: 0 },
        { date: new Date(2013, 0), value: 150, value0: 190},
        { date: new Date(2013, 1), value: 300, value0: 200},


        { date: new Date(2013, 2), value: 250, value0: 22},
        { date: new Date(2013, 3), value: 210, value0: 250},
        { date: new Date(2013, 4), value: 24, value0: 290},
        { date: new Date(2013, 5), value: 31, value0: 260},
        { date: new Date(2013, 6), value: 40, value0: 250},
        { date: new Date(2013, 7), value: 37, value0: 200},
        { date: new Date(2013, 8), value: 180, value0: 220},
        { date: new Date(2013, 9), value: 50, value0: 260},
        { date: new Date(2013, 10), value: 40, value0: 300},
        { date: new Date(2013, 11), value: 200, value0: 250},
        { date: new Date(2014, 0), value: 50, value0: 130},

        { date: new Date(2014, 1), value: 30, value0: 130},
        { date: new Date(2014, 2), value: 180, value0: 130},
        { date: new Date(2014, 3), value: 100, value0: 130},
        { date: new Date(2014, 4), value: 255, value0: 130},
        { date: new Date(2014, 5), value: 210, value0: 130},
        { date: new Date(2014, 6), value: 650, value0: 130},
        { date: new Date(2014, 7), value: 110, value0: 130},
        { date: new Date(2014, 8), value: 172, value0: 130},
        { date: new Date(2014, 9), value: 269, value0: 130},
        { date: new Date(2014, 10), value: 141, value0: 130},
        { date: new Date(2014, 11), value: 353, value0: 130},
        { date: new Date(2015, 0), value: 548, value0: 130},
        { date: new Date(2015, 1), value: 498, value0: 130}
      ],
      categoryField: 'date',
      categoryAxis: {
        parseDates: true,
        gridAlpha: 0,
        color: layoutColors.defaultText,
        axisColor: layoutColors.defaultText
      },
      valueAxes: [
        {
          minVerticalGap: 50,
          gridAlpha: 0,
          color: layoutColors.defaultText,
          axisColor: layoutColors.defaultText
        }
      ],
      graphs: [
        {
          id: 'g0',
          bullet: 'none',
          useLineColorForBulletBorder: true,
          lineColor: colorHelper.hexToRgbA(graphColor, 0.3),
          lineThickness: 1,
          negativeLineColor: layoutColors.danger,
          type: 'smoothedLine',
          valueField: 'value0',
          fillAlphas: 1,
          fillColorsField: 'lineColor'
        },
        {
          id: 'g1',
          bullet: 'none',
          useLineColorForBulletBorder: true,
          lineColor: colorHelper.hexToRgbA(graphColor, 0.15),
          lineThickness: 1,
          negativeLineColor: layoutColors.danger,
          type: 'smoothedLine',
          valueField: 'value',
          fillAlphas: 1,
          fillColorsField: 'lineColor'
        }
      ],
      chartCursor: {
        categoryBalloonDateFormat: 'MM YYYY',
        categoryBalloonColor: '#4285F4',
        categoryBalloonAlpha: 0.7,
        cursorAlpha: 0,
        valueLineEnabled: true,
        valueLineBalloonEnabled: true,
        valueLineAlpha: 0.5
      },
      dataDateFormat: 'MM YYYY',
      export: {
        enabled: true
      },
      creditsPosition: 'bottom-right',
      zoomOutButton: {
        backgroundColor: '#fff',
        backgroundAlpha: 0
      },
      zoomOutText: '',
      pathToImages: layoutPaths.images.amChart
    };
  }
}
