import { Component, OnInit } from '@angular/core';
import 'easy-pie-chart/dist/jquery.easypiechart.js';

import { RiskyUserService } from './riskyUser.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'risky-user-details',
    templateUrl: './riskyUser.html',
    styleUrls: ['./riskyUser.scss']
})

export class RiskyUser implements OnInit{
    charts: Array<Object>;
    private init = false;
    private selectedUser: string = null;
    private allUsers: any;

    constructor(private riskyUserService: RiskyUserService, private routeParam: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.charts = this.riskyUserService.getData();
        this.routeParam.paramMap.subscribe((params) => {
            this.selectedUser = params.get('selectedUser');
        });
        if (this.selectedUser) {
            console.log('Need to call the new API by passing the userID');
            this.loadPieCharts();
            this.updatePieCharts();
        } else {
            this.riskyUserService.getUploadExceedData().subscribe((res: any) => {
                this.allUsers = res.data;
                this.sortUsersOnSize();
            });
        }
    }
    sortUsersOnSize() {
        this.allUsers = this.allUsers.sort((a, b) => a.llamadas < b.llamadas ? 1 : -1);
        console.log(this.allUsers);
    }

    ngAfterViewInit() {
        if (!this.init) {

            this.init = true;
        }
    }
    private loadPieCharts() {

        jQuery('.chart').each(function() {
            let chart = jQuery(this);
            chart.easyPieChart({
                easing: 'easeOutBounce',
                onStep: function(from, to, percent) {
                    jQuery(this.el).find('.percent').text(Math.round(percent));
                },
                barColor: jQuery(this).attr('data-rel'),
                trackColor: 'rgba(0,0,0,0)',
                size: 100,
                scaleLength: 0,
                animation: 2000,
                lineWidth: 9,
                lineCap: 'round',
            });
        });
    }

    private updatePieCharts() {
        let getRandomArbitrary = (min, max) => {
            return Math.random() * (max - min) + min;
        };

        jQuery('.pie-charts .chart').each(function(index, chart) {
            jQuery(chart).data('easyPieChart').update(getRandomArbitrary(55, 90));
        });
    }
}
