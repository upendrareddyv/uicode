import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgaModule } from '../../../../theme/nga.module';

import { RiskyUser } from './riskyUser.component';


@NgModule({
    imports: [
        CommonModule,
        NgaModule
    ],
    declarations: [
        RiskyUser
    ]
})
export class RiskyUserModule {
}
