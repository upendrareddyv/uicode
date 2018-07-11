import { Injectable } from '@angular/core';
import { BaThemeConfigProvider, colorHelper } from '../../../../theme';

@Injectable()
export class RiskyUserService {
    constructor(private _baConfig: BaThemeConfigProvider) {}

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
}
