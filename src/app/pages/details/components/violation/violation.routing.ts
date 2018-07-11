import { Routes, RouterModule }  from '@angular/router';
import { Violation } from './violation.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
    {
        path: '',
        component: Violation
    }
];
export const routing: ModuleWithProviders = RouterModule.forChild(routes);
