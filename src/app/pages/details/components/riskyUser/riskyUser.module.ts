import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { NgaModule } from '../../../../theme/nga.module';

import { RiskyUser } from './riskyUser.component';
import { routing }       from './riskyUser.routing';


@NgModule({
    imports: [
        CommonModule,
        NgaModule,
        routing
    ],
    declarations: [
        RiskyUser
    ]
})
export class RiskyUserModule {}
