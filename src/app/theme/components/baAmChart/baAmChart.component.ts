import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { BaThemePreloader } from '../../../theme/services';
import { BaAmChartThemeService } from './baAmChartTheme.service';
import { AmChartsService } from '@amcharts/amcharts3-angular';

@Component({
    selector: 'ba-am-chart',
    templateUrl: './baAmChart.html',
    styleUrls: ['./baAmChart.scss'],
    providers: [BaAmChartThemeService],
})
export class BaAmChart {

    @Input() baAmChartConfiguration: Object;
    @Input() baAmChartClass: string;
    @Output() onChartReady = new EventEmitter<any>();

    @ViewChild('baAmChart') public _selector: ElementRef;

    constructor(private _baAmChartThemeService: BaAmChartThemeService, private _amChartsServics: AmChartsService) {
        this._loadChartsLib();
    }

    ngOnInit() {
        this._amChartsServics.theme = this._baAmChartThemeService.getTheme();
    }

    ngAfterViewInit() {
        let chart = this._amChartsServics.makeChart(this._selector.nativeElement, this.baAmChartConfiguration);
        this.onChartReady.emit(chart);
    }

    private _loadChartsLib(): void {
        BaThemePreloader.registerLoader(new Promise((resolve, reject) => {
            let amChartsReadyMsg = 'AmCharts ready';

            if (AmCharts.isReady) {
                resolve(amChartsReadyMsg);
            } else {
                AmCharts.ready(function () {
                    resolve(amChartsReadyMsg);
                });
            }
        }));
    }
}
