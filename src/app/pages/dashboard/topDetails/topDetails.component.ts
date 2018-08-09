import { Component, Input } from '@angular/core';
import { TopDetailsService } from './topDetails.service';
import 'easy-pie-chart/dist/jquery.easypiechart.js';

@Component({
    selector: 'top-details',
    templateUrl: './topDetails.html',
    styleUrls: ['./topDetails.scss']
})

export class TopDetails {
    riskUsersList;
    threatsList;
    violationsList;

    private _init = false;
    @Input() componentType: string;

    constructor(private _topDetailsService: TopDetailsService) {
        // this.riskUsersList = this._topDetailsService.getRiskyUsers();
        this.threatsList = this._topDetailsService.getTopThreats();
        this.violationsList = this._topDetailsService.getTopViolations();
    }

    ngAfterViewInit() {
        if (!this._init) {
            this._init = true;
        }
        if (this.componentType === 'riskyUser') {
            this.getRiskyUser();
        }
    }

    getRiskyUser() {
        this._topDetailsService.getUploadExceedData().subscribe((res: any) => {
            this.riskUsersList = res.data;
        });
    }
}
