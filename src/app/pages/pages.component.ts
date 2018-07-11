import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';

import { BaMenuService } from '../theme';
import { PAGES_MENU } from './pages.menu';

@Component({
    selector: 'pages',
    templateUrl: './pages.component.html'
})

export class Pages {
    constructor(private _menuService: BaMenuService, private _router:Router) {
        console.log(this._router);
    }

    ngOnInit() {
        this._menuService.updateMenuByRoutes(<Routes>PAGES_MENU);
    }
}
