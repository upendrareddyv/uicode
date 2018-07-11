import { Component, Input } from '@angular/core';
import { TopDetailsService } from './topDetails.service';
import 'easy-pie-chart/dist/jquery.easypiechart.js';

@Component({
    selector: 'top-details',
    templateUrl: './topDetails.html',
    styleUrls: ['./topDetails.scss']
})

export class TopDetails {

    public riskUsersList: Array < Object > ;
    public threatsList: Array < Object > ;
    public violationsList: Array < Object > ;
    private _init = false;
    @Input() componentType: string;

    constructor(private _topDetailsService: TopDetailsService) {
        this.riskUsersList = this._topDetailsService.getRiskyUsers();
        this.threatsList = this._topDetailsService.getTopThreats();
        this.violationsList = this._topDetailsService.getTopViolations();
    }

    ngAfterViewInit() {
        if (!this._init) {
            this._init = true;
        }
    }
}