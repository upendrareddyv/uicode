import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { NgaModule } from '../../../../theme/nga.module';

import { Threats } from './threats.component';
import { routing }       from './threats.routing';


@NgModule({
    imports: [
        CommonModule,
        NgaModule,
        routing
    ],
    declarations: [
        Threats
    ]
})
export class RiskyUserModule {}
