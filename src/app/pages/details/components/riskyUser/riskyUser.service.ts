import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RiskyUserService {
    constructor(private http: HttpClient) {}

    getData() {
        return [
            {
                name: 'Danae Farone',
                department: 'Engineering',
                riskScore: 590.7,
                icon: 'user'
            },{
                name: 'Major Fisch',
                department: 'Marketing',
                riskScore: 487,
                icon: 'user'
            }, {
                name: 'Casandra Baur',
                department: 'Sales',
                riskScore: 312.8,
                icon: 'user'
            }, {
                name: '10.0.1.1',
                department: '',
                riskScore: 200.5,
                icon: 'globe'
            }, {
                name: 'Jim Duster',
                department: 'Marketing',
                riskScore: 200.5,
                icon: 'user'
            }
        ];
    }
    getUploadExceedData(limit) {
        const url = `/api/users_uploading_excess_data?records=20&page=${limit}`;
        return this.http.get(url);
    }
    getSelectedUserData(sourceId) {
        // sourceId = '112.5.243.48';
        const url = `api/get_Userdata_by_Source?source=${sourceId}`;
        return this.http.get(url);
    }
}
