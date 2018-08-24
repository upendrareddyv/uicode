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
    private selectedUserDetails: any = {};
    private allUsers: any = [];
    private offset: number = 0;
    private totalRecords: number = 0;
    private recordsReturned: number = 0;

    constructor(private riskyUserService: RiskyUserService, private routeParam: ActivatedRoute) {
        this.offset = 0;
        this.recordsReturned = 0;
    }

    ngOnInit(): void {
        this.charts = this.riskyUserService.getData();
        this.routeParam.paramMap.subscribe((params) => {
            this.selectedUser = params.get('selectedUser');
        });
        if (this.selectedUser) {
            this.riskyUserService.getSelectedUserData(this.selectedUser).subscribe( (res: any) => {
                this.selectedUserDetails.userInfo = res.userDetails[0];
                this.selectedUserDetails.data = res.sourceData;
            });
        } else {
            this.getAllUsers();
        }
    }
    getAllUsers() {
        this.riskyUserService.getUploadExceedData(this.offset).subscribe((res: any) => {
            this.totalRecords = res._totalRecords;
            this.allUsers = this.allUsers.concat(res.data);
            this.recordsReturned = this.allUsers.length;
        });
    }
    sortUsersOnSize() {
        this.allUsers = this.allUsers.sort((a, b) => a.llamadas < b.llamadas ? 1 : -1);
    }

    ngAfterViewInit() {
        if (!this.init) {
            this.init = true;
        }
    }
    loadMoreUsers() {
        this.offset++;
        this.getAllUsers();
    }
}
