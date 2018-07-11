import { Routes, RouterModule } from '@angular/router';

import { Details } from './details.component';
import { RiskyUser } from './components/riskyUser/riskyUser.component';
import { Violation } from './components/violation/violation.component';
import { Threats } from './components/threats/threats.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
    {
        path: '',
        component: Details,
        children: [
            {
                path: 'riskyUser',
                component: RiskyUser
            },
            {
                path: 'violation',
                component: Violation
            },
            {
                path: 'threats',
                component: Threats
            }
        ]
    }
];

export const routing = RouterModule.forChild(routes);
