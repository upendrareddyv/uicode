import { Routes, RouterModule }  from '@angular/router';
import { RiskyUser } from './riskyUser.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
    {
        path: '',
        component: RiskyUser
    }
];
export const routing: ModuleWithProviders = RouterModule.forChild(routes);
