import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TopDetailsService {
    constructor( private http: HttpClient) {}

    getRiskyUsers() {
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
    getUploadExceedData() {
        let url = '/api/users_uploading_excess_data';
        url += '?records=6';
        return this.http.get(url);
    }
    getTopThreats() {
        return [
            {
                name: 'Privilege Misuse',
                info: 'No of stages 3, Risk Scoring Scheme Static, Weight 100.0',
                duration: '236 Days ago',
                date: 'Wed, 10 May 2017',
                time: '@22:44:16',
                count: 1
            },
            {
                name: 'Phishing Campaign',
                info: 'No of stages 3, Risk Scoring Scheme Static, Weight 100.0',
                duration: '236 Days ago',
                date: 'Wed, 10 May 2017',
                time: '@22:33:19',
                count: 23
            },
            {
                name: 'Advanced CyberThreat',
                info: 'No of stages 3, Risk Scoring Scheme Static, Weight 100.0',
                duration: '236 Days ago',
                date: 'Wed, 10 May 2017',
                time: '@22:33:19',
                count: 1
            },
            {
                name: 'Insider Threat',
                info: 'No of stages 3, Risk Scoring Scheme Static, Weight 100.0',
                duration: '236 Days ago',
                date: 'Wed, 10 May 2017',
                time: '@19:48:36',
                count: 2
            }
        ]
    }
    getTopViolations() {
        return [
            {
                name: 'Audit Log Tampering',
                info: 'Audit Log Tampering',
                duration: '236 Days ago',
                date: 'Wed, 10 May 2017',
                time: '@22:44:16',
                count: 8
            },
            {
                name: 'Critical File Exfiltrated via USB',
                info: 'Critical File Exfiltrated',
                duration: '236 Days ago',
                date: 'Wed, 10 May 2017',
                time: '@22:33:19',
                count: 1
            },
            {
                name: 'Rare Interactive Login Observed',
                info: 'Rare Remote Interactive Login',
                duration: '236 Days ago',
                date: 'Wed, 10 May 2017',
                time: '@22:33:19',
                count: 3
            },
            {
                name: 'Spam Email',
                info: 'Spam Email',
                duration: '236 Days ago',
                date: 'Wed, 10 May 2017',
                time: '@19:48:36',
                count: 43
            }
        ]
    }
}
