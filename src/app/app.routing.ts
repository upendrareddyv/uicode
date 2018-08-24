import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
    {
        path: '**',
        redirectTo: 'login'
    }
    /*{
        path: '**',
        redirectTo: 'pages/dashboard'
    }*/
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});
