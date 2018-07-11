import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { routing } from './details.routing';
import { Details } from './details.component';
import { RiskyUser } from './components/riskyUser/riskyUser.component';
import { RiskyUserService } from './components/riskyUser/riskyUser.service';
import { Violation } from './components/violation/violation.component';
import { ViolationService } from './components/violation/violation.service';
import { Threats } from './components/threats/threats.component';
import { ThreatsService } from './components/threats/threats.service';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgaModule,
        routing,
    ],
    declarations: [
        Details,
        RiskyUser,
        Violation,
        Threats
    ],
    providers: [
        RiskyUserService,
        ViolationService,
        ThreatsService
    ]
})

export class DetailsModule {
}
