import { Component } from '@angular/core';
import 'easy-pie-chart/dist/jquery.easypiechart.js';

import { ThreatsService } from './threats.service';

@Component({
    selector: 'threats',
    templateUrl: './threats.html',
    styleUrls: ['./threats.scss']
})

export class Threats {
    public charts: Array<Object>;
    private _init = false;

    constructor(private _threatsService: ThreatsService) {
        this.charts = this._threatsService.getData();
        var contentContainer = document.getElementsByClassName('al-content')[0];
        if (contentContainer) {
            contentContainer.classList.add('inner-page');
        }
    }

    ngAfterViewInit() {
        if (!this._init) {
            this._init = true;
        }
    }
}
