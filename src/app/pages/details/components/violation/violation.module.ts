import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { NgaModule } from '../../../../theme/nga.module';

import { Violation } from './violation.component';
import { routing }       from './violation.routing';


@NgModule({
    imports: [
        CommonModule,
        NgaModule,
        routing
    ],
    declarations: [
        Violation
    ]
})
export class ViolationModule {}
