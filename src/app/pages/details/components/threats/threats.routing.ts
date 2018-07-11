import { Routes, RouterModule }  from '@angular/router';
import { Threats } from './threats.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
    {
        path: '',
        component: Threats
    }
];
export const routing: ModuleWithProviders = RouterModule.forChild(routes);
