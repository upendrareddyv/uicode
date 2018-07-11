import {Injectable} from '@angular/core';
import {BaThemeConfigProvider, colorHelper} from '../../../theme';

@Injectable()
export class PieChartService {

  constructor(private _baConfig:BaThemeConfigProvider) {
  }

  getData() {
    let pieColor = this._baConfig.get().colors.custom.dashboardPieChart;
    return [
      {
        color: pieColor,
        description: 'Risky Users',
        stats: 100,
        icon: 'person',
      }, {
        color: pieColor,
        description: 'Risky Resources',
        stats: '3',
        icon: '',
      }, {
        color: pieColor,
        description: 'Risky Accounts',
        stats: '32',
        icon: 'face',
      }, {
        color: pieColor,
        description: 'IRMS Tickets',
        stats: '12',
        icon: 'refresh',
      }
    ];
  }
}
